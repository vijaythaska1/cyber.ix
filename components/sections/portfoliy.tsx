"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const categories = ["All", "Web Apps", "Mobile", "AI/ML", "Cloud"];

const portfolioItems = [
    {
        title: "FinTech Dashboard",
        category: "Web Apps",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80",
        description: "Modern banking dashboard with real-time analytics",
        technologies: ["React", "Node.js", "PostgreSQL"]
    },
    {
        title: "AI Health Assistant",
        category: "AI/ML",
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80",
        description: "Smart health monitoring and prediction system",
        technologies: ["Python", "TensorFlow", "React Native"]
    },
    {
        title: "Smart City Platform",
        category: "Cloud",
        image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80",
        description: "IoT-based urban infrastructure management",
        technologies: ["AWS", "IoT", "React"]
    },
    {
        title: "E-commerce Mobile App",
        category: "Mobile",
        image: "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&q=80",
        description: "Cross-platform shopping experience",
        technologies: ["React Native", "Node.js", "MongoDB"]
    },
    {
        title: "Investment Platform",
        category: "Web Apps",
        image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80",
        description: "Stock trading and portfolio management",
        technologies: ["Next.js", "GraphQL", "PostgreSQL"]
    },
    {
        title: "ML Analytics Tool",
        category: "AI/ML",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80",
        description: "Business intelligence with predictive analytics",
        technologies: ["Python", "scikit-learn", "React"]
    }
];

export function Portfolio() {
    const [activeCategory, setActiveCategory] = useState("All");
    const [hoveredItem, setHoveredItem] = useState<number | null>(null);

    const filteredItems = portfolioItems.filter(
        item => activeCategory === "All" || item.category === activeCategory
    );

    return (
        <section className=" py-20 min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-950 to-black relative">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]" />

            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4 text-gray-400">Our Portfolio</h2>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-12">
                        Explore our latest projects and success stories
                    </p>

                    {/* Category Filter */}
                    <div className="flex flex-wrap justify-center gap-4 mb-12">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={`px-6 py-2 rounded-full transition-all duration-300 ${activeCategory === category
                                    ? "bg-blue-600 text-white"
                                    : "bg-gray-600 text-gray-200 hover:bg-gray-500"
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Portfolio Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredItems.map((item, index) => (
                        <div
                            key={index}
                            className="group relative overflow-hidden rounded-xl bg-gradient-to-b from-blue-700 to-blue-900 shadow-lg transition-all duration-300 hover:-translate-y-2"
                            onMouseEnter={() => setHoveredItem(index)}
                            onMouseLeave={() => setHoveredItem(null)}
                        >
                            <div className="relative h-64">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>

                            <div className="p-6">
                                <span className="inline-block px-3 py-1 text-sm bg-blue-100 text-blue-600 rounded-full mb-3">
                                    {item.category}
                                </span>
                                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                                <p className="text-gray-300 mb-4">{item.description}</p>

                                <div className="flex flex-wrap gap-2 mb-4">
                                    {item.technologies.map((tech, techIndex) => (
                                        <span
                                            key={techIndex}
                                            className="px-2 py-1 text-sm bg-gray-700 text-gray-300 rounded"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <button className="flex items-center text-blue-300 hover:text-blue-400 transition-colors">
                                    View Details
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
