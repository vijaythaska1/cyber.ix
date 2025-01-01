import React from 'react';
import Image from "next/image";
import vijayImage from "../../app/assets/vijay.jpeg"

const testimonials = [
  {
    quote: "Cyber.ix med our business with their innovative solutions. The team's expertise and dedication were exceptional.",
    author: "Mahender Rajput",
    role: "CEO, TechStart Inc",
    image: "/api/placeholder/150/150"
  },
  {
    quote: "Working with Cyber.ix was a game-changer. They delivered beyond our expectations and were always responsive.",
    author: "Vijay Sharma",
    role: "CTO, InnovateCo",
    image: vijayImage
  },
];

export function Testimonials() {
  return (
    <section className="py-24 bg-gradient-to-b from-blue-950 to-black relative overflow-hidden">
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]" />
      
      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 text-transparent bg-clip-text">
            What Our Clients Say
          </h2>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto">
            Trusted by industry leaders and innovative businesses
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="group relative">
              {/* Gradient border effect */}
              <div className="absolute flex inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl blur opacity-20 group-hover:opacity-30 transition-opacity" />
              
              <div className="relative bg-gray-900/80 backdrop-blur-sm p-8 pt-12 rounded-xl border border-gray-800 hover:border-gray-700 transition-all duration-300">
                {/* Quote icon */}
                <div className="absolute -top-6 right-8">
                  <div className="text-5xl text-blue-500/20 group-hover:text-blue-500/30 transition-colors">
                    "
                  </div>
                </div>

                {/* Profile image */}
                <div className="absolute -top-8 left-8">
                  <div className="w-16 h-16 relative rounded-full overflow-hidden">
                    {/* Gradient border */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 p-0.5 rounded-full">
                      <div className="bg-gray-900 w-full h-full rounded-full">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.author}
                          fill
                          className="object-cover rounded-full p-0.5 group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <blockquote className="text-gray-400 mb-6 leading-relaxed">
                  {testimonial.quote}
                </blockquote>
                
                <div className="border-t border-gray-800 pt-4 mt-6">
                  <div className="text-lg font-semibold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-blue-400">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;