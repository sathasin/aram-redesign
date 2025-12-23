import { Globe, Users, Info } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="section-padding bg-background relative overflow-hidden">
      <div className="absolute inset-0 mesh-bg opacity-30" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            About Us
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 text-foreground">
            We Build Valuable{' '}
            <span className="gradient-text">Technology</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            AramAnalytics is a trusted technology partner delivering cloud, AI, and enterprise software solutions that drive measurable business outcomes.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-8">
          <div className="bg-card p-6 rounded-xl border border-border">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <Globe className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Global Delivery</h3>
            <p className="text-sm text-muted-foreground">Local teams and global centers ensure 24/7 support and fast time-to-market.</p>
          </div>

          <div className="bg-card p-6 rounded-xl border border-border">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <Users className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Expert Teams</h3>
            <p className="text-sm text-muted-foreground">Cross-functional experts in cloud, data, AI, and domain consulting.</p>
          </div>

          <div className="bg-card p-6 rounded-xl border border-border">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <Info className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Trusted Partner</h3>
            <p className="text-sm text-muted-foreground">Committed to security, compliance, and long-term customer success.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
