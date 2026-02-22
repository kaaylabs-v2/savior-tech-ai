import client3 from "@/assets/client-3.png";
import client4 from "@/assets/client-4.png";
import client5 from "@/assets/client-5.jpg";
import client6 from "@/assets/client-6.jpg";
import clientElevate from "@/assets/client-elevate.png";
import clientMirror from "@/assets/client-mirror.jpg";

const logos = [clientElevate, clientMirror, client3, client4, client5, client6];

const ClientsSection = () => {
  return (
    <section className="py-24 bg-secondary">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p className="text-sm tracking-[0.3em] text-primary mb-4 font-body">AMONG OUR CLIENTS</p>
        <h2 className="font-display text-4xl md:text-5xl text-foreground mb-16">
          PROUD TO WORK WITH
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-10">
          {logos.map((logo, i) => (
            <img
              key={i}
              src={logo}
              alt={`Client ${i + 1}`}
              className="w-20 h-20 object-contain rounded-full opacity-70 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
