import { Shield, Network, Laptop2, Cloud, Database, Users, Zap, LineChart } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import ContactSection from '@/components/sections/ContactSection';

export default function Services() {


    const services = [
        {
            icon: Shield,
            title: 'Cybersecurity Solutions',
            description: 'Comprehensive security solutions to protect your digital assets',
            features: [
                'Advanced Threat Detection',
                'Real-time Monitoring',
                'Incident Response',
                'Security Assessments'
            ]
        },
        {
            icon: Cloud,
            title: 'Cloud Security',
            description: 'Secure your cloud infrastructure and applications',
            features: [
                'Cloud Infrastructure Protection',
                'Data Encryption',
                'Access Management',
                'Compliance Monitoring'
            ]
        },
        {
            icon: Network,
            title: 'Network Security',
            description: 'Protect your network infrastructure from threats',
            features: [
                'Firewall Management',
                'VPN Solutions',
                'Network Monitoring',
                'Intrusion Detection'
            ]
        },
        {
            icon: Database,
            title: 'Data Protection',
            description: 'Ensure your sensitive data remains secure',
            features: [
                'Data Encryption',
                'Access Control',
                'Data Loss Prevention',
                'Backup Solutions'
            ]
        },
        {
            icon: Users,
            title: 'Security Training',
            description: 'Empower your team with security knowledge',
            features: [
                'Security Awareness Training',
                'Phishing Simulations',
                'Compliance Training',
                'Best Practices Workshop'
            ]
        },
        {
            icon: Laptop2,
            title: 'Endpoint Security',
            description: 'Protect all your endpoints from cyber threats',
            features: [
                'Device Management',
                'Malware Protection',
                'Remote Security',
                'Access Control'
            ]
        }
    ];

    return (
        <div className="min-h-screen bg-background">

            {/* Hero Section */}
            <section className="pt-32 pb-20 md:pt-40 md:pb-28">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
                            Our Services
                        </h1>
                        <p className="text-lg text-muted-foreground mb-8">
                            Comprehensive cybersecurity solutions tailored to protect your business in the digital age.
                        </p>
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-20 bg-muted/30">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <Card key={index} className="group hover:shadow-lg transition-shadow">
                                <CardContent className="p-6">
                                    <service.icon className="h-12 w-12 text-primary mb-4" />
                                    <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                                    <p className="text-muted-foreground mb-4">{service.description}</p>
                                    <ul className="space-y-2">
                                        {service.features.map((feature, featureIndex) => (
                                            <li key={featureIndex} className="flex items-center text-sm">
                                                <Shield className="h-4 w-4 text-primary mr-2" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                    <Button className="w-full mt-6">Learn More</Button>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center mb-16">
                        <h2 className="text-3xl font-bold mb-4">Why Choose Our Services?</h2>
                        <p className="text-muted-foreground">
                            We deliver exceptional security solutions with a focus on innovation and reliability.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        <Card>
                            <CardContent className="p-6 text-center">
                                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Shield className="h-8 w-8 text-primary" />
                                </div>
                                <h3 className="text-xl font-semibold mb-2">Expert Team</h3>
                                <p className="text-muted-foreground">
                                    Our certified security experts bring years of experience in protecting businesses.
                                </p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardContent className="p-6 text-center">
                                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Zap className="h-8 w-8 text-primary" />
                                </div>
                                <h3 className="text-xl font-semibold mb-2">Latest Technology</h3>
                                <p className="text-muted-foreground">
                                    We utilize cutting-edge security technologies and AI-driven solutions.
                                </p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardContent className="p-6 text-center">
                                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <LineChart className="h-8 w-8 text-primary" />
                                </div>
                                <h3 className="text-xl font-semibold mb-2">Proven Results</h3>
                                <p className="text-muted-foreground">
                                    Track record of successfully protecting businesses across industries.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            <ContactSection />
        </div>
    );
}