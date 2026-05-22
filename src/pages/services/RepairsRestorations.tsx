import { Helmet } from 'react-helmet-async';
import Navigation from '@/components/Navigation';
import { ContactSection, Footer } from '@/components/ContactSection';
import { Wrench, CheckCircle } from 'lucide-react';

const RepairsRestorations = () => {
  return (
    <>
      <Helmet>
        <title>Guitar Repairs & Restorations | Padgsteen Guitars</title>
        <meta 
          name="description" 
          content="Expert guitar repair and restoration services including fret work, neck resets, crack repairs, electronics repair, setups, adjustments, and custom modifications." 
        />
        <meta name="keywords" content="guitar repair, guitar restoration, fret work, neck reset, crack repair, electronics repair, guitar setup, guitar modifications, luthier services" />
        <link rel="canonical" href="https://padgsteenguitars.com/services/repairs-restorations" />
      </Helmet>
      
      <main className="min-h-screen">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-b from-navy to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Wrench className="h-16 w-16 text-caramel mx-auto mb-6" />
              <h1 className="font-display text-4xl md:text-6xl text-foreground mb-6">
                Repairs & <span className="text-gradient italic">Restorations</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Expert repair services to bring your beloved instrument back to its full glory.
              </p>
            </div>
          </div>
        </section>

        {/* Service Details */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-card rounded-xl p-8 md:p-12 border border-border mb-8">
                <h2 className="font-display text-3xl text-foreground mb-6">Expert Repairs & Restoration</h2>
                <p className="text-muted-foreground text-lg mb-8">
                  Whether your guitar needs a minor adjustment or major restoration work, Roger has the expertise to handle it with care. From vintage instruments to modern axes, every repair is performed with precision and respect for the instrument.
                </p>

                <h3 className="font-display text-2xl text-foreground mb-4">Repair Services</h3>
                <ul className="space-y-4 mb-8">
                  {[
                    'Fret work, leveling, and replacement',
                    'Neck resets and structural repairs',
                    'Crack repairs and brace work',
                    'Electronics repair and rewiring',
                  ].map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-caramel flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gradient-card rounded-xl p-8 md:p-12 border border-border">
                <h2 className="font-display text-3xl text-foreground mb-6">Setups & Adjustments</h2>
                <p className="text-muted-foreground text-lg mb-8">
                  Professional setups to optimize playability and tone for your playing style. Every instrument has unique needs, and Roger tailors each setup to bring out the best in your guitar.
                </p>

                <h3 className="font-display text-2xl text-foreground mb-4">Setup Services</h3>
                <ul className="space-y-4 mb-8">
                  {[
                    'Action adjustment for optimal playability',
                    'Precise intonation setup',
                    'Nut and saddle work',
                    'Professional string installation',
                  ].map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-caramel flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gradient-card rounded-xl p-8 md:p-12 border border-border mt-8">
                <h2 className="font-display text-3xl text-foreground mb-6">Upgrades & Modifications</h2>
                <p className="text-muted-foreground text-lg mb-8">
                  Customize your existing guitar with premium upgrades and modifications. Enhance your instrument's tone, playability, and appearance with expert modifications.
                </p>

                <h3 className="font-display text-2xl text-foreground mb-4">Upgrade Options</h3>
                <ul className="space-y-4 mb-8">
                  {[
                    'Pickup swaps and installation',
                    'Hardware upgrades (bridges, tuners, etc.)',
                    'Custom wiring modifications',
                    'Finish touch-ups and refinishing',
                  ].map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-caramel flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="bg-caramel/10 rounded-lg p-6 border border-caramel/30">
                  <p className="font-display text-xl text-foreground mb-2">Need a Repair or Upgrade?</p>
                  <p className="text-muted-foreground mb-4">
                    Contact Roger to discuss your instrument's needs and get a quote.
                  </p>
                  <p className="font-display text-2xl text-foreground">
                    Call: <span className="font-bold text-caramel">(980) 525-1991</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <ContactSection />
        <Footer />
      </main>
    </>
  );
};

export default RepairsRestorations;
