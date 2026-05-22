import { Wrench, Guitar, Music, ArrowRight } from 'lucide-react';

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  link: string;
}

const services: Service[] = [
  {
    icon: <Guitar className="h-8 w-8" />,
    title: 'Custom Builds',
    description: 'Work directly with Roger to design and build your dream guitar from the ground up.',
    features: ['Personalized consultation', 'Premium tonewoods', 'Custom inlays & finishes', 'Lifetime warranty'],
    link: '/services/custom-builds',
  },
  {
    icon: <Wrench className="h-8 w-8" />,
    title: 'Repairs & Restorations',
    description: 'Expert repair services to bring your beloved instrument back to its full glory.',
    features: ['Fret work & leveling', 'Neck resets', 'Setups & adjustments', 'Upgrades & mods'],
    link: '/services/repairs-restorations',
  },
  {
    icon: <Music className="h-8 w-8" />,
    title: 'Booking Shows',
    description: 'Book Roger for live music performances at your events and venues.',
    features: ['Private parties', 'Weddings', 'Venue entertainment', 'Corporate events'],
    link: '/services/booking-shows',
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-background relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-wood-texture opacity-30" />
      
      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-caramel font-sans uppercase tracking-[0.2em] text-sm mb-4">
            Luthier Services
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6">
            Expert <span className="text-gradient italic">Craftsmanship</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From custom builds to delicate repairs, Roger brings decades of experience 
            and genuine passion to every instrument that comes through his workshop.
          </p>
        </div>
        
        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group bg-gradient-card rounded-xl p-6 border border-border hover:border-caramel/50 transition-all duration-300 hover-lift"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="w-16 h-16 rounded-lg bg-caramel/10 flex items-center justify-center text-caramel mb-6 group-hover:bg-caramel group-hover:text-cream transition-all duration-300">
                {service.icon}
              </div>
              
              {/* Title */}
              <h3 className="font-display text-xl text-foreground mb-3">
                {service.title}
              </h3>
              
              {/* Description */}
              <p className="text-muted-foreground text-sm mb-4">
                {service.description}
              </p>
              
              {/* Features */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-foreground/80">
                    <span className="w-1.5 h-1.5 rounded-full bg-caramel" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Learn More Link */}
              <a
                href={service.link}
                className="inline-flex items-center gap-2 text-caramel hover:text-caramel/80 font-sans text-sm transition-colors"
              >
                Learn More <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          ))}
        </div>
        
        {/* CTA Phone Number */}
        <div className="text-center mt-12">
          <p className="font-display text-2xl md:text-3xl text-foreground">
            Call Today! <span className="font-bold text-caramel">(980) 525-1991</span>
          </p>
        </div>
        
        {/* Decorative divider */}
        <div className="section-divider mt-16" />
      </div>
    </section>
  );
};

export default ServicesSection;
