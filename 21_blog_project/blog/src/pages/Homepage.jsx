import React from 'react';

function Homepage() {
  return (
    <div className="min-h-screen bg-white text-gray-800 px-6 py-12">
      {/* Hero Section */}
      <section className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl font-bold mb-4">Welcome to Our Blog</h1>
        <p className="text-lg text-gray-600">
          Dive into a world of stories, ideas, and insights shared by writers from all walks of life.
        </p>
      </section>

      {/* Info Section */}
      <section className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <div className="bg-gray-100 rounded-xl p-6 shadow-sm">
          <h3 className="text-xl font-semibold mb-2">Inspiring Stories</h3>
          <p className="text-gray-600">
            Read powerful stories and experiences that spark your imagination.
          </p>
        </div>
        <div className="bg-gray-100 rounded-xl p-6 shadow-sm">
          <h3 className="text-xl font-semibold mb-2">Expert Opinions</h3>
          <p className="text-gray-600">
            Gain insights from professionals and industry experts across various fields.
          </p>
        </div>
        <div className="bg-gray-100 rounded-xl p-6 shadow-sm">
          <h3 className="text-xl font-semibold mb-2">Daily Thoughts</h3>
          <p className="text-gray-600">
            Explore simple yet profound thoughts written from the heart.
          </p>
        </div>
      </section>

   
    </div>
  );
}

export default Homepage;
