import { ArrowRight } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

interface WorkProcess {
  number: string;
  title: string;
  description: string;
}

interface WorkProcessSectionProps {
  processes: WorkProcess[];
}

export default function WorkProcessSection({ processes }: WorkProcessSectionProps) {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">How We Work</h2>
          <p className="text-muted-foreground">Our proven methodology ensures successful project delivery and maximum security</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processes.map((process, index) => (
            <div key={index} className="relative">
              <Card className="h-full">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <span className="text-xl font-bold text-primary">{process.number}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{process.title}</h3>
                  <p className="text-muted-foreground">{process.description}</p>
                </CardContent>
              </Card>
              {index < processes.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <ArrowRight className="w-8 h-8 text-primary/40" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}