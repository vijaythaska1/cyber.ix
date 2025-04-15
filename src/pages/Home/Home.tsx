
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { services, portfolioItems, stats, features, workProcesses, testimonials } from './data';
import ContactSection from '@/components/sections/ContactSection';
import ServicesSection from '@/components/sections/ServicesSection';
import PortfolioSection from '@/components/sections/PortfolioSection';
import WorkProcessSection from '@/components/sections/WorkProcessSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import { useNavigate } from 'react-router-dom';
// import Navigation from '@/components/layout/Navigation';
// import Footer from '@/components/layout/Footer';

function Home() {
  const navigate = useNavigate()
  return (
    <div className="min-h-screen bg-background">
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-4 relative">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="md:w-1/2">
              <div className="inline-flex items-center rounded-full border px-4 py-1 text-sm mb-6">
                <span className="text-primary font-medium">New</span>
                <span className="mx-2">|</span>
                <span className="text-muted-foreground">Web, App & Security Solutions</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
                Securing Your Digital Future
              </h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              We build powerful web and mobile apps while ensuring top-notch cybersecurity. From development to protection, we empower businesses to thrive in the digital world.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button  onClick={() => navigate("/contact")} size="lg" className="group">
                  Get Started 
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
                {/* <Button onClick={() => navigate("/WatchDemo")} variant="outline" size="lg">
                  Watch Demo
                </Button> */}
              </div>
            </div>
            <div className="md:w-1/2 relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-primary/60 rounded-lg blur-2xl opacity-30"></div>
              <img
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800"
                alt="Cybersecurity"
                className="relative rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Why Choose Cyber.ix?</h2>
            <p className="text-muted-foreground">Experience unparalleled cybersecurity solutions tailored to your business needs.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-none shadow-lg bg-gradient-to-b from-muted/50 to-transparent">
                <CardContent className="p-6">
                  <CheckCircle2 className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <ServicesSection services={services} />
      <WorkProcessSection processes={workProcesses} />
      {/* <TestimonialsSection testimonials={testimonials} /> */}
      <PortfolioSection portfolioItems={portfolioItems} />
      <ContactSection />
    </div>
  );
}

export default Home;