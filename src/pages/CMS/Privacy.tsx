import { Shield, Lock, Eye, FileText } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

export default function Privacy() {


    const sections = [
        {
            icon: Shield,
            title: 'Information We Collect',
            content: `We collect information that you provide directly to us, including:
        • Name and contact information
        • Company details
        • Payment information
        • Communication preferences
        • Security requirements and specifications
        • Usage data and analytics`
        },
        {
            icon: Lock,
            title: 'How We Use Your Information',
            content: `Your information helps us:
        • Provide and improve our services
        • Process your transactions
        • Send important notifications
        • Maintain security standards
        • Comply with legal obligations
        • Analyze and enhance user experience`
        },
        {
            icon: Eye,
            title: 'Information Sharing',
            content: `We may share your information with:
        • Service providers and partners
        • Legal authorities when required
        • Business partners with your consent
        • Third-party security auditors
        We never sell your personal data to third parties.`
        },
        {
            icon: FileText,
            title: 'Your Rights',
            content: `You have the right to:
        • Access your personal data
        • Correct inaccurate information
        • Request data deletion
        • Opt-out of communications
        • Export your data
        • Lodge privacy complaints`
        }
    ];

    return (
        <div className="min-h-screen bg-background">
            {/* Hero Section */}
            <section className="pt-32 pb-20 md:pt-40 md:pb-28">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
                            Privacy Policy
                        </h1>
                        <p className="text-lg text-muted-foreground mb-8">
                            Your privacy is important to us. This policy outlines how we collect, use, and protect your personal information.
                        </p>
                    </div>
                </div>
            </section>

            {/* Last Updated Section */}
            <section className="py-8 bg-muted/30">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center">
                        <p className="text-sm text-muted-foreground">
                            Last Updated: March 15, 2025
                        </p>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="prose prose-lg max-w-none mb-12">
                            <p className="text-muted-foreground">
                                At Cyber.ix, we take your privacy seriously. This Privacy Policy describes how we collect, use, process, and disclose your information, including personal information, in conjunction with your access to and use of our services.
                            </p>
                        </div>

                        <div className="space-y-8">
                            {sections.map((section, index) => (
                                <Card key={index}>
                                    <CardContent className="p-6">
                                        <div className="flex items-start gap-4">
                                            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                                                <section.icon className="h-6 w-6 text-primary" />
                                            </div>
                                            <div>
                                                <h2 className="text-2xl font-semibold mb-4">{section.title}</h2>
                                                <div className="text-muted-foreground whitespace-pre-line">
                                                    {section.content}
                                                </div>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>

                        {/* Additional Information */}
                        <div className="mt-12 space-y-8">
                            <Card>
                                <CardContent className="p-6">
                                    <h2 className="text-2xl font-semibold mb-4">Security Measures</h2>
                                    <p className="text-muted-foreground mb-4">
                                        We implement appropriate technical and organizational security measures to protect your personal information against accidental or unlawful destruction, loss, alteration, unauthorized disclosure, or access.
                                    </p>
                                    <ul className="list-disc list-inside text-muted-foreground space-y-2">
                                        <li>End-to-end encryption for sensitive data</li>
                                        <li>Regular security audits and assessments</li>
                                        <li>Strict access controls and authentication</li>
                                        <li>24/7 security monitoring</li>
                                        <li>Regular staff security training</li>
                                    </ul>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardContent className="p-6">
                                    <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
                                    <p className="text-muted-foreground mb-4">
                                        If you have any questions about this Privacy Policy or our privacy practices, please contact our Data Protection Officer:
                                    </p>
                                    <div className="space-y-2">
                                        <p className="text-muted-foreground">Email: privacy@cyber-ix.com</p>
                                        <p className="text-muted-foreground">Phone: +1 (555) 123-4567</p>
                                        <p className="text-muted-foreground">Address: 123 Tech Street, NY 10001, USA</p>
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