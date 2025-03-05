import { useState, } from 'react';
import { Search, Calendar, Clock, ArrowRight, Tag, User } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Footer from '@/components/layout/Footer';
import { featuredPosts, categories, recentPosts, popularTags } from './data';

export default function Blog() {
    const [searchQuery, setSearchQuery] = useState('');



    return (
        <div className="min-h-screen bg-background">

            {/* Hero Section */}
            <section className="pt-32 pb-20 md:pt-40 md:pb-28">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
                            Cybersecurity Insights
                        </h1>
                        <p className="text-lg text-muted-foreground mb-8">
                            Stay informed about the latest trends, threats, and best practices in cybersecurity.
                        </p>
                        <div className="relative max-w-xl mx-auto">
                            <Input
                                type="search"
                                placeholder="Search articles..."
                                className="pl-12"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Posts */}
            <section className="py-20 bg-muted/30">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-12">Featured Articles</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        {featuredPosts.map((post, index) => (
                            <Card key={index} className="overflow-hidden group">
                                <CardContent className="p-0">
                                    <div className="relative">
                                        <img
                                            src={post.image}
                                            alt={post.title}
                                            className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                        <div className="absolute bottom-0 p-6">
                                            <div className="flex items-center gap-4 text-white/80 text-sm mb-2">
                                                <div className="flex items-center">
                                                    <Calendar className="h-4 w-4 mr-1" />
                                                    {post.date}
                                                </div>
                                                <div className="flex items-center">
                                                    <Clock className="h-4 w-4 mr-1" />
                                                    {post.readTime}
                                                </div>
                                            </div>
                                            <h3 className="text-xl font-semibold text-white mb-2">{post.title}</h3>
                                            <div className="flex items-center text-white/80 text-sm">
                                                <User className="h-4 w-4 mr-1" />
                                                {post.author}
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-3 gap-12">
                        {/* Blog Posts */}
                        <div className="lg:col-span-2">
                            <div className="space-y-8">
                                {recentPosts.map((post, index) => (
                                    <Card key={index} className="overflow-hidden">
                                        <CardContent className="p-0">
                                            <div className="md:flex">
                                                <div className="md:w-1/3">
                                                    <img
                                                        src={post.image}
                                                        alt={post.title}
                                                        className="w-full h-48 md:h-full object-cover"
                                                    />
                                                </div>
                                                <div className="p-6 md:w-2/3">
                                                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                                                        <div className="flex items-center">
                                                            <Calendar className="h-4 w-4 mr-1" />
                                                            {post.date}
                                                        </div>
                                                        <div className="flex items-center">
                                                            <Clock className="h-4 w-4 mr-1" />
                                                            {post.readTime}
                                                        </div>
                                                    </div>
                                                    <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                                                    <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                                                    <div className="flex items-center justify-between">
                                                        <div className="flex items-center text-sm text-muted-foreground">
                                                            <User className="h-4 w-4 mr-1" />
                                                            {post.author}
                                                        </div>
                                                        <Button variant="ghost" className="group">
                                                            Read More
                                                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                                        </Button>
                                                    </div>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                            <div className="mt-8 flex justify-center">
                                <Button variant="outline" size="lg">
                                    Load More Articles
                                </Button>
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className="space-y-8">
                            {/* Categories */}
                            <Card>
                                <CardContent className="p-6">
                                    <h3 className="text-xl font-semibold mb-4">Categories</h3>
                                    <div className="space-y-2">
                                        {categories.map((category, index) => (
                                            <Button
                                                key={index}
                                                variant="ghost"
                                                className="w-full justify-between"
                                            >
                                                {category.name}
                                                <span className="text-muted-foreground">{category.count}</span>
                                            </Button>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Popular Tags */}
                            <Card>
                                <CardContent className="p-6">
                                    <h3 className="text-xl font-semibold mb-4">Popular Tags</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {popularTags.map((tag, index) => (
                                            <Button
                                                key={index}
                                                variant="secondary"
                                                size="sm"
                                                className="rounded-full"
                                            >
                                                <Tag className="h-4 w-4 mr-1" />
                                                {tag}
                                            </Button>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Newsletter */}
                            <Card>
                                <CardContent className="p-6">
                                    <h3 className="text-xl font-semibold mb-4">Newsletter</h3>
                                    <p className="text-muted-foreground mb-4">
                                        Stay updated with our latest cybersecurity insights.
                                    </p>
                                    <div className="space-y-4">
                                        <Input placeholder="Enter your email" type="email" />
                                        <Button className="w-full">Subscribe</Button>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}