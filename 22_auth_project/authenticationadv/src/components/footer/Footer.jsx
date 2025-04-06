import React from 'react'

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
    
        <div>
          <h2 className="text-lg font-semibold mb-2">About Us</h2>
          <p className="text-sm text-gray-300">
            We are committed to delivering high-quality content and resources to help you grow and learn every day.
          </p>
        </div>

      
        <div>
          <h2 className="text-lg font-semibold mb-2">Quick Links</h2>
          <ul className="space-y-1 text-sm text-gray-300">
            <li><a href="/" className="hover:text-white">Home</a></li>
            <li><a href="/about" className="hover:text-white">About</a></li>
            <li><a href="/contact" className="hover:text-white">Contact</a></li>
            <li><a href="/allposts" className="hover:text-white">Posts</a></li>
          </ul>
        </div>

 
        <div>
          <h2 className="text-lg font-semibold mb-2">Contact</h2>
          <p className="text-sm text-gray-300">Email: support@example.com</p>
          <p className="text-sm text-gray-300">Phone: +1 (123) 456-7890</p>
          <p className="text-sm text-gray-300">Location: Karachi, Pakistan</p>
        </div>
      </div>

      <div className="text-center text-sm text-gray-400 mt-8">
        &copy; {new Date().getFullYear()} YourWebsite. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
