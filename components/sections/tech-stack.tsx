import React from 'react';
import { Code2, Database, Globe, Lock, Server, Smartphone } from "lucide-react";

const technologies = [
  { icon: <Code2 className="h-8 w-8" />, name: "Frontend Development", tech: "React, Vue, Angular" },
  { icon: <Server className="h-8 w-8" />, name: "Backend Development", tech: "Node.js, Python, Java" },
  { icon: <Database className="h-8 w-8" />, name: "Database", tech: "MongoDB, PostgreSQL" },
  { icon: <Smartphone className="h-8 w-8" />, name: "Mobile", tech: "React Native, Flutter" },
  { icon: <Lock className="h-8 w-8" />, name: "Security", tech: "OAuth, JWT" },
  { icon: <Globe className="h-8 w-8" />, name: "Cloud", tech: "AWS, Azure, GCP" },
];

export function TechStack() {
  return (
    <section className="py-24 bg-gradient-to-b ffrom-blue-950 to-black relative overflow-hidden">
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]" />
      
      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 text-transparent bg-clip-text">
            Our Tech Stack
          </h2>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto">
            We use cutting-edge technologies to build scalable and robust solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {technologies.map((tech, index) => (
            <div key={index} className="group relative">
              {/* Gradient border effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl blur opacity-20 group-hover:opacity-30 transition-opacity" />
              
              <div className="relative h-full bg-gray-900/80 backdrop-blur-sm p-8 rounded-xl border border-gray-800 hover:border-gray-700 transition-all duration-300">
                {/* Icon with gradient background */}
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 p-0.5 mb-6 group-hover:scale-110 transition-transform duration-300">
                  <div className="bg-gray-900 w-full h-full rounded-xl flex items-center justify-center">
                    <div className="text-blue-400 group-hover:text-blue-300 transition-colors">
                      {tech.icon}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all">
                  {tech.name}
                </h3>
                
                <div className="flex flex-wrap gap-2">
                  {tech.tech.split(', ').map((item, i) => (
                    <span 
                      key={i}
                      className="text-sm bg-gray-800 text-gray-300 px-3 py-1 rounded-full group-hover:bg-gray-700 transition-colors"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TechStack;