import { Navbar } from '@/components/layout/Navbar';
import { Hero } from '@/components/sections/Hero';
import { Services } from '@/components/sections/Services';
import { Capabilities } from '@/components/sections/Capabilities';
import { Industries } from '@/components/sections/Industries';
import TeamSection from '@/components/sections/team/TeamSection';
import { Platforms } from '@/components/sections/Platforms';
import { About } from '@/components/sections/About';
import { EngagementModels } from '@/components/sections/EngagementModels';
import { ZohoExpertise } from '@/components/sections/ZohoExpertise';
import { WhyPartner } from '@/components/sections/WhyPartner';
import { CTA } from '@/components/sections/CTA';
import { Footer } from '@/components/layout/Footer';
import BackgroundFX from '@/components/BackgroundFX';

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative selection:bg-primary/20">
      <BackgroundFX />
      <Navbar />
      <main>
        {/* Matches navbar order: Outcomes, Verticals, Solutions, Technology, Industries, Partners, About */}
        <Hero />
        <EngagementModels />   {/* Outcomes */}
        <Services />           {/* Verticals */}
        <Capabilities />       {/* Solutions */}
        <Platforms />          {/* Technology */}
        <Industries />         {/* Industries */}



        <div id="partners">
          <WhyPartner />       {/* Why partner with us */}
          <ZohoExpertise />    {/* Zoho ecosystem partners */}
        </div>
        <About />              {/* About Us */}

        {/* Team Section */}
        <TeamSection />

        {/* CTA */}
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
