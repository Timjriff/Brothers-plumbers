import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Plumbing Services | Brothers Plumbing Costa Mesa",
  description: "Drain cleaning, hydro jetting, water heaters, tankless systems, new construction plumbing, repairs, repiping, and more in Costa Mesa and Orange County.",
};

const services = [
  {
    number: "01",
    title: "Drain cleaning",
    copy: "Professional clearing for slow, clogged, and recurring drains in kitchens, bathrooms, laundry areas, and main lines.",
  },
  {
    number: "02",
    title: "Hydro jetting",
    copy: "High-pressure water cleaning that cuts through heavy buildup, grease, scale, and stubborn blockages inside drain and sewer lines.",
  },
  {
    number: "03",
    title: "Sewer camera inspections",
    copy: "A clear look inside the line to locate damage, root intrusion, buildup, and the source of recurring drainage problems.",
  },
  {
    number: "04",
    title: "Sewer repair & replacement",
    copy: "Practical repair and replacement options for damaged, collapsed, or aging sewer lines.",
  },
  {
    number: "05",
    title: "Water heater replacements",
    copy: "Removal and replacement of traditional water heaters, with straightforward recommendations for the right size and setup.",
  },
  {
    number: "06",
    title: "Tankless water heaters",
    copy: "Tankless installation, replacement, and service for efficient, reliable hot water without a storage tank.",
  },
  {
    number: "07",
    title: "Leak detection & repair",
    copy: "Careful troubleshooting and dependable repairs for visible leaks, hidden leaks, slab leaks, and damaged supply lines.",
  },
  {
    number: "08",
    title: "Pipe repair & repiping",
    copy: "Targeted pipe repairs and whole-property repiping for corroded, leaking, undersized, or aging plumbing systems.",
  },
  {
    number: "09",
    title: "Fixture installation",
    copy: "Professional installation and replacement for faucets, sinks, toilets, showers, tubs, disposals, and other fixtures.",
  },
  {
    number: "10",
    title: "Toilets & garbage disposals",
    copy: "Repairs and replacements for running toilets, clogs, leaks, damaged components, and malfunctioning disposals.",
  },
  {
    number: "11",
    title: "Remodel plumbing",
    copy: "Plumbing support for kitchen, bathroom, and whole-home remodels—from rough-in and relocation to final fixture connections.",
  },
  {
    number: "12",
    title: "New construction plumbing",
    copy: "Complete plumbing for new homes, additions, accessory dwelling units, and commercial construction projects.",
  },
];

export default function ServicesPage() {
  return (
    <main className="services-page">
      <div className="announcement">
        <span>Serving Costa Mesa &amp; Orange County</span>
        <a href="tel:+19495485558">Need service? Call (949) 548-5558</a>
      </div>

      <header className="site-header">
        <a className="brand" href="/" aria-label="Brothers Plumbing home">
          <img src="/brothers-plumbing-logo.jpg" alt="Brothers Plumbing" />
        </a>
        <nav aria-label="Main navigation">
          <a href="/services" aria-current="page">Services</a>
          <a href="/#about">About</a>
          <a href="/#process">How it works</a>
          <a href="/#contact">Contact</a>
        </nav>
        <a className="header-call" href="tel:+19495485558">
          <span>Call now</span>
          (949) 548-5558
        </a>
      </header>

      <section className="services-page-hero">
        <div className="services-page-hero-copy">
          <div className="eyebrow"><i /> Complete plumbing service</div>
          <h1>Plumbing solutions for every part of your property.</h1>
          <p>From a stubborn drain to a complete new-construction system, Brothers Plumbing brings decades of practical experience to residential and commercial plumbing work.</p>
          <div className="hero-actions">
            <a className="button primary" href="tel:+19495485558">Call for service <span>↗</span></a>
            <a className="button secondary" href="/#contact">Send a request <span>↗</span></a>
          </div>
        </div>
        <div className="services-page-index" aria-label="Service categories">
          <span>Drain &amp; sewer</span>
          <span>Water heaters</span>
          <span>Repairs &amp; repiping</span>
          <span>Construction</span>
        </div>
      </section>

      <section className="services-directory section">
        <div className="section-heading">
          <div><span className="section-label">What we handle</span><h2>Full-service plumbing, start to finish.</h2></div>
          <p>Tell us what is happening. We’ll help identify the problem, explain the options, and recommend a practical next step.</p>
        </div>
        <div className="detailed-service-grid">
          {services.map((service) => (
            <article className="detailed-service-card" key={service.number}>
              <span>{service.number}</span>
              <h2>{service.title}</h2>
              <p>{service.copy}</p>
              <a href="tel:+19495485558">Ask about this service <b>↗</b></a>
            </article>
          ))}
        </div>
      </section>

      <section className="construction-callout section">
        <div>
          <span className="section-label light">Projects large and small</span>
          <h2>Building, remodeling, or replacing a complete plumbing system?</h2>
          <p>Bring Brothers Plumbing in early for practical planning, clean installation, and one experienced team from rough-in through final connections.</p>
        </div>
        <a className="button white" href="tel:+19495485558">Discuss your project <span>↗</span></a>
      </section>

      <section className="services-contact section">
        <span className="section-label">Need plumbing help?</span>
        <h2>Let’s get it handled.</h2>
        <p>Call for the quickest response. We proudly serve Costa Mesa and surrounding Orange County communities.</p>
        <div className="hero-actions">
          <a className="button primary" href="tel:+19495485558">Call (949) 548-5558 <span>↗</span></a>
          <a className="button dark-outline" href="mailto:brothersplumbing@sbcglobal.net">Email Brothers <span>↗</span></a>
        </div>
      </section>

      <footer>
        <div className="footer-brand"><img src="/brothers-plumbing-logo.jpg" alt="Brothers Plumbing" /><p>Professional plumbing service for Costa Mesa and Orange County.</p></div>
        <div className="footer-links"><span>Navigate</span><a href="/">Home</a><a href="/services">Services</a><a href="/#about">About</a><a href="/#contact">Contact</a></div>
        <div className="footer-links"><span>Get in touch</span><a href="tel:+19495485558">(949) 548-5558</a><a href="mailto:brothersplumbing@sbcglobal.net">Email Brothers</a><a href="https://m.yelp.com/biz/brothers-plumbing-costa-mesa" target="_blank" rel="noreferrer">View on Yelp</a></div>
        <div className="footer-bottom"><span>© {new Date().getFullYear()} Brothers Plumbing.</span><span>Costa Mesa, California</span></div>
      </footer>

      <div className="mobile-call">
        <a href="tel:+19495485558"><span>Call Brothers Plumbing</span><strong>(949) 548-5558</strong></a>
      </div>
    </main>
  );
}

