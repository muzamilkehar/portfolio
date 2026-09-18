import type { ComponentType } from "react";
import { Layers, Globe, Sparkles, Smartphone, ShieldCheck } from "lucide-react";
import { services, type Service } from "@/lib/data";

const icons: Record<string, ComponentType<any>> = {
  "Full-stack web applications": Layers,
  "Business & marketing sites": Globe,
  "AI/ML-powered features": Sparkles,
  "Mobile apps": Smartphone,
  "Security-conscious builds": ShieldCheck,
};

function ServiceCard({ service }: { service: Service }) {
  const Icon = icons[service.title];

  return (
    <div className="group rounded border border-border p-6 transition-colors duration-200 hover:border-signal/50 hover:bg-panel/60">
      <div className="flex h-11 w-11 items-center justify-center rounded border border-border text-signal transition-colors duration-200 group-hover:border-signal/60">
        {Icon && <Icon size={20} />}
      </div>
      <h3 className="mt-5 font-display text-lg text-paper">{service.title}</h3>
      <p className="mt-2 text-muted">{service.description}</p>
    </div>
  );
}

export default function Services() {
  return (
    <section id="services" className="mx-auto max-w-content px-6 py-20">
      <div className="mb-10 max-w-[60ch]">
        <h2 className="font-display text-2xl font-medium tracking-tight text-paper sm:text-3xl">
          What I can do for your project
        </h2>
        <p className="mt-3 text-muted">
          Five kinds of work clients have hired me for so far, from a first
          prototype to a live product.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <ServiceCard key={service.title} service={service} />
        ))}
      </div>
    </section>
  );
}