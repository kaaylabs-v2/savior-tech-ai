const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center bg-background overflow-hidden">
      {/* Subtle radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(14_100%_52%_/_0.05)_0%,_transparent_70%)]" />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <p className="text-sm md:text-base tracking-[0.3em] text-muted-foreground mb-6 font-body">
          SAVIOR. YOUR BRAND'S STORY, AMPLIFIED.
        </p>
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.95] text-foreground mb-10">
          WE DON'T JUST MANAGE FEEDS, WE CRAFT OBSESSIONS.
        </h1>
        <a
          href="#contact"
          className="inline-block px-8 py-3 border border-foreground text-foreground font-body text-sm tracking-[0.2em] hover:bg-foreground hover:text-background transition-all duration-300"
        >
          LET'S MAKE WAVES
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
