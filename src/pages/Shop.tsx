import { Helmet } from 'react-helmet-async';
import Navigation from '@/components/Navigation';
import { ContactSection, Footer } from '@/components/ContactSection';
import { ShoppingBag, Star, Clock, Plane, ExternalLink, Settings, Cog, Zap } from 'lucide-react';

const Shop = () => {
  return (
    <>
      <Helmet>
        <title>Shop | Padgsteen Guitars</title>
        <meta 
          name="description" 
          content="Discover handcrafted guitars, memorabilia, and unique items from Roger Padgett's collection. Custom builds, vintage collectibles, and guitar accessories." 
        />
        <meta name="keywords" content="shop, guitars for sale, memorabilia, custom guitars, Roger Padgett, Padgsteen, guitar accessories, vintage guitars" />
        <link rel="canonical" href="https://padgsteenguitars.com/shop" />
      </Helmet>
      
      <main className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
        <Navigation />
        
        {/* Hero Section - Industrial/Punk Aesthetic */}
        <section className="pt-32 pb-20 relative overflow-hidden">
          {/* Industrial texture overlay */}
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 2px, #000 2px, #000 4px)`,
          }} />
          
          {/* Gear decorations */}
          <div className="absolute top-10 left-10 opacity-20">
            <Cog className="h-32 w-32 text-stone-400 animate-spin" style={{ animationDuration: '20s' }} />
          </div>
          <div className="absolute bottom-10 right-10 opacity-20">
            <Settings className="h-24 w-24 text-stone-400 animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }} />
          </div>
          
          <div className="container mx-auto px-4 relative">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex items-center justify-center gap-4 mb-6">
                <Zap className="h-8 w-8 text-amber-500" />
                <ShoppingBag className="h-16 w-16 text-amber-500" />
                <Zap className="h-8 w-8 text-amber-500" />
              </div>
              <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-stone-100 mb-6 tracking-tight" style={{
                textShadow: '4px 4px 0px #000, -2px -2px 0px #78716c',
                WebkitTextStroke: '2px #000',
              }}>
                <span className="text-amber-500 italic">THE</span> SHOP
              </h1>
              <p className="font-sans text-xl md:text-2xl text-stone-300 mb-4 uppercase tracking-widest" style={{
                textShadow: '2px 2px 4px rgba(0,0,0,0.8)',
              }}>
                Handcrafted • Vintage • One-of-a-Kind
              </p>
              <div className="w-48 h-1 bg-amber-500 mx-auto mb-6" style={{
                boxShadow: '0 0 20px rgba(245, 158, 11, 0.5)',
              }} />
              <p className="text-stone-400 max-w-2xl mx-auto">
                Discover handcrafted guitars, memorabilia, and unique items from Roger Padgett's collection
              </p>
            </div>
          </div>
        </section>

        {/* RC Planes Section - Industrial Style */}
        <section className="py-16 bg-slate-800/50 relative">
          <div className="absolute inset-0 opacity-5" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #78716c 1px, transparent 0)`,
            backgroundSize: '32px 32px',
          }} />
          
          <div className="container mx-auto px-4 relative">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-3 bg-slate-900/80 px-6 py-3 rounded-full border-2 border-amber-500/50 mb-6">
                <Plane className="h-6 w-6 text-amber-500" />
                <h2 className="font-display text-3xl text-stone-100 uppercase tracking-wider">RC Airplanes</h2>
                <Plane className="h-6 w-6 text-amber-500" />
              </div>
              <p className="text-stone-400 max-w-2xl mx-auto uppercase tracking-widest text-sm">
                Quality RC planes from trusted hobby retailers
              </p>
            </div>
            
            {/* RC Plane Images */}
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
              <div className="group relative bg-slate-900/80 border-2 border-stone-600 hover:border-amber-500 transition-all duration-300 overflow-hidden rounded-xl">
                <img
                  src="/assets/rc_1.jpeg"
                  alt="RC Plane 1"
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-amber-500 font-display text-lg uppercase tracking-wide">RC Plane #1</p>
                  <p className="text-stone-400 text-sm">Available for purchase</p>
                </div>
              </div>
              
              <div className="group relative bg-slate-900/80 border-2 border-stone-600 hover:border-amber-500 transition-all duration-300 overflow-hidden rounded-xl">
                <img
                  src="/assets/rc_2.avif"
                  alt="RC Plane 2"
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-amber-500 font-display text-lg uppercase tracking-wide">RC Plane #2</p>
                  <p className="text-stone-400 text-sm">Available for purchase</p>
                </div>
              </div>
              
              <div className="group relative bg-slate-900/80 border-2 border-stone-600 hover:border-amber-500 transition-all duration-300 overflow-hidden rounded-xl">
                <img
                  src="/assets/rc_3.webp"
                  alt="RC Plane 3"
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-amber-500 font-display text-lg uppercase tracking-wide">RC Plane #3</p>
                  <p className="text-stone-400 text-sm">Available for purchase</p>
                </div>
              </div>
            </div>

            {/* Retailer Links */}
            <div className="text-center mb-8">
              <p className="text-stone-400 uppercase tracking-widest text-sm mb-6">
                Also available from trusted hobby retailers
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Dynam Hobby */}
              <a
                href="https://www.dynamrc.com/collections/rc-airplanes"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-slate-900/80 border-2 border-stone-600 hover:border-amber-500 transition-all duration-300 p-8 hover:scale-105 rounded-xl"
              >
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-slate-800 border-2 border-amber-500 flex items-center justify-center shrink-0 group-hover:bg-amber-500 transition-colors rounded-lg">
                    <Plane className="h-8 w-8 text-amber-500 group-hover:text-slate-900" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-2xl text-stone-100 mb-2 group-hover:text-amber-500 transition-colors uppercase tracking-wide">
                      Dynam Hobby
                    </h3>
                    <p className="text-stone-400 text-sm mb-4">
                      PNP/BNF/RTF model planes for all skill levels. EDF jets, sport airplanes, WW warbirds.
                    </p>
                    <div className="flex items-center gap-4 text-xs text-stone-500 uppercase tracking-wider mb-4">
                      <span className="flex items-center gap-1">
                        <Star className="h-4 w-4 text-amber-500" />
                        4.0 Rating
                      </span>
                      <span>•</span>
                      <span>4–12 Day Delivery</span>
                    </div>
                    <div className="flex items-center gap-2 text-amber-500 font-bold uppercase tracking-wider text-sm group-hover:underline">
                      Visit Site <ExternalLink className="h-4 w-4" />
                    </div>
                  </div>
                </div>
              </a>

              {/* FMS Model */}
              <a
                href="https://www.fmshobby.com/collections/rc-airplane"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-slate-900/80 border-2 border-stone-600 hover:border-amber-500 transition-all duration-300 p-8 hover:scale-105 rounded-xl"
              >
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-slate-800 border-2 border-amber-500 flex items-center justify-center shrink-0 group-hover:bg-amber-500 transition-colors rounded-lg">
                    <Plane className="h-8 w-8 text-amber-500 group-hover:text-slate-900" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-2xl text-stone-100 mb-2 group-hover:text-amber-500 transition-colors uppercase tracking-wide">
                      FMS Model
                    </h3>
                    <p className="text-stone-400 text-sm mb-4">
                      EDF jets, warbirds, trainers. Models for beginners to advanced pilots.
                    </p>
                    <div className="flex items-center gap-4 text-xs text-stone-500 uppercase tracking-wider mb-4">
                      <span className="flex items-center gap-1">
                        <Star className="h-4 w-4 text-amber-500" />
                        4.3 Rating
                      </span>
                      <span>•</span>
                      <span>Free Delivery</span>
                    </div>
                    <div className="flex items-center gap-2 text-amber-500 font-bold uppercase tracking-wider text-sm group-hover:underline">
                      Visit Site <ExternalLink className="h-4 w-4" />
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </section>

        {/* Shop Items - Industrial Cards */}
        <section className="py-20 bg-slate-900 relative">
          <div className="absolute inset-0 opacity-5" style={{
            backgroundImage: `repeating-linear-gradient(45deg, #78716c 0, #78716c 1px, transparent 0, transparent 50%)`,
            backgroundSize: '10px 10px',
          }} />
          
          <div className="container mx-auto px-4 relative">
            <div className="text-center mb-12">
              <h2 className="font-display text-4xl text-stone-100 mb-4 uppercase tracking-wider" style={{
                textShadow: '3px 3px 0px #000',
              }}>
                <span className="text-amber-500">Coming</span> Soon
              </h2>
              <div className="w-32 h-1 bg-amber-500 mx-auto mb-4" />
              <p className="text-stone-400 max-w-2xl mx-auto uppercase tracking-widest text-sm">
                Instruments and audio gear will be listed soon
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Placeholder Item 1 */}
              <div className="group relative bg-slate-800/80 border-2 border-stone-600 hover:border-amber-500 transition-all duration-300 p-6 hover:scale-105 rounded-xl">
                <div className="aspect-video bg-slate-900 border border-stone-600 mb-4 flex items-center justify-center relative overflow-hidden rounded-lg">
                  <div className="absolute inset-0 opacity-20" style={{
                    backgroundImage: `conic-gradient(from 0deg, #78716c, #a8a29e, #78716c)`,
                  }} />
                  <ShoppingBag className="h-16 w-16 text-amber-500 relative z-10" />
                </div>
                <h3 className="font-display text-xl text-stone-100 mb-2 uppercase tracking-wide group-hover:text-amber-500 transition-colors">
                  Custom Guitars
                </h3>
                <p className="text-stone-400 text-sm mb-4">
                  Handcrafted guitars and custom builds from Roger's workshop
                </p>
                <div className="flex items-center gap-4 text-xs text-stone-500 uppercase tracking-wider">
                  <span className="flex items-center gap-1">
                    <Star className="h-4 w-4 text-amber-500" />
                    Premium
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-4 w-4 text-amber-500" />
                    Handmade
                  </span>
                </div>
              </div>

              {/* Placeholder Item 2 */}
              <div className="group relative bg-slate-800/80 border-2 border-stone-600 hover:border-amber-500 transition-all duration-300 p-6 hover:scale-105 rounded-xl">
                <div className="aspect-video bg-slate-900 border border-stone-600 mb-4 flex items-center justify-center relative overflow-hidden rounded-lg">
                  <div className="absolute inset-0 opacity-20" style={{
                    backgroundImage: `conic-gradient(from 0deg, #78716c, #a8a29e, #78716c)`,
                  }} />
                  <ShoppingBag className="h-16 w-16 text-amber-500 relative z-10" />
                </div>
                <h3 className="font-display text-xl text-stone-100 mb-2 uppercase tracking-wide group-hover:text-amber-500 transition-colors">
                  Memorabilia
                </h3>
                <p className="text-stone-400 text-sm mb-4">
                  Vintage collectibles from Roger's personal collection
                </p>
                <div className="flex items-center gap-4 text-xs text-stone-500 uppercase tracking-wider">
                  <span className="flex items-center gap-1">
                    <Star className="h-4 w-4 text-amber-500" />
                    One of a Kind
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-4 w-4 text-amber-500" />
                    Authentic
                  </span>
                </div>
              </div>

              {/* Placeholder Item 3 */}
              <div className="group relative bg-slate-800/80 border-2 border-stone-600 hover:border-amber-500 transition-all duration-300 p-6 hover:scale-105 rounded-xl">
                <div className="aspect-video bg-slate-900 border border-stone-600 mb-4 flex items-center justify-center relative overflow-hidden rounded-lg">
                  <div className="absolute inset-0 opacity-20" style={{
                    backgroundImage: `conic-gradient(from 0deg, #78716c, #a8a29e, #78716c)`,
                  }} />
                  <ShoppingBag className="h-16 w-16 text-amber-500 relative z-10" />
                </div>
                <h3 className="font-display text-xl text-stone-100 mb-2 uppercase tracking-wide group-hover:text-amber-500 transition-colors">
                  Accessories
                </h3>
                <p className="text-stone-400 text-sm mb-4">
                  Parts, merchandise, and gear for guitar enthusiasts
                </p>
                <div className="flex items-center gap-4 text-xs text-stone-500 uppercase tracking-wider">
                  <span className="flex items-center gap-1">
                    <Star className="h-4 w-4 text-amber-500" />
                    Expert Curated
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-4 w-4 text-amber-500" />
                    Ready to Ship
                  </span>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="mt-16 text-center">
              <p className="text-stone-400 mb-6 uppercase tracking-widest text-sm">
                Check back soon for new additions
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-3 bg-amber-500 text-slate-900 font-bold uppercase tracking-wider px-8 py-4 hover:bg-amber-400 transition-colors border-2 border-amber-300 rounded-lg"
              >
                <Zap className="h-5 w-5" />
                Contact for Inquiries
              </a>
            </div>
          </div>
        </section>

        <ContactSection />
        <Footer />
      </main>
    </>
  );
};

export default Shop;
