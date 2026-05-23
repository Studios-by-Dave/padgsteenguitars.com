import { ShoppingBag, Star, Clock } from 'lucide-react';

const ShopSection = () => {
  return (
    <section id="shop" className="py-20 bg-gradient-to-b from-background to-card/50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-4">
            Shop
          </h2>
          <p className="font-sans text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover handcrafted guitars, memorabilia, and unique items from Roger Padgett's collection
          </p>
        </div>

        {/* Placeholder Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Placeholder Item 1 */}
          <div className="bg-card rounded-xl p-6 border border-border hover:border-caramel/50 transition-all duration-300 hover-lift">
            <div className="aspect-video bg-gradient-to-br from-navy/20 to-caramel/10 rounded-lg mb-4 flex items-center justify-center">
              <ShoppingBag className="h-16 w-16 text-caramel/50" />
            </div>
            <h3 className="font-display text-xl text-foreground mb-2">Coming Soon</h3>
            <p className="text-muted-foreground text-sm mb-4">
              Handcrafted guitars and custom builds will be available for purchase here.
            </p>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1">
                <Star className="h-4 w-4" />
                Premium Quality
              </span>
              <span className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                Handmade
              </span>
            </div>
          </div>

          {/* Placeholder Item 2 */}
          <div className="bg-card rounded-xl p-6 border border-border hover:border-caramel/50 transition-all duration-300 hover-lift">
            <div className="aspect-video bg-gradient-to-br from-navy/20 to-caramel/10 rounded-lg mb-4 flex items-center justify-center">
              <ShoppingBag className="h-16 w-16 text-caramel/50" />
            </div>
            <h3 className="font-display text-xl text-foreground mb-2">Coming Soon</h3>
            <p className="text-muted-foreground text-sm mb-4">
              Vintage memorabilia and collectibles from Roger's personal collection.
            </p>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1">
                <Star className="h-4 w-4" />
                One of a Kind
              </span>
              <span className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                Authentic
              </span>
            </div>
          </div>

          {/* Placeholder Item 3 */}
          <div className="bg-card rounded-xl p-6 border border-border hover:border-caramel/50 transition-all duration-300 hover-lift">
            <div className="aspect-video bg-gradient-to-br from-navy/20 to-caramel/10 rounded-lg mb-4 flex items-center justify-center">
              <ShoppingBag className="h-16 w-16 text-caramel/50" />
            </div>
            <h3 className="font-display text-xl text-foreground mb-2">Coming Soon</h3>
            <p className="text-muted-foreground text-sm mb-4">
              Accessories, parts, and merchandise for guitar enthusiasts.
            </p>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1">
                <Star className="h-4 w-4" />
                Expert Curated
              </span>
              <span className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                Ready to Ship
              </span>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-4">
            Check back soon for new additions to our shop
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-caramel text-cream font-sans font-medium px-6 py-3 rounded-lg hover:bg-caramel/90 transition-colors"
          >
            Contact for Inquiries
          </a>
        </div>
      </div>
    </section>
  );
};

export default ShopSection;
