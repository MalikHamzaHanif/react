import React from 'react';

function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 px-6 py-12">
      {/* About Section */}
      <section className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="text-lg text-gray-600 mb-6">
          We are a platform dedicated to providing inspiring stories, expert opinions, and daily thoughts from various contributors around the world. Our mission is to share knowledge, spark creativity, and encourage connections through the power of written words.
        </p>
        <p className="text-lg text-gray-600">
          Whether you're here to read thought-provoking articles or share your own stories, we welcome you to our community.
        </p>
      </section>

      {/* Team Section */}
      <section className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <div className="bg-white rounded-xl p-6 shadow-md">
          <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
          <p className="text-gray-600">
            To inspire, educate, and connect people through powerful written content.
          </p>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-md">
          <h3 className="text-xl font-semibold mb-2">Our Values</h3>
          <p className="text-gray-600">
            Integrity, creativity, inclusivity, and collaboration.
          </p>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-md">
          <h3 className="text-xl font-semibold mb-2">Our Team</h3>
          <p className="text-gray-600">
            A diverse group of writers, editors, and creatives passionate about storytelling.
          </p>
        </div>
      </section>
    </div>
  );
}

export default AboutPage;
