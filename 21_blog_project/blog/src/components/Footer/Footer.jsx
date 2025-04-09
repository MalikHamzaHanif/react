import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-10">
      <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        <div>
          <h3 className="text-2xl font-bold mb-2">MyBlog</h3>
          <p className="text-gray-400 text-sm">
            Sharing stories, knowledge, and ideas every day.
          </p>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="text-gray-300 hover:text-white">Home</a></li>
            <li><a href="/blogs" className="text-gray-300 hover:text-white">Blogs</a></li>
            <li><a href="/about" className="text-gray-300 hover:text-white">About</a></li>
            <li><a href="/contact" className="text-gray-300 hover:text-white">Contact</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-3">Follow Us</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="https://facebook.com" className="text-gray-300 hover:text-white">Facebook</a></li>
            <li><a href="https://twitter.com" className="text-gray-300 hover:text-white">Twitter</a></li>
            <li><a href="https://instagram.com" className="text-gray-300 hover:text-white">Instagram</a></li>
          </ul>
        </div>
        
      </div>

      <div className="text-center text-sm text-gray-500 border-t border-gray-700 py-4">
        &copy; {new Date().getFullYear()} MyBlog. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
