import { Quote } from "lucide-react";

const testimonials = [
  {
    text: "SaviorTech has been an incredible partner in our journey. Their innovative solutions, quick support, and commitment to excellence have truly set them apart.",
    name: "SHREE CONSULTANCY",
  },
  {
    text: "SaviorTech delivers smart solutions with professionalism and creativity. Their support has been invaluable in helping us grow.",
    name: "TATTOO WORLD",
  },
  {
    text: "SaviorTech made everything simple and effective — their expertise truly stands out.",
    name: "DYU ART CAFE",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-secondary">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-sm tracking-[0.3em] text-primary mb-4 font-body">TESTIMONIALS</p>
        <h2 className="font-display text-4xl md:text-5xl text-foreground mb-16">
          STRAIGHT FROM THE FEED
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-background border border-border rounded-lg p-8 flex flex-col">
              <Quote className="w-8 h-8 text-primary mb-4" />
              <p className="text-muted-foreground font-body text-sm leading-relaxed flex-1 italic">
                "{t.text}"
              </p>
              <p className="font-display text-lg text-foreground mt-6">{t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
