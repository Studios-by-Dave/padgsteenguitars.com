import { Helmet } from 'react-helmet-async';
import Navigation from '@/components/Navigation';
import { ContactSection, Footer } from '@/components/ContactSection';
import { Music, CheckCircle } from 'lucide-react';

const BookingShows = () => {
  return (
    <>
      <Helmet>
        <title>Book Roger for Live Shows | Padgsteen Guitars</title>
        <meta 
          name="description" 
          content="Book Roger Padgett for live music performances at your event. Soulful Southern music for parties, venues, and special occasions." 
        />
        <meta name="keywords" content="live music performance, book musician, Southern music, acoustic performer, event entertainment, Roger Padgett, party music" />
        <link rel="canonical" href="https://padgsteenguitars.com/services/booking-shows" />
      </Helmet>
      
      <main className="min-h-screen">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-b from-navy to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Music className="h-16 w-16 text-caramel mx-auto mb-6" />
              <h1 className="font-display text-4xl md:text-6xl text-foreground mb-6">
                Book <span className="text-gradient italic">Live Shows</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Soulful Southern music performances for your events and venues.
              </p>
            </div>
          </div>
        </section>

        {/* Service Details */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-card rounded-xl p-8 md:p-12 border border-border">
                <h2 className="font-display text-3xl text-foreground mb-6">Live Music Performance</h2>
                <p className="text-muted-foreground text-lg mb-8">
                  Roger brings decades of musical experience to every performance. From intimate gatherings to larger venues, his soulful Southern style creates the perfect atmosphere for any occasion. Whether you need background ambiance or center-stage entertainment, Roger delivers authentic, heartfelt music that resonates with audiences.
                </p>

                <h3 className="font-display text-2xl text-foreground mb-4">Perfect For</h3>
                <ul className="space-y-4 mb-8">
                  {[
                    'Private parties and celebrations',
                    'Weddings and rehearsal dinners',
                    'Restaurant and venue entertainment',
                    'Corporate events and gatherings',
                    'Festivals and community events',
                  ].map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-caramel flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <h3 className="font-display text-2xl text-foreground mb-4">What to Expect</h3>
                <ul className="space-y-4 mb-8">
                  {[
                    'Authentic Southern musical stylings',
                    'Acoustic and electric guitar performances',
                    'Vocals and instrumentals',
                    'Flexible setlists to match your event',
                    'Professional and reliable service',
                  ].map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-caramel flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="bg-caramel/10 rounded-lg p-6 border border-caramel/30">
                  <p className="font-display text-xl text-foreground mb-2">Book Roger for Your Event</p>
                  <p className="text-muted-foreground mb-4">
                    Contact to discuss availability, pricing, and performance details for your specific event.
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

export default BookingShows;
