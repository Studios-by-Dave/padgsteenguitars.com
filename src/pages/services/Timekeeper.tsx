import { Helmet } from 'react-helmet-async';
import Navigation from '@/components/Navigation';
import { ContactSection, Footer } from '@/components/ContactSection';
import { Clock, CheckCircle } from 'lucide-react';

const Timekeeper = () => {
  return (
    <>
      <Helmet>
        <title>Timekeeper Services | Padgsteen Guitars</title>
        <meta 
          name="description" 
          content="Expert watch repair and restoration services from Roger Padgett. From vintage timepieces to modern watches, precision craftsmanship meets timeless quality." 
        />
        <meta name="keywords" content="watch repair, timekeeper, watch restoration, vintage watches, clock repair, horology, Roger Padgett, Padgsteen" />
        <link rel="canonical" href="https://padgsteenguitars.com/services/timekeeper" />
      </Helmet>
      
      <main className="min-h-screen">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-b from-navy to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Clock className="h-16 w-16 text-caramel mx-auto mb-6" />
              <h1 className="font-display text-4xl md:text-6xl text-foreground mb-6">
                <span className="text-gradient italic">Timekeeper</span> Services
              </h1>
              <p className="text-xl text-muted-foreground">
                Expert watch repair and restoration with the same precision craftsmanship applied to every instrument
              </p>
            </div>
          </div>
        </section>

        {/* Service Details */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-card rounded-xl p-8 md:p-12 border border-border">
                <h2 className="font-display text-3xl text-foreground mb-6">Precision Timepiece Care</h2>
                <p className="text-muted-foreground text-lg mb-8">
                  Just as every guitar requires meticulous attention to detail, so does every timepiece. Roger brings decades of craftsmanship experience to watch repair and restoration, treating each watch with the care and precision it deserves. From vintage heirlooms to modern timepieces, your watch is in skilled hands.
                </p>

                <h3 className="font-display text-2xl text-foreground mb-4">Services Offered</h3>
                <ul className="space-y-4 mb-8">
                  {[
                    'Complete watch overhauls and cleaning',
                    'Movement repair and regulation',
                    'Crystal and crown replacement',
                    'Bracelet and strap repairs',
                    'Battery replacement for quartz watches',
                    'Vintage watch restoration and preservation',
                    'Water resistance testing and sealing',
                    'Dial and hand restoration',
                  ].map((service) => (
                    <li key={service} className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-caramel flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{service}</span>
                    </li>
                  ))}
                </ul>

                <div className="bg-caramel/10 rounded-lg p-6 border border-caramel/30">
                  <p className="font-display text-xl text-foreground mb-2">Time for a Tune-Up?</p>
                  <p className="text-muted-foreground mb-4">
                    Whether your watch needs a simple battery replacement or complete restoration, contact Roger to discuss your timepiece.
                  </p>
                  <p className="font-display text-2xl text-foreground">
                    Call: <span className="font-bold text-caramel">(980) 525-1991</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Watch Gallery */}
        <section className="py-20 bg-gradient-to-b from-background to-card/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl text-foreground mb-4">Timepieces</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Examples of watches Roger has worked on
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="bg-card rounded-xl overflow-hidden border border-border hover:border-caramel/50 transition-all duration-300 hover-lift">
                <img
                  src="/assets/watch_1.jpeg"
                  alt="Watch 1"
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <p className="text-foreground font-display text-lg">Timepiece #1</p>
                  <p className="text-muted-foreground text-sm">Restoration complete</p>
                </div>
              </div>
              
              <div className="bg-card rounded-xl overflow-hidden border border-border hover:border-caramel/50 transition-all duration-300 hover-lift">
                <img
                  src="/assets/watch_2.jpeg"
                  alt="Watch 2"
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <p className="text-foreground font-display text-lg">Timepiece #2</p>
                  <p className="text-muted-foreground text-sm">Restoration complete</p>
                </div>
              </div>
              
              <div className="bg-card rounded-xl overflow-hidden border border-border hover:border-caramel/50 transition-all duration-300 hover-lift">
                <img
                  src="/assets/watch_3.jpeg"
                  alt="Watch 3"
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <p className="text-foreground font-display text-lg">Timepiece #3</p>
                  <p className="text-muted-foreground text-sm">Restoration complete</p>
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

export default Timekeeper;
