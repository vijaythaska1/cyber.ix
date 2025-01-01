import React, { useState } from 'react';
import { Phone, Mail, MapPin, ChevronDown } from 'lucide-react';

const ContactPage = () => {
    const [openFaq, setOpenFaq] = useState(null);
    const [mapLoaded, setMapLoaded] = useState(false);

    // Enhanced animation for form submission feedback
    const [formStatus, setFormStatus] = useState('idle');

    const handleSubmit = (e: any) => {
        e.preventDefault();
        setFormStatus('submitting');
        setTimeout(() => setFormStatus('success'), 1000);
    };

    const toggleFaq = (id: any) => {
        setOpenFaq(openFaq === id ? null : id);
    };

    return (
        <main className=" py-20 bg-gradient-to-b from-blue-950 to-black relative text-gray-100">
            {/* Enhanced grid pattern overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f1a_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f1a_1px,transparent_1px)] bg-[size:24px_24px]" />

            {/* Hero Section with improved visual hierarchy */}
            <section className="py-24 relative overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="relative z-10">
                        <h1 className="text-5xl md:text-6xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                            Get in Touch
                        </h1>
                        <p className="text-gray-300 text-xl text-center max-w-2xl mx-auto leading-relaxed">
                            We're here to help and answer any question you might have. Let's start a conversation.
                        </p>
                    </div>

                    {/* Decorative elements */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/30 rounded-full blur-[120px] -z-10" />
                </div>
            </section>

            {/* Contact Section with enhanced layout */}
            <section className="py-20 relative">
                <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-start max-w-7xl">
                    {/* Contact Form with improved styling */}
                    <div className="bg-gray-800/50 backdrop-blur-xl p-8 rounded-2xl shadow-2xl border border-gray-700/50">
                        <h2 className="text-3xl font-bold mb-8 text-white">Send Us a Message</h2>
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-300">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
                                        required
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="subject" className="block text-sm font-medium text-gray-300">Subject</label>
                                <input
                                    type="text"
                                    id="subject"
                                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
                                    required
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="message" className="block text-sm font-medium text-gray-300">Message</label>
                                <textarea
                                    id="message"
                                    rows={6}
                                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 resize-none"
                                    required
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                disabled={formStatus === 'submitting'}
                                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 px-6 rounded-xl shadow-lg hover:from-blue-700 hover:to-blue-800 transition duration-300 ease-in-out transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {formStatus === 'submitting' ? 'Sending...' : formStatus === 'success' ? 'Message Sent!' : 'Send Message'}
                            </button>
                        </form>
                    </div>

                    {/* Contact Details with improved visual hierarchy */}
                    <div className="space-y-8">
                        <div className="bg-gray-800/50 backdrop-blur-xl p-8 rounded-2xl shadow-2xl border border-gray-700/50">
                            <div className="space-y-6">
                                <div className="flex items-center space-x-6">
                                    <div className="p-4 bg-blue-500/10 rounded-xl">
                                        <Phone className="h-6 w-6 text-blue-400" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white">Phone</h3>
                                        <p className="text-gray-300 mt-1">+1 (555) 123-4567</p>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-6">
                                    <div className="p-4 bg-blue-500/10 rounded-xl">
                                        <Mail className="h-6 w-6 text-blue-400" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white">Email</h3>
                                        <p className="text-gray-300 mt-1">contact@yourdomain.com</p>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-6">
                                    <div className="p-4 bg-blue-500/10 rounded-xl">
                                        <MapPin className="h-6 w-6 text-blue-400" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white">Address</h3>
                                        <p className="text-gray-300 mt-1">123 Main Street, City, Country</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Map with improved container */}
                        <div className="bg-gray-800/50 backdrop-blur-xl p-8 rounded-2xl shadow-2xl border border-gray-700/50">
                            <h3 className="text-2xl font-bold mb-6 text-white">Our Location</h3>
                            <div className="relative h-[300px] w-full rounded-xl overflow-hidden">
                                {!mapLoaded && (
                                    <div className="absolute inset-0 flex items-center justify-center bg-gray-700/50 backdrop-blur-sm">
                                        <div className="animate-pulse text-gray-400">Loading map...</div>
                                    </div>
                                )}
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2412648718453!2d-73.98658868459375!3d40.74844097932847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1635186524500!5m2!1sen!2sus"
                                    width="100%"
                                    height="300"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    onLoad={() => setMapLoaded(true)}
                                    className="rounded-xl"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section with improved interaction */}
            <section className="py-20 bg-gray-900/50">
                <div className="container mx-auto px-6">
                    <h2 className="text-4xl font-bold mb-12 text-center text-white">Frequently Asked Questions</h2>
                    <div className="max-w-3xl mx-auto space-y-4">
                        {[
                            { id: 'faq1', question: "What are your business hours?", answer: "Our business hours are Monday to Friday, 9 AM to 5 PM EST." },
                            { id: 'faq2', question: "How long does it take to get a response?", answer: "We aim to respond to all inquiries within 24 business hours." },
                            { id: 'faq3', question: "Do you offer on-site consultations?", answer: "Yes, we offer on-site consultations for projects within a 50-mile radius of our office." }
                        ].map((faq) => (
                            <div key={faq.id} className="bg-gray-800/50 backdrop-blur-xl rounded-xl border border-gray-700/50">
                                <button
                                    onClick={() => toggleFaq(faq.id)}
                                    className="flex justify-between items-center w-full p-6 text-left"
                                >
                                    <span className="font-medium text-lg text-white">{faq.question}</span>
                                    <ChevronDown
                                        className={`w-5 h-5 text-blue-400 transition-transform duration-300 ${openFaq === faq.id ? 'transform rotate-180' : ''}`}
                                    />
                                </button>
                                <div
                                    className={`overflow-hidden transition-all duration-300 ease-in-out ${openFaq === faq.id ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                                        }`}
                                >
                                    <div className="p-6 pt-0 text-gray-300">
                                        {faq.answer}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
};

export default ContactPage;