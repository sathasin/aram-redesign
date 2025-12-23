import { ArrowRight, CheckCircle2, RefreshCw, Settings, Puzzle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const zohoServices = [
  {
    icon: RefreshCw,
    title: 'Zoho Business Transformation',
    tagline: 'One Platform, Infinite Possibilities',
    description: 'Transform your entire business operations with Zoho One—connecting CRM, finance, HR, projects, analytics, and operations.',
    features: ['Zoho One implementation', 'Business process optimization', 'Custom module development', 'Training & change management'],
    result: 'Mid-market distributor improved operational efficiency by 40%',
  },
  {
    icon: Settings,
    title: 'Migration to Zoho',
    tagline: 'Seamless Transition, Zero Disruption',
    description: 'Execute flawless migrations from Salesforce, HubSpot, Microsoft Dynamics, SAP, and legacy ERPs to the Zoho ecosystem.',
    features: ['Data audit & cleansing', 'Custom field mapping', 'Phased migration', 'Post-migration hypercare'],
    result: 'Salesforce to Zoho CRM: 500K+ records in 6 weeks',
  },
  {
    icon: Puzzle,
    title: 'Zoho Customization & Integration',
    tagline: 'Tailored to Your Unique Processes',
    description: 'Extend Zoho capabilities with custom development, advanced automations, and deep integrations.',
    features: ['Zoho Creator apps', 'Deluge scripting', 'Third-party API integrations', 'Custom analytics dashboards'],
    result: 'E-commerce platform integrated with Shopify, Stripe & FedEx',
  },
];

export function ZohoExpertise() {
  return (
    <section className="section-padding bg-gradient-to-br from-primary/5 via-background to-accent/5 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-slide-up" style={{ animationDelay: '0.1s' }}>
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/20 text-accent text-sm font-medium mb-4">
            Zoho Ecosystem Partner
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Unified Business{' '}
            <span className="gradient-text-gold">Solutions</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Certified Zoho partner delivering comprehensive implementation, migration, and customization services.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 gap-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          {zohoServices.map((service, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-8 border border-border hover:border-accent/30 transition-all duration-500 card-elevated"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                <service.icon className="w-7 h-7 text-accent" />
              </div>

              {/* Content */}
              <h3 className="font-display text-xl font-bold text-foreground mb-1">{service.title}</h3>
              <p className="text-accent font-medium text-sm mb-4">{service.tagline}</p>
              <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-foreground/80">
                    <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Result */}
              <div className="pt-4 border-t border-border">
                <p className="text-sm text-muted-foreground">
                  <span className="text-accent font-semibold">Success:</span> {service.result}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link to="/zoho" className="inline-flex items-center gap-3 bg-accent text-accent-foreground px-6 py-3 rounded-full font-medium">
            Explore Zoho Solutions
            <ArrowRight className="w-5 h-5 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
