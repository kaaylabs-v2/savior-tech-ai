import founderRoshan from "@/assets/founder-roshan.jpg";
import founderVansh from "@/assets/founder-vansh.jpg";

const founders = [
  { name: "Roshan Agnihotri", role: "Founder / CEO", img: founderRoshan },
  { name: "Vansh Yadav", role: "Co Founder / MD", img: founderVansh },
];

const FoundersSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="font-display text-4xl md:text-5xl text-foreground mb-16">
          Meet The Founders
        </h2>
        <div className="flex flex-wrap justify-center gap-16">
          {founders.map((f) => (
            <div key={f.name} className="flex flex-col items-center">
              <div className="w-48 h-48 rounded-full overflow-hidden border-2 border-primary mb-6">
                <img src={f.img} alt={f.name} className="w-full h-full object-cover" />
              </div>
              <h3 className="font-display text-2xl text-foreground">{f.name}</h3>
              <p className="text-muted-foreground font-body text-sm mt-1">{f.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FoundersSection;
