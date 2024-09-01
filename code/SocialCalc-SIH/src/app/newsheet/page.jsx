"use client";

import { useUser } from '@clerk/nextjs';
import Spreadsheet from '../../components/Spreadsheet';


const HomePage = () => {
  const { isSignedIn } = useUser();
  

  if (!isSignedIn) {
    return (
      
      <div className="h-[60vh] flex items-center justify-center  bg-black text-white">
        <div className="text-center p-8 bg-gray-900 rounded-lg shadow-lg">
          <h1 className="text-3xl font-semibold mb-4">Welcome to Our Application</h1>
          <p className="text-lg mb-6">Please sign in to access the application and start managing your data.</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Spreadsheet />
    </div>
  );
};

export default HomePage;
