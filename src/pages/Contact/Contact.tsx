import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Shield,
  Clock,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Footer from "@/components/layout/Footer";

export default function Contact() {
  const [activeQuestion, setActiveQuestion] = useState<number | null>(null);


  const offices = [
    {
      city: "New York",
      address: "123 Tech Street, NY 10001",
      phone: "+1 (555) 123-4567",
      email: "ny@cyber-ix.com",
    },
    {
      city: "London",
      address: "456 Digital Lane, London EC1A 1BB",
      phone: "+44 20 7123 4567",
      email: "london@cyber-ix.com",
    },
    {
      city: "Singapore",
      address: "789 Cyber Road, Singapore 049315",
      phone: "+65 6789 0123",
      email: "singapore@cyber-ix.com",
    },
  ];

  const faqs = [
    {
      question: "What cybersecurity services do you offer?",
      answer:
        "We offer a comprehensive range of cybersecurity services including threat detection, network security, cloud security, data protection, and security consulting. Our solutions are tailored to meet the specific needs of your organization.",
    },
    {
      question: "How quickly can you respond to security incidents?",
      answer:
        "Our 24/7 incident response team typically responds to critical security incidents within 15 minutes. We have automated systems in place for immediate threat detection and preliminary response actions.",
    },
    {
      question: "Do you provide employee security training?",
      answer:
        "Yes, we offer comprehensive security awareness training programs. This includes phishing simulations, security best practices, compliance training, and customized workshops for your team.",
    },
    {
      question: "What industries do you serve?",
      answer:
        "We serve a wide range of industries including finance, healthcare, technology, retail, and government sectors. Our solutions are customized to meet industry-specific compliance requirements and security challenges.",
    },
    {
      question: "How do you ensure data privacy and compliance?",
      answer:
        "We implement strict data protection measures and follow industry best practices. Our solutions are designed to comply with major regulations including GDPR, HIPAA, and PCI DSS.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">


      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
              Get in Touch
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Have questions about our cybersecurity solutions? Our team is here
              to help you secure your digital future.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
              <p className="text-muted-foreground mb-8">
                Fill out the form below and our team will get back to you within
                24 hours.
              </p>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Doe" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@company.com"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company">Company</Label>
                  <Input id="company" placeholder="Your Company" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your security needs..."
                    className="min-h-[150px]"
                  />
                </div>

                <Button className="w-full" size="lg">
                  Send Message
                  <Send className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Offices</h2>
                <div className="grid sm:grid-cols-2 gap-6">
                  {offices.map((office, index) => (
                    <Card key={index}>
                      <CardContent className="p-6">
                        <h3 className="text-xl font-semibold mb-4">
                          {office.city}
                        </h3>
                        <div className="space-y-3">
                          <div className="flex items-start">
                            <MapPin className="h-5 w-5 text-primary mt-1 mr-3" />
                            <span>{office.address}</span>
                          </div>
                          <div className="flex items-center">
                            <Phone className="h-5 w-5 text-primary mr-3" />
                            <span>{office.phone}</span>
                          </div>
                          <div className="flex items-center">
                            <Mail className="h-5 w-5 text-primary mr-3" />
                            <span>{office.email}</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Why Choose Us</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                        <Shield className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">
                          Expert Security Team
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          Our certified professionals provide top-tier security
                          solutions
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                        <Clock className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">24/7 Support</h4>
                        <p className="text-sm text-muted-foreground">
                          Round-the-clock assistance for your security needs
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.119763973046!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1679913761415!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <Card key={index} className="overflow-hidden">
                  <CardContent className="p-0">
                    <button
                      className="w-full p-6 text-left flex items-center justify-between"
                      onClick={() =>
                        setActiveQuestion(
                          activeQuestion === index ? null : index
                        )
                      }
                    >
                      <span className="font-semibold">{faq.question}</span>
                      {activeQuestion === index ? (
                        <ChevronUp className="h-5 w-5 text-primary" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-primary" />
                      )}
                    </button>
                    {activeQuestion === index && (
                      <div className="px-6 pb-6">
                        <p className="text-muted-foreground">{faq.answer}</p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
