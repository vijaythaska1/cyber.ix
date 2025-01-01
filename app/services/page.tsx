import React from 'react';
import { Code2, Globe2, Laptop2, Smartphone, Database, Server, Braces, Gift } from "lucide-react";

const services = [
  {
    icon: <Globe2 className="h-8 w-8" />,
    title: "Web Development",
    description: "Custom web applications with modern technologies and responsive design.",
    gradient: "from-blue-600 to-cyan-400",
    technologies: ["React", "Node.js", "MongoDB", "Express"]
  },
  {
    icon: <Smartphone className="h-8 w-8" />,
    title: "Mobile Development",
    description: "Native and cross-platform mobile apps for iOS and Android.",
    gradient: "from-purple-600 to-pink-400",
    technologies: ["Flutter", "React Native", "Firebase"]
  },
  {
    icon: <Code2 className="h-8 w-8" />,
    title: "Custom Software",
    description: "Tailored software solutions to meet your specific business needs.",
    gradient: "from-green-600 to-emerald-400",
    technologies: ["MERN Stack", "Cloud Services", "APIs"]
  },
  {
    icon: <Laptop2 className="h-8 w-8" />,
    title: "IT Consulting",
    description: "Expert guidance on technology strategy and implementation.",
    gradient: "from-orange-600 to-yellow-400",
    technologies: ["System Architecture", "Tech Strategy", "Cloud Migration"]
  }
];

const techStack = {
  frontend: ["React", "Next.js", "Tailwind CSS", "Material UI"],
  backend: ["Node.js", "Express", "MongoDB", "Firebase"],
  mobile: ["Flutter", "React Native", "Android Studio", "Xcode"],
  tools: ["Git", "Docker", "AWS", "Figma"]
};

const stats = [
  { number: "50+", label: "Projects Completed" },
  { number: "30+", label: "Happy Clients" },
  { number: "5+", label: "Years Experience" },
  { number: "99%", label: "Client Satisfaction" }
];

export function ServicesPage() {
  return (
    <div className="bg-gradient-to-b from-blue-950 to-black relative">
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]" />
      
      {/* Main Services Section */}
      <section className="relative py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 text-transparent bg-clip-text">
              Our Services
            </h2>
            <p className="text-gray-400 text-xl max-w-3xl mx-auto leading-relaxed">
              Leveraging MERN Stack and modern mobile technologies to build powerful, scalable solutions for your business needs.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
            {services.map((service, index) => (
              <div key={index} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl blur opacity-20 group-hover:opacity-30 transition-opacity" />
                
                <div className="relative h-full bg-gray-900 backdrop-blur-xl p-8 rounded-xl border border-gray-800 hover:border-gray-700 transition-all duration-300">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-r ${service.gradient} p-0.5 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <div className="bg-gray-900 w-full h-full rounded-xl flex items-center justify-center">
                      <div className="text-white">
                        {service.icon}
                      </div>
                    </div>
                  </div>

                  <h3 className="text-2xl font-semibold mb-4 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed mb-4">
                    {service.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mt-4">
                    {service.technologies.map((tech, i) => (
                      <span key={i} className="text-xs bg-gray-800 text-gray-300 px-3 py-1 rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Tech Stack Section */}
          <div className="mb-32">
            <h3 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-white to-gray-400 text-transparent bg-clip-text">
              Our Technology Stack
            </h3>
            <div className="grid md:grid-cols-4 gap-8">
              {Object.entries(techStack).map(([category, techs]) => (
                <div key={category} className="bg-gray-900 p-6 rounded-xl border border-gray-800">
                  <h4 className="text-xl font-semibold mb-4 text-white capitalize">
                    {category}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {techs.map((tech, i) => (
                      <span key={i} className="text-sm bg-gray-800 text-gray-300 px-3 py-1 rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-center">
            <div className="absolute inset-0 bg-gray-900 opacity-90 rounded-2xl" />
            <div className="relative">
              <h3 className="text-3xl font-bold text-white mb-6">
                Ready to Start Your Project?
              </h3>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Let's discuss how our expertise in MERN stack and mobile development can bring your ideas to life.
              </p>
              <button className="bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ServicesPage;