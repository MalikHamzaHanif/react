import React from 'react'

function Services() {
  const services = [
    {
      title: "Web Development",
      description: "Building fast, responsive, and scalable web applications using modern technologies.",
    },
    {
      title: "UI/UX Design",
      description: "Designing clean, intuitive interfaces focused on user experience and usability.",
    },
    {
      title: "SEO Optimization",
      description: "Improving website visibility and rankings through best SEO practices.",
    },
  ]

  return (
    <div className="min-h-[70vh] bg-gray-50 py-10 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-blue-700 mb-6">Our Services</h2>
        <p className="text-gray-600 mb-10">
          We offer a variety of services to help you build, grow, and optimize your digital presence.
        </p>

        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-blue-600 mb-2">{service.title}</h3>
              <p className="text-gray-700">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Services
