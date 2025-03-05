import { useState, } from 'react';
import { Play, } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
export default function WatchDemo() {
  const [activeVideo, setActiveVideo] = useState(0);



  const demoVideos = [
    {
      title: 'Platform Overview',
      duration: '5:30',
      thumbnail: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800',
      description: 'Get a comprehensive overview of our cybersecurity platform and its key features.'
    },
    {
      title: 'Threat Detection Demo',
      duration: '4:15',
      thumbnail: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800',
      description: 'See how our advanced threat detection system identifies and responds to security threats in real-time.'
    },
    {
      title: 'Security Dashboard',
      duration: '3:45',
      thumbnail: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800',
      description: 'Explore our intuitive security dashboard and monitoring capabilities.'
    }
  ];

  return (
    <div className="min-h-screen bg-background">

      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
              Watch Our Product Demo
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              See how Cyber.ix can transform your organization's security infrastructure with our comprehensive demo videos.
            </p>
          </div>
        </div>
      </section>

      {/* Main Demo Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <div className="relative aspect-video bg-black rounded-lg overflow-hidden">
                <img
                  src={demoVideos[activeVideo].thumbnail}
                  alt={demoVideos[activeVideo].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Button size="lg" className="rounded-full w-16 h-16">
                    <Play className="h-8 w-8" />
                  </Button>
                </div>
              </div>
              <div className="mt-6">
                <h2 className="text-2xl font-bold mb-2">{demoVideos[activeVideo].title}</h2>
                <p className="text-muted-foreground">{demoVideos[activeVideo].description}</p>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold mb-4">More Videos</h3>
              {demoVideos.map((video, index) => (
                <Card
                  key={index}
                  className={`cursor-pointer transition-colors ${activeVideo === index ? 'border-primary' : ''
                    }`}
                  onClick={() => setActiveVideo(index)}
                >
                  <CardContent className="p-4">
                    <div className="flex gap-4">
                      <div className="relative w-24 h-16 rounded overflow-hidden flex-shrink-0">
                        <img
                          src={video.thumbnail}
                          alt={video.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute bottom-1 right-1 bg-black/80 text-white text-xs px-1 rounded">
                          {video.duration}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">{video.title}</h4>
                        <p className="text-sm text-muted-foreground line-clamp-2">
                          {video.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Preview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Featured in Our Demo</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Real-time Monitoring</h3>
                <p className="text-muted-foreground mb-4">
                  Watch how our platform provides real-time insights into your security status.
                </p>
                <Button variant="outline" className="w-full">Learn More</Button>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Threat Detection</h3>
                <p className="text-muted-foreground mb-4">
                  See our AI-powered threat detection system in action.
                </p>
                <Button variant="outline" className="w-full">Learn More</Button>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Incident Response</h3>
                <p className="text-muted-foreground mb-4">
                  Experience our automated incident response capabilities.
                </p>
                <Button variant="outline" className="w-full">Learn More</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}