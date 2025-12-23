import { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HERO_IMAGES = [
  // Team collaborating in a dark operations room
  'https://images.pexels.com/photos/3183171/pexels-photo-3183171.jpeg?auto=compress&cs=tinysrgb&w=1600',
  // Large digital world map and analytics screens
  'https://images.pexels.com/photos/6476584/pexels-photo-6476584.jpeg?auto=compress&cs=tinysrgb&w=1600',
  // Futuristic data center / control room
  'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=1600',
];

export function Hero() {
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImage((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image slider */}
      <div className="absolute inset-0 -z-10">
        {/* Image layer */}
        <div
          className="w-full h-full bg-cover bg-center transition-[background-image] duration-1000 ease-out scale-105"
          style={{ backgroundImage: `url(${HERO_IMAGES[activeImage]})` }}
        />
        {/* Dark navy / blue overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-background/90 to-background/95" />
      </div>

      <div className="container mx-auto px-4 relative z-10 py-24 md:py-32 lg:py-40">
        <div className="max-w-5xl mx-auto text-center">
          {/* (Badge removed per request) */}

          {/* Main Heading */}
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <span className="text-foreground">Transform Your</span>
            <br />
            <span className="gradient-text">Next-Generation IT</span>
            <br />
            <span className="text-foreground">Solutions Business</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto animate-slide-up-delayed font-body leading-relaxed">
            Flexible engagement models built around your success—aligning outcomes, risk, and delivery to drive measurable business impact.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <Button
              variant="gradient"
              size="xl"
              className="group"
              onClick={() => document.getElementById('verticals')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Explore Our Services
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              variant="outline"
              size="xl"
              onClick={() => document.getElementById('outcomes')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Schedule Consultation
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            {[
              { value: '500+', label: 'Projects Delivered' },
              { value: '25+', label: 'Countries Served' },
              { value: '1000+', label: 'Certifications' },
              { value: '99.9%', label: 'Client Satisfaction' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-display font-bold gradient-text mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>


    </section>
  );
}
