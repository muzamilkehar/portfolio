import { services } from "@/lib/data";

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

      <div className="border-t border-border">
        {services.map((service) => (
          <div
            key={service.title}
            className="grid gap-2 border-b border-border py-6 sm:grid-cols-[minmax(0,16rem)_1fr] sm:gap-8"
          >
            <h3 className="font-display text-lg text-paper">{service.title}</h3>
            <p className="max-w-[58ch] text-muted">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
