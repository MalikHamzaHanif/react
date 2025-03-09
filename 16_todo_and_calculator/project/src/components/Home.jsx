import React from 'react';

function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome To Home Page</h1>
      <p className="text-lg text-gray-700 text-center max-w-2xl">
        Our platform offers a simple and efficient way to manage your daily tasks with our To-Do App
        and perform quick calculations with our feature-rich Calculator App.
      </p>
      
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
        <div className="bg-white shadow-lg rounded-2xl p-6 text-center hover:shadow-xl transition">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">To-Do App</h2>
          <p className="text-gray-600">Stay organized and increase productivity by tracking your tasks effortlessly.</p>
        </div>
        
        <div className="bg-white shadow-lg rounded-2xl p-6 text-center hover:shadow-xl transition">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Calculator App</h2>
          <p className="text-gray-600">Perform basic and advanced calculations with ease using our intuitive calculator.</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
