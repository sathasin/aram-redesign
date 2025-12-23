import { Trophy, Award, Lightbulb, Users, Globe, ShieldCheck } from 'lucide-react';

const reasons = [
  {
    icon: Trophy,
    title: 'Proven Track Record',
    description: '500+ successful projects across 25+ countries, serving Fortune 500 companies and innovative startups alike.',
  },
  {
    icon: Award,
    title: 'Industry-Certified Experts',
    description: '1,000+ certifications including AWS, Azure, GCP, Salesforce, Kubernetes, and domain-specific credentials.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation-First Approach',
    description: 'Dedicated R&D labs exploring emerging technologies—ensuring you benefit from cutting-edge solutions.',
  },
  {
    icon: Users,
    title: 'Agile & Transparent',
    description: 'Real-time project visibility, iterative delivery, and continuous collaboration ensure you\'re always in control.',
  },
  {
    icon: Globe,
    title: 'Global Delivery, Local Presence',
    description: '24/7 support with delivery centers across time zones and local teams who understand your market.',
  },
  {
    icon: ShieldCheck,
    title: 'Security & Compliance',
    description: 'ISO 27001, SOC 2 Type II, GDPR, HIPAA-compliant operations with security embedded in every solution.',
  },
];

export function WhyPartner() {
  return (
    <section className="section-padding bg-background relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 mesh-bg" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-slide-up" style={{ animationDelay: '0.1s' }}>
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Why Choose Us
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Why Partner{' '}
            <span className="gradient-text">With Us?</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Experience the difference of working with a team that is genuinely invested in your success.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="group text-center"
            >
              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                <reason.icon className="w-8 h-8 text-primary" />
              </div>

              {/* Content */}
              <h3 className="font-display text-xl font-bold text-foreground mb-3">{reason.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
