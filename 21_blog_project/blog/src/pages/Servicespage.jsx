import React from 'react';

function ServicesPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 px-6 py-12">
      {/* Services Section */}
      <section className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl font-bold mb-4">Our Services</h1>
        <p className="text-lg text-gray-600 mb-6">
          We offer a range of services aimed at fostering creativity, education, and storytelling.
        </p>
      </section>

      {/* Services List */}
      <section className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <div className="bg-white rounded-xl p-6 shadow-md">
          <h3 className="text-xl font-semibold mb-2">Blog Publishing</h3>
          <p className="text-gray-600">
            Write and publish your articles on our platform, reaching a broad and diverse audience.
          </p>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-md">
          <h3 className="text-xl font-semibold mb-2">Content Editing</h3>
          <p className="text-gray-600">
            Professional editing services to help you perfect your writing and ensure clarity and impact.
          </p>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-md">
          <h3 className="text-xl font-semibold mb-2">Writing Workshops</h3>
          <p className="text-gray-600">
            Join our interactive workshops to enhance your writing skills and explore creative techniques.
          </p>
        </div>
      </section>
      
      {/* Contact CTA */}
      <section className="text-center mt-20">
        <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
        <p className="text-lg text-gray-600 mb-6">
          Whether you want to publish your first blog or learn the art of writing, we are here to help.
        </p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
          Contact Us
        </button>
      </section>
    </div>
  );
}

export default ServicesPage;
