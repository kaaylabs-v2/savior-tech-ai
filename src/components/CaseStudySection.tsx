import clientElevate from "@/assets/client-elevate.png";
import clientMirror from "@/assets/client-mirror.jpg";

const CaseStudySection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-sm tracking-[0.3em] text-primary mb-4 font-body">CASE STUDY</p>
        <h2 className="font-display text-4xl md:text-5xl text-foreground mb-16">
          SEE RESULTS, SEE REINVENTIONS
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="group relative overflow-hidden rounded-lg border border-border">
            <img src={clientElevate} alt="Elevate AI" className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/90 to-transparent p-6">
              <span className="font-display text-2xl text-foreground">ELEVATE AI</span>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-lg border border-border">
            <img src={clientMirror} alt="Mirror Tattoos" className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/90 to-transparent p-6">
              <span className="font-display text-2xl text-foreground">MIRROR TATTOOS</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudySection;
