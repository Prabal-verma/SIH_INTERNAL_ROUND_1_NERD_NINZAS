// utils/fetchFiles.js
import { ref, listAll, getDownloadURL } from 'firebase/storage';
import { storage } from '../lib/firebaseConfig';

export const fetchFiles = async () => {
  const listRef = ref(storage, 'files/'); // Adjust the path as needed
  const result = await listAll(listRef);

  const files = await Promise.all(
    result.items.map(async (itemRef) => {
      const url = await getDownloadURL(itemRef);
      return {
        id: itemRef.name, // Use the file name or another unique ID
        name: itemRef.name,
        url: url,
      };
    })
  );

  return files;
};
