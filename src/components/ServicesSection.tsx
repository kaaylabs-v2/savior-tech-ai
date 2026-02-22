import { Heart, Pen, Users, Megaphone, Globe, Target } from "lucide-react";

const services = [
  {
    icon: Heart,
    title: "SOCIAL MEDIA MANAGEMENT",
    desc: "Handling content, engagement, and growth across social platforms to build a strong online presence.",
  },
  {
    icon: Pen,
    title: "CONTENT CREATION",
    desc: "Producing engaging text, images, or videos to inform, entertain, and connect with an audience.",
  },
  {
    icon: Users,
    title: "INFLUENCER MARKETING",
    desc: "Using popular creators to promote brands and build trust with target audiences.",
  },
  {
    icon: Megaphone,
    title: "SOCIAL MEDIA ADVERTISING",
    desc: "Promoting products or services through paid campaigns on platforms to reach targeted audiences.",
  },
  {
    icon: Globe,
    title: "WEBSITE DEVELOPMENT",
    desc: "Designing and building functional, user-friendly websites to enhance online presence.",
  },
  {
    icon: Target,
    title: "DIGITAL STRATEGY & PLANNING",
    desc: "Creating a roadmap to use online tools and channels effectively for business growth.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-secondary">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-sm tracking-[0.3em] text-primary mb-4 font-body">SERVICES</p>
        <h2 className="font-display text-4xl md:text-5xl text-foreground mb-16">
          NOT JUST SOCIAL BUTTERFLIES
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s) => (
            <div
              key={s.title}
              className="bg-background border border-border rounded-lg p-8 hover:border-primary/50 transition-colors group"
            >
              <s.icon className="w-10 h-10 text-primary mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="font-display text-xl text-foreground mb-3">{s.title}</h3>
              <p className="text-muted-foreground text-sm font-body leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
