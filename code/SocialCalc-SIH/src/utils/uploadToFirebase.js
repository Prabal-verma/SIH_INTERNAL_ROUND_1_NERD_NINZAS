// utils/uploadToFirebase.js
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { storage } from '../lib/firebaseConfig';

export const uploadFile = async (file) => {
  try {
    const storageRef = ref(storage, `spreadsheets/${file.name}`);
    await uploadBytes(storageRef, file);
    const downloadURL = await getDownloadURL(storageRef);
    return downloadURL;
  } catch (error) {
    console.error('Upload failed:', error);
    throw error;
  }
};
