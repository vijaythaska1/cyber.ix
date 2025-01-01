"use client";

import { useState } from "react";
import Image from "next/image";

const projects = [
  {
    title: "AI-Powered Analytics",
    description: "Revolutionary data insights platform",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80",
    category: "AI & ML",
  },
  {
    title: "Smart City Solutions",
    description: "Urban infrastructure management",
    image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80",
    category: "IoT",
  },
  {
    title: "FinTech Revolution",
    description: "Next-gen payment processing",
    image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&q=80",
    category: "Finance",
  },
];

export function FeaturedWork() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-20 bg-gradient-to-b from-blue-950 to-black relative">
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]" />

      <div className="container mx-auto px-6 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 text-transparent bg-clip-text">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto" />
        </div>

        {/* Project Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`relative group cursor-pointer overflow-hidden rounded-xl transform transition-all duration-500 ease-in-out 
                ${activeIndex === index ? "lg:col-span-2" : "lg:col-span-1"}`}
              onClick={() => setActiveIndex(index)}
            >
              {/* Project Image */}
              <div className="relative h-[400px]">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              </div>

              {/* Project Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <span className="inline-block px-4 py-1 rounded-full text-sm bg-blue-500/20 border border-blue-500/40 mb-3">
                  {project.category}
                </span>
                <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-300">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedWork;
