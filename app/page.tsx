const services = [
  {
    number: "01",
    title: "Plumbing repair",
    copy: "Clear answers and dependable repairs for leaks, fixtures, pipes, toilets, and everyday plumbing problems.",
  },
  {
    number: "02",
    title: "Drain & sewer",
    copy: "Practical help for slow drains, recurring clogs, and drainage issues throughout your home or business.",
  },
  {
    number: "03",
    title: "Water heaters",
    copy: "Troubleshooting, repair, and replacement guidance for traditional and tankless water heaters.",
  },
  {
    number: "04",
    title: "Leak detection",
    copy: "Careful troubleshooting to find hidden plumbing leaks and recommend a practical path to repair.",
  },
  {
    number: "05",
    title: "Repiping",
    copy: "Straightforward guidance and dependable workmanship for aging, damaged, or problem plumbing lines.",
  },
  {
    number: "06",
    title: "Fixture installations",
    copy: "Professional installation and replacement for faucets, sinks, toilets, disposals, and other plumbing fixtures.",
  },
];

const steps = [
  ["01", "Tell us what’s happening", "Call or email with a quick description of the issue."],
  ["02", "Get a clear recommendation", "We’ll assess the situation and explain the next best step."],
  ["03", "Get back to comfortable", "Quality work, careful cleanup, and a solution built to last."],
];

export default function Home() {
  return (
    <main>
      <div className="announcement">
        <span>Serving Costa Mesa &amp; Orange County</span>
        <a href="tel:+19495485558">Need service? Call (949) 548-5558</a>
      </div>

      <header className="site-header">
        <a className="brand" href="#top" aria-label="Brothers Plumbing home">
          <img src="/brothers-plumbing-logo.jpg" alt="Brothers Plumbing" />
        </a>
        <nav aria-label="Main navigation">
          <a href="/" aria-current="page">Home</a>
          <a href="/services">Services</a>
          <a href="#about">About</a>
          <a href="#process">How it works</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="header-call" href="tel:+19495485558">
          <span>Call now</span>
          (949) 548-5558
        </a>
      </header>

      <section className="hero" id="top">
        <video
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="https://images.pexels.com/videos/7584762/pexels-photo-7584762.jpeg?auto=compress&fit=crop&w=1920&h=1080"
          aria-hidden="true"
          tabIndex={-1}
        >
          <source
            src="https://videos.pexels.com/video-files/7584762/7584762-hd_1920_1080_25fps.mp4"
            type="video/mp4"
          />
        </video>
        <div className="hero-copy">
          <div className="eyebrow"><i /> Local plumbing specialists</div>
          <h1>Reliable plumbing, handled like family.</h1>
          <p className="hero-lead">
            Straightforward plumbing service for the systems your home depends on—delivered by a local Costa Mesa team with decades of experience.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="tel:+19495485558">Call for service <span>↗</span></a>
            <a className="button secondary" href="/services">Explore services <span>↗</span></a>
          </div>
          <div className="hero-proof" aria-label="Service highlights">
            <div><strong>40+</strong><span>Years serving<br />Orange County</span></div>
            <div><strong>Full-service</strong><span>Pipes, drains<br />and water heaters</span></div>
            <div><strong>Local</strong><span>Costa Mesa based<br />and family rooted</span></div>
          </div>
        </div>

        <div className="hero-photo-note" aria-label="Professional plumbing service">
          <span><i /> Professional local service</span>
          <strong>Repairs · Drains · Water heaters</strong>
        </div>
      </section>

      <section className="services section" id="services">
        <div className="section-heading">
          <div><span className="section-label">What we do</span><h2>One trusted team for your essential systems.</h2></div>
          <p>From a dripping fixture to a home that won’t heat or cool, Brothers Plumbing brings practical experience to the problem.</p>
        </div>
        <div className="service-grid">
          {services.map((service) => (
            <article className="service-card" key={service.number}>
              <span>{service.number}</span>
              <h3>{service.title}</h3>
              <p>{service.copy}</p>
              <a href="#contact">Ask about this service <b>↗</b></a>
            </article>
          ))}
        </div>
      </section>

      <section className="about section" id="about">
        <div className="about-mark" aria-hidden="true">
          <span>B</span>
          <small>Established<br />1984</small>
        </div>
        <div className="about-copy">
          <span className="section-label">Why Brothers</span>
          <h2>Experience you can feel from the first call.</h2>
          <p className="about-lead">Established in 1984 by Jim and John, Brothers Plumbing has spent more than four decades helping Orange County homeowners with dependable workmanship, honest answers, and practical plumbing solutions.</p>
          <div className="values">
            <div><span>01</span><h3>Clear communication</h3><p>We listen first, explain the options, and keep the process understandable.</p></div>
            <div><span>02</span><h3>Practical solutions</h3><p>Recommendations focused on what your home actually needs.</p></div>
            <div><span>03</span><h3>Respect for your space</h3><p>Careful work and a professional approach from arrival to cleanup.</p></div>
          </div>
        </div>
      </section>

      <section className="process section" id="process">
        <div className="section-heading compact">
          <div><span className="section-label">Simple by design</span><h2>From problem to plan in three steps.</h2></div>
        </div>
        <div className="step-grid">
          {steps.map(([number, title, copy]) => (
            <div className="step" key={number}>
              <span>{number}</span><div><h3>{title}</h3><p>{copy}</p></div>
            </div>
          ))}
        </div>
      </section>

      <section className="service-area section">
        <div>
          <span className="section-label light">Local service area</span>
          <h2>Proudly serving Costa Mesa and the surrounding Orange County communities.</h2>
        </div>
        <a className="button white" href="tel:+19495485558">Check availability <span>↗</span></a>
      </section>

      <section className="contact section" id="contact">
        <div className="contact-intro">
          <span className="section-label">Let’s get it handled</span>
          <h2>Tell us what’s going on.</h2>
          <p>Call for the quickest response, or send an email with a few details about the service you need.</p>
          <div className="contact-details">
            <a href="tel:+19495485558"><small>Phone</small><strong>(949) 548-5558</strong></a>
            <a href="mailto:brothersplumbing@sbcglobal.net"><small>Email</small><strong>brothersplumbing@sbcglobal.net</strong></a>
            <a href="https://www.google.com/maps/search/?api=1&query=1675+Superior+Ave+Costa+Mesa+CA+92627" target="_blank" rel="noreferrer"><small>Location</small><strong>1675 Superior Ave, Costa Mesa, CA</strong></a>
          </div>
        </div>
        <form className="contact-form" action="mailto:brothersplumbing@sbcglobal.net" method="post" encType="text/plain">
          <div className="field-row">
            <label>Full name<input name="name" type="text" autoComplete="name" placeholder="Your name" required /></label>
            <label>Phone number<input name="phone" type="tel" autoComplete="tel" placeholder="(949) 555-0123" /></label>
          </div>
          <label>Email address<input name="email" type="email" autoComplete="email" placeholder="you@example.com" required /></label>
          <label>How can we help?<textarea name="message" rows={5} placeholder="Tell us about the issue..." required /></label>
          <button className="button primary" type="submit">Send service request <span>↗</span></button>
          <p className="form-note">Submitting opens your email app with these details ready to send.</p>
        </form>
      </section>

      <footer>
        <div className="footer-brand"><img src="/brothers-plumbing-logo.jpg" alt="Brothers Plumbing" /><p>Professional plumbing service for Costa Mesa and Orange County.</p></div>
        <div className="footer-links"><span>Navigate</span><a href="/">Home</a><a href="/services">Services</a><a href="#about">About</a><a href="#process">How it works</a><a href="#contact">Contact</a></div>
        <div className="footer-links"><span>Get in touch</span><a href="tel:+19495485558">(949) 548-5558</a><a href="mailto:brothersplumbing@sbcglobal.net">Email Brothers</a><a href="https://m.yelp.com/biz/brothers-plumbing-costa-mesa" target="_blank" rel="noreferrer">View on Yelp</a></div>
        <div className="footer-bottom"><span>© {new Date().getFullYear()} Brothers Plumbing.</span><span>Costa Mesa, California</span></div>
      </footer>

      <div className="mobile-call">
        <a href="tel:+19495485558"><span>Call Brothers Plumbing</span><strong>(949) 548-5558</strong></a>
      </div>
    </main>
  );
}

