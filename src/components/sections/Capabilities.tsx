import { useState } from 'react';
import { 
  BarChart3, Database, Cpu, BrainCircuit, Bot, Palette, 
  Cog, Link, Shield, Wifi, ChevronRight 
} from 'lucide-react';

const capabilities = [
  {
    icon: BarChart3,
    title: 'Analytics & Business Intelligence',
    description: 'Turn data into competitive advantage with advanced analytics solutions.',
    useCases: ['Credit risk modeling', 'Fraud detection', 'Customer lifetime value', 'Demand forecasting'],
  },
  {
    icon: Database,
    title: 'Data Engineering & DataOps',
    description: 'Build industrial-strength data infrastructure for analytics and AI.',
    useCases: ['Modern data warehousing', 'Data lake architecture', 'Real-time streaming', 'Master data management'],
  },
  {
    icon: Cpu,
    title: 'MLOps',
    description: 'Bridge the gap between data science and operations with enterprise-grade practices.',
    useCases: ['Model training automation', 'A/B testing frameworks', 'Drift detection', 'Model governance'],
  },
  {
    icon: BrainCircuit,
    title: 'Data Science',
    description: 'Extract actionable insights and build predictive models that drive outcomes.',
    useCases: ['Predictive modeling', 'Churn prediction', 'Price optimization', 'Anomaly detection'],
  },
  {
    icon: Bot,
    title: 'AI Application Development',
    description: 'Build custom AI-powered applications that enhance experiences and automate workflows.',
    useCases: ['Conversational AI', 'Document intelligence', 'Computer vision', 'NLP solutions'],
  },
  {
    icon: BrainCircuit,
    title: 'Agentic AI Systems',
    description: 'Deploy AI agents that reason, plan, and execute sophisticated multi-step tasks.',
    useCases: ['Multi-agent orchestration', 'RAG systems', 'Autonomous workflows', 'Tool integration'],
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Transform digital touchpoints into intuitive, delightful experiences.',
    useCases: ['User research', 'Experience design', 'Design systems', 'Accessibility audits'],
  },
  {
    icon: Cog,
    title: 'Intelligent Automation',
    description: 'Automate repetitive processes to increase efficiency and reduce errors.',
    useCases: ['RPA solutions', 'Document processing', 'Workflow automation', 'Hyperautomation'],
  },
  {
    icon: Link,
    title: 'Blockchain & Smart Contracts',
    description: 'Create transparent, secure, tamper-proof systems that eliminate intermediaries.',
    useCases: ['Supply chain traceability', 'Tokenization', 'Decentralized identity', 'Trade finance'],
  },
  {
    icon: Shield,
    title: 'Cybersecurity Services',
    description: 'Safeguard digital assets and ensure compliance against evolving threats.',
    useCases: ['Penetration testing', 'SOC services', 'Zero Trust architecture', 'Compliance (GDPR, HIPAA)'],
  },
  {
    icon: Wifi,
    title: 'IoT & Real-Time Systems',
    description: 'Bridge physical and digital worlds with IoT solutions for real-time visibility.',
    useCases: ['Edge computing', 'Digital twins', 'Predictive maintenance', 'Smart factory'],
  },
];

export function Capabilities() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section id="solutions" className="section-padding bg-muted/50 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-slide-up" style={{ animationDelay: '0.1s' }}>
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Solutions
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Technology Capabilities That Deliver{' '}
            <span className="gradient-text">Outcomes</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Enterprise-grade solutions across analytics, AI, automation, design, and security to accelerate results.
          </p>
        </div>

        <div className="text-center mt-12 animate-slide-up" style={{ animationDelay: '0.18s' }}>
          <Link to="/capabilities" className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-6 py-3 rounded-full font-medium">
            View All Capabilities
          </Link>
        </div>

        {/* Capabilities Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 animate-fade-in-up" style={{ animationDelay: '0.25s' }}>
          {capabilities.map((cap, index) => (
            <div
              key={index}
              className={`group relative bg-card rounded-xl p-6 border border-border cursor-pointer transition-all duration-300 ${
                activeIndex === index ? 'border-primary shadow-lg scale-[1.02]' : 'hover:border-primary/30 hover:shadow-md'
              }`}
              onClick={() => setActiveIndex(activeIndex === index ? null : index)}
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <cap.icon className="w-6 h-6 text-primary" />
              </div>

              {/* Title */}
              <h3 className="font-display font-semibold text-foreground mb-2 flex items-center justify-between">
                {cap.title}
                <ChevronRight className={`w-4 h-4 text-primary transition-transform ${activeIndex === index ? 'rotate-90' : ''}`} />
              </h3>

              {/* Description */}
              <p className="text-sm text-muted-foreground leading-relaxed">{cap.description}</p>

              {/* Expanded Content */}
              {activeIndex === index && (
                <div className="mt-4 pt-4 border-t border-border animate-fade-in">
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">Key Use Cases:</p>
                  <div className="flex flex-wrap gap-2">
                    {cap.useCases.map((useCase, i) => (
                      <span key={i} className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md">
                        {useCase}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
