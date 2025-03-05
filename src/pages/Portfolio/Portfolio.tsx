import { useState, } from 'react';
import { ExternalLink, Users } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

import { projects, categories } from './data';

export default function Portfolio() {
    const [activeCategory, setActiveCategory] = useState('all');
    
    const filteredProjects = activeCategory === 'all'
        ? projects
        : projects.filter(project => project.category === activeCategory);

    return (
        <div className="min-h-screen bg-background">

            {/* Hero Section */}
            <section className="pt-32 pb-20 md:pt-40 md:pb-28">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
                            Our Portfolio
                        </h1>
                        <p className="text-lg text-muted-foreground mb-8">
                            Explore our successful projects and see how we've helped organizations strengthen their security infrastructure.
                        </p>
                    </div>
                </div>
            </section>

            {/* Category Filter */}
            <section className="py-8 bg-muted/30">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap justify-center gap-4">
                        <Button
                            variant={activeCategory === 'all' ? 'default' : 'outline'}
                            onClick={() => setActiveCategory('all')}
                        >
                            All Projects
                        </Button>
                        {categories.map((category) => (
                            <Button
                                key={category}
                                variant={activeCategory === category ? 'default' : 'outline'}
                                onClick={() => setActiveCategory(category)}
                            >
                                {category}
                            </Button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Projects Grid */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredProjects.map((project, index) => (
                            <Card key={index} className="group overflow-hidden">
                                <CardContent className="p-0">
                                    <div className="relative">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                            <div className="text-center p-6">
                                                <p className="text-white mb-4">{project.description}</p>
                                                <div className="flex justify-center gap-4">
                                                    <Button size="sm" className="bg-white/20 hover:bg-white/30">
                                                        View Details
                                                        <ExternalLink className="ml-2 h-4 w-4" />
                                                    </Button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <div className="flex justify-between items-start mb-4">
                                            <div>
                                                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                                                <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                                                    {project.category}
                                                </span>
                                            </div>
                                            <div className="flex items-center text-muted-foreground">
                                                <Users className="h-4 w-4 mr-1" />
                                                <span className="text-sm">{project.clientCount}+</span>
                                            </div>
                                        </div>
                                        <div className="flex flex-wrap gap-2">
                                            {project.technologies.map((tech, techIndex) => (
                                                <span
                                                    key={techIndex}
                                                    className="bg-secondary text-secondary-foreground px-2 py-1 rounded-md text-sm"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-20 bg-muted/30">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        <div className="text-center">
                            <div className="text-4xl font-bold text-primary mb-2">150+</div>
                            <div className="text-muted-foreground">Projects Completed</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-bold text-primary mb-2">98%</div>
                            <div className="text-muted-foreground">Client Satisfaction</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-bold text-primary mb-2">50+</div>
                            <div className="text-muted-foreground">Countries Served</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-bold text-primary mb-2">10+</div>
                            <div className="text-muted-foreground">Years Experience</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl font-bold mb-6">Ready to Start Your Project?</h2>
                        <p className="text-lg text-muted-foreground mb-8">
                            Let's discuss how we can help secure your organization's digital assets.
                        </p>
                        <Button size="lg" className="group">
                            Get Started
                            <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
}