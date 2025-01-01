import React from 'react';
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

const features = [
  "Innovative Tech Solutions",
  "Dedicated Expert Team",
  "Client-Centric Approach",
  "Cutting-Edge Technologies",
  "Custom & Scalable Solutions",
  "24/7 Support & Assistance"
];

export function About() {
  return (
    <section className="py-24 bg-gradient-to-b from-blue-950 to-black relative overflow-hidden">
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]" />
      
      <div className="container mx-auto px-6 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Section */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl blur opacity-20 group-hover:opacity-30 transition-opacity" />
            
            <div className="relative h-[500px] rounded-xl overflow-hidden">
              <div className="absolute top-0 left-0 w-20 h-20 border-l-2 border-t-2 border-blue-500/30 rounded-tl-xl" />
              <div className="absolute bottom-0 right-0 w-20 h-20 border-r-2 border-b-2 border-purple-500/30 rounded-br-xl" />
              
              <Image
                src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80"
                alt="Teamwork at Cyber.ix"
                fill
                className="object-cover rounded-xl group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="relative">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 text-transparent bg-clip-text">
              About Cyber.ix
            </h2>
            <p className="text-gray-400 text-lg mb-12 leading-relaxed">
              At <strong className="text-gray-300">Cyber.ix</strong>, we specialize in bringing your innovative ideas to life through cutting-edge technology. Our passionate team of developers, designers, and strategists work collaboratively to craft bespoke solutions that empower businesses to thrive in the digital age.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3 group">
                  <div className="relative">
                    <div className="absolute inset-0 bg-blue-500/20 rounded-full blur group-hover:bg-blue-500/30 transition-colors" />
                    <CheckCircle2 className="h-6 w-6 text-blue-400 relative z-10 group-hover:scale-110 transition-transform" />
                  </div>
                  <span className="text-gray-400 group-hover:text-gray-300 transition-colors">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
