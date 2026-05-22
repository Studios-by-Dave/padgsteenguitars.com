import { Helmet } from 'react-helmet-async';
import Navigation from '@/components/Navigation';
import { ContactSection, Footer } from '@/components/ContactSection';
import { Guitar, CheckCircle } from 'lucide-react';

const CustomBuilds = () => {
  return (
    <>
      <Helmet>
        <title>Custom Guitar Builds | Padgsteen Guitars</title>
        <meta 
          name="description" 
          content="Work directly with Roger Padgett to design and build your dream custom guitar from the ground up. Premium tonewoods, custom inlays, and lifetime warranty." 
        />
        <meta name="keywords" content="custom guitar builds, handcrafted guitars, custom electric guitars, custom acoustic guitars, Roger Padgett, luthier, bespoke guitars" />
        <link rel="canonical" href="https://padgsteenguitars.com/services/custom-builds" />
      </Helmet>
      
      <main className="min-h-screen">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-b from-navy to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Guitar className="h-16 w-16 text-caramel mx-auto mb-6" />
              <h1 className="font-display text-4xl md:text-6xl text-foreground mb-6">
                Custom <span className="text-gradient italic">Guitar Builds</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Work directly with Roger to design and build your dream guitar from the ground up.
              </p>
            </div>
          </div>
        </section>

        {/* Service Details */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-card rounded-xl p-8 md:p-12 border border-border">
                <h2 className="font-display text-3xl text-foreground mb-6">Your Vision, Crafted to Perfection</h2>
                <p className="text-muted-foreground text-lg mb-8">
                  Every custom build begins with a conversation. Roger works closely with you to understand your playing style, tonal preferences, and aesthetic vision. From selecting premium tonewoods to crafting custom inlays and finishes, every detail is meticulously executed to create an instrument that's uniquely yours.
                </p>

                <h3 className="font-display text-2xl text-foreground mb-4">What's Included</h3>
                <ul className="space-y-4 mb-8">
                  {[
                    'Personalized consultation throughout the entire process',
                    'Premium tonewoods selected for your specific tonal goals',
                    'Custom inlays, finishes, and hardware options',
                    'Expert fretwork and setup for optimal playability',
                    'Lifetime warranty on workmanship',
                  ].map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-caramel flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="bg-caramel/10 rounded-lg p-6 border border-caramel/30">
                  <p className="font-display text-xl text-foreground mb-2">Ready to Start Your Build?</p>
                  <p className="text-muted-foreground mb-4">
                    Contact Roger to discuss your vision and get a personalized quote.
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

export default CustomBuilds;
