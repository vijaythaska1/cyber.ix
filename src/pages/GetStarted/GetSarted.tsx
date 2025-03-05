
import { CheckCircle2 } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";


export default function GetStarted() {


    const plans = [
        {
            name: 'Starter',
            price: '$299',
            period: 'per month',
            description: 'Perfect for small businesses starting their security journey',
            features: [
                'Basic Security Assessment',
                '24/7 Monitoring',
                'Email Support',
                'Vulnerability Scanning',
                'Basic Incident Response'
            ]
        },
        {
            name: 'Professional',
            price: '$799',
            period: 'per month',
            description: 'Ideal for growing businesses with advanced security needs',
            features: [
                'Advanced Security Assessment',
                '24/7 Priority Monitoring',
                'Priority Support',
                'Advanced Threat Detection',
                'Incident Response Team',
                'Employee Security Training',
                'Compliance Management'
            ],
            popular: true
        },
        {
            name: 'Enterprise',
            price: 'Custom',
            period: 'custom plan',
            description: 'Tailored solutions for large organizations',
            features: [
                'Custom Security Solutions',
                'Dedicated Security Team',
                '24/7 Premium Support',
                'Advanced AI Protection',
                'Custom Compliance Solutions',
                'Security Architecture Review',
                'Regular Penetration Testing',
                'Custom Security Training'
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
                            Get Started with Cyber.ix
                        </h1>
                        <p className="text-lg text-muted-foreground mb-8">
                            Choose the perfect plan to secure your digital assets and protect your business from cyber threats.
                        </p>
                    </div>
                </div>
            </section>

            {/* Pricing Section */}
            <section className="py-20 bg-muted/30">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-3 gap-8">
                        {plans.map((plan, index) => (
                            <Card key={index} className={`relative ${plan.popular ? 'border-primary shadow-lg scale-105' : ''}`}>
                                {plan.popular && (
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                                        <span className="bg-primary text-primary-foreground text-sm font-medium px-3 py-1 rounded-full">
                                            Most Popular
                                        </span>
                                    </div>
                                )}
                                <CardContent className="p-6">
                                    <div className="text-center mb-6">
                                        <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                                        <div className="text-3xl font-bold text-primary mb-1">{plan.price}</div>
                                        <div className="text-sm text-muted-foreground">{plan.period}</div>
                                    </div>
                                    <p className="text-center text-muted-foreground mb-6">
                                        {plan.description}
                                    </p>
                                    <div className="space-y-4 mb-6">
                                        {plan.features.map((feature, featureIndex) => (
                                            <div key={featureIndex} className="flex items-center">
                                                <CheckCircle2 className="h-5 w-5 text-primary mr-2" />
                                                <span>{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <Button className="w-full" variant={plan.popular ? "default" : "outline"}>
                                        Choose Plan
                                    </Button>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Steps Section */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-3xl font-bold text-center mb-12">How to Get Started</h2>
                        <div className="space-y-8">
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                                    <span className="text-primary font-bold">1</span>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold mb-2">Choose Your Plan</h3>
                                    <p className="text-muted-foreground">
                                        Select the security package that best fits your organization's needs and budget.
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                                    <span className="text-primary font-bold">2</span>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold mb-2">Security Assessment</h3>
                                    <p className="text-muted-foreground">
                                        Our team will conduct a thorough assessment of your current security infrastructure.
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                                    <span className="text-primary font-bold">3</span>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold mb-2">Implementation</h3>
                                    <p className="text-muted-foreground">
                                        We'll implement the security solutions and configure them according to your needs.
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                                    <span className="text-primary font-bold">4</span>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold mb-2">Ongoing Support</h3>
                                    <p className="text-muted-foreground">
                                        Enjoy continuous monitoring, support, and updates to keep your security at its best.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}