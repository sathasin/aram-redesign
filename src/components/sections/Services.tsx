import { Layers, RefreshCw, Link2, Compass, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const services = [
  {
    icon: Layers,
    title: 'Platform Engineering',
    subtitle: 'Build the Foundation for Innovation',
    description: 'Design and operate cloud-native platforms that accelerate development velocity and reduce infrastructure complexity.',
    features: ['Self-service developer platforms', 'CI/CD pipeline automation', 'Infrastructure as Code (IaC)', 'Container orchestration (Kubernetes)', 'API management & service mesh'],
    impact: 'A fintech startup reduced deployment time from days to minutes with our self-service platform',
  },
  {
    icon: RefreshCw,
    title: 'Enterprise Transformation',
    subtitle: 'Reimagine Your Digital Future',
    description: 'Navigate organizational change with comprehensive transformation services that modernize technology stacks and optimize processes.',
    features: ['Legacy application modernization', 'Cloud-first architecture design', 'Microservices transformation', 'DevOps & cultural change', 'Digital operating model design'],
    impact: 'A global manufacturer transformed 200+ legacy applications, achieving 60% faster time-to-market',
  },
  {
    icon: Link2,
    title: 'Systems Integration',
    subtitle: 'Connect Everything, Seamlessly',
    description: 'Break down silos and create unified digital ecosystems with enterprise-grade integration solutions.',
    features: ['Enterprise Service Bus (ESB)', 'API design & management', 'Real-time event streaming (Kafka)', 'ETL/ELT data integration', 'B2B/EDI integration'],
    impact: 'A retail chain integrated 15+ systems to achieve real-time visibility, reducing stockouts by 35%',
  },
  {
    icon: Compass,
    title: 'Strategic Consulting',
    subtitle: 'Navigate Complexity with Confidence',
    description: 'Our consultants bring decades of experience to help you make informed technology investments and chart clear paths to digital maturity.',
    features: ['Digital transformation strategy', 'Technology architecture blueprints', 'Cloud strategy & vendor selection', 'Data strategy & governance', 'Innovation workshops'],
    impact: 'Actionable roadmaps, not just reports - we deliver results you can implement',
  },
];

export function Services() {
  return (
    <section id="verticals" className="section-padding bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 mesh-bg" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-slide-up" style={{ animationDelay: '0.1s' }}>
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Verticals
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Offerings Tailored to Your{' '}
            <span className="gradient-text">Industry Vertical</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            End-to-end digital excellence spanning platform engineering, transformation, integration, and strategic consulting.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-2 gap-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl p-8 border border-border hover:border-primary/30 transition-all duration-500 card-elevated"
            >
              <div className="flex flex-col h-full">
                {/* Header */}
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold text-foreground mb-1">{service.title}</h3>
                    <p className="text-primary font-medium text-sm">{service.subtitle}</p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>

                {/* Features */}
                <div className="grid grid-cols-2 gap-2 mb-6">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-foreground/80">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>

                {/* Impact */}
                <div className="mt-auto pt-6 border-t border-border">
                  <p className="text-sm text-muted-foreground italic">
                    <span className="text-primary font-semibold">Real Impact:</span> {service.impact}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button variant="gradient" size="lg" className="group">
            View All Services
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
}
