import { Cloud, BrainCircuit, Bot, Code, Shield, Wifi, Palette, Building2 } from 'lucide-react';

const platforms = [
  {
    icon: Cloud,
    title: 'Cloud Migration & Modernization',
    description: 'Automated assessment, planning, migration, and optimization for AWS, Azure, and GCP.',
    highlight: '60% faster migrations',
  },
  {
    icon: BrainCircuit,
    title: 'AI/ML Enterprise Platforms',
    description: 'Pre-built frameworks for deploying, scaling, and governing AI/ML models.',
    highlight: 'Production-ready AI',
  },
  {
    icon: Bot,
    title: 'Agentic AI Platforms',
    description: 'Build autonomous AI agents with built-in memory, tool integration, and collaboration.',
    highlight: '1000+ API integrations',
  },
  {
    icon: Code,
    title: 'Low-Code/No-Code Platforms',
    description: 'Empower business users to build applications faster with visual development.',
    highlight: '10x faster development',
  },
  {
    icon: Shield,
    title: 'Security Operations Centers',
    description: '24/7 threat detection, intelligence, and incident response capabilities.',
    highlight: 'Real-time protection',
  },
  {
    icon: Wifi,
    title: 'IoT Analytics Platforms',
    description: 'End-to-end solutions for device provisioning, data ingestion, and real-time analytics.',
    highlight: 'Scale to millions',
  },
  {
    icon: Palette,
    title: 'Design Systems & UI Libraries',
    description: 'Enterprise-ready design frameworks with 200+ production-ready components.',
    highlight: 'WCAG 2.1 compliant',
  },
  {
    icon: Building2,
    title: 'Industry Transformation Suites',
    description: 'Purpose-built solutions for unique industry challenges and regulatory requirements.',
    highlight: 'Sector-specific',
  },
];

export function Platforms() {
  return (
    <section id="technology" className="section-padding bg-background relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 mesh-bg" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-slide-up" style={{ animationDelay: '0.1s' }}>
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Technology
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Platforms &{' '}
            <span className="gradient-text">Accelerators</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Pre-built platforms and accelerators that reduce time-to-value, minimize risk, and fast-track your digital journey.
          </p>
        </div>

        {/* Platforms Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          {platforms.map((platform, index) => (
            <div
              key={index}
              className="group bg-card rounded-xl p-6 border border-border hover:border-primary/30 transition-all duration-500 hover-lift"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <platform.icon className="w-6 h-6 text-primary" />
              </div>

              {/* Title */}
              <h3 className="font-display font-semibold text-foreground mb-2">{platform.title}</h3>

              {/* Description */}
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{platform.description}</p>

              {/* Highlight */}
              <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
                {platform.highlight}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
