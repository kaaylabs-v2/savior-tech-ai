import { useState } from "react";
import { Phone, Mail } from "lucide-react";

const ContactSection = () => {
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you! We'll get back to you soon.");
    setForm({ firstName: "", lastName: "", email: "", phone: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="font-display text-4xl md:text-5xl text-foreground mb-4">Contact us</h2>
        <p className="text-muted-foreground font-body mb-12">
          Your next solution starts here. Submit your need!
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First name"
                value={form.firstName}
                onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                className="bg-secondary border border-border rounded-md px-4 py-3 text-foreground placeholder:text-muted-foreground font-body text-sm focus:outline-none focus:ring-1 focus:ring-primary"
              />
              <input
                type="text"
                placeholder="Last name"
                value={form.lastName}
                onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                className="bg-secondary border border-border rounded-md px-4 py-3 text-foreground placeholder:text-muted-foreground font-body text-sm focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>
            <input
              type="email"
              required
              placeholder="Email *"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full bg-secondary border border-border rounded-md px-4 py-3 text-foreground placeholder:text-muted-foreground font-body text-sm focus:outline-none focus:ring-1 focus:ring-primary"
            />
            <input
              type="tel"
              placeholder="Phone"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              className="w-full bg-secondary border border-border rounded-md px-4 py-3 text-foreground placeholder:text-muted-foreground font-body text-sm focus:outline-none focus:ring-1 focus:ring-primary"
            />
            <textarea
              required
              placeholder="Message *"
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full bg-secondary border border-border rounded-md px-4 py-3 text-foreground placeholder:text-muted-foreground font-body text-sm focus:outline-none focus:ring-1 focus:ring-primary resize-none"
            />
            <button
              type="submit"
              className="bg-primary text-primary-foreground px-8 py-3 rounded-md font-body text-sm tracking-wider hover:opacity-90 transition-opacity"
            >
              Submit
            </button>
          </form>

          <div className="flex flex-col justify-center gap-6">
            <p className="text-muted-foreground italic font-body">
              "Let us know what you're looking for — we're listening."
            </p>
            <div className="flex items-center gap-3 text-foreground font-body">
              <Phone className="w-5 h-5 text-primary" />
              <span>+91 8445734331</span>
            </div>
            <div className="flex items-center gap-3 text-foreground font-body">
              <Mail className="w-5 h-5 text-primary" />
              <span>support@saviortech.in</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
