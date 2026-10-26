import { site } from "@/config/site";

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return (
    <svg
      aria-hidden="true"
      className="arrow-icon"
      viewBox="0 0 20 20"
      fill="none"
    >
      {diagonal ? (
        <path d="M5 15 15 5M6 5h9v9" />
      ) : (
        <path d="M3.5 10h12m-5-5 5 5-5 5" />
      )}
    </svg>
  );
}

function StarMark() {
  return (
    <svg aria-hidden="true" viewBox="0 0 36 36" fill="none">
      <path d="M18 2.5c1.7 9.3 6.2 13.8 15.5 15.5-9.3 1.7-13.8 6.2-15.5 15.5C16.3 24.2 11.8 19.7 2.5 18 11.8 16.3 16.3 11.8 18 2.5Z" fill="currentColor" />
    </svg>
  );
}

export default function Home() {
  return (
    <main
      className="site-shell min-h-screen"
      style={
        {
          "--ink": site.colors.ink,
          "--accent": site.colors.accent,
          "--paper": site.colors.paper,
        } as React.CSSProperties
      }
    >
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <header className="topbar">
        <a className="brand-lockup" href="#top" aria-label={`${site.brand} home`}>
          <span className="brand-mark">{site.logoText}</span>
          <span className="brand-name">{site.brand}</span>
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          {site.navigation.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <a className="button button-small button-outline header-cta" href="#booking">
          Let&apos;s talk <Arrow diagonal />
        </a>
        <details className="mobile-menu">
          <summary aria-label="Open navigation menu">
            <span />
            <span />
          </summary>
          <nav aria-label="Mobile navigation">
            {site.navigation.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
            <a href="#booking">Let&apos;s talk</a>
          </nav>
        </details>
      </header>

      <div id="main-content">
        <section className="hero section-wrap" id="top" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow"><span className="status-dot" /> {site.availability}</p>
            <h1 id="hero-title">Make room for a <em>brighter</em> next step.</h1>
            <p className="hero-intro">{site.description}</p>
            <div className="hero-actions">
              <a className="button button-solid" href="#booking">
                Start a conversation <Arrow />
              </a>
              <a className="text-link" href="#about">Get to know me <Arrow /></a>
            </div>
            <div className="hero-footnote">
              <span className="footnote-rule" />
              <span>PERSONAL GUIDANCE<br />{site.location.toUpperCase()}</span>
            </div>
          </div>
          <div className="hero-visual" aria-label={`Profile of ${site.name}`}>
            <div className="hero-image-frame">
              <img className="hero-image" src={site.profileImage} alt={site.profileImageAlt} />
              <div className="hero-image-label">
                <span className="label-dot" />
                <span>Here to listen, here to help</span>
              </div>
            </div>
            <div className="orbit-stamp" aria-hidden="true"><StarMark /><span>PEOPLE<br />FIRST</span></div>
            <div className="hero-index" aria-hidden="true">01 <span /> 09</div>
          </div>
        </section>

        <section className="trust-strip" aria-label="How I work">
          <span>Thoughtful advice</span><i />
          <span>Clear next steps</span><i />
          <span>Built around you</span>
        </section>

        <section className="about-section section-wrap section-pad" id="about">
          <div className="section-heading">
            <p className="eyebrow">A little about me <span className="section-number">01 / ABOUT</span></p>
            <h2>Good decisions start with <em>good conversations.</em></h2>
          </div>
          <div className="about-grid">
            <div className="about-symbol"><StarMark /><span>PERSONAL<br />BY DESIGN</span></div>
            <div className="about-copy">
              <p>{site.about}</p>
              <p className="about-signoff">I&apos;m {site.name}. It&apos;s good to meet you.</p>
              <a className="text-link" href="#booking">A bit more about working together <Arrow /></a>
            </div>
          </div>
        </section>

        <section className="services-section section-pad" id="services">
          <div className="section-wrap">
            <div className="section-heading services-heading">
              <p className="eyebrow">Ways I can help <span className="section-number">02 / SERVICES</span></p>
              <h2>Support for the things<br /><em>you&apos;re moving toward.</em></h2>
              <p className="section-lede">Every situation is different. We&apos;ll start with what matters to you and work through the options together.</p>
            </div>
            <div className="service-list">
              {site.services.map((service) => (
                <article className="service-row" key={service.number}>
                  <span className="service-number">{service.number}</span>
                  <div className="service-main">
                    <div className="service-title-line"><h3>{service.title}</h3><span className="service-tag">{service.tag}</span></div>
                    <p>{service.description}</p>
                  </div>
                  <a className="round-arrow" href="#booking" aria-label={`Ask about ${service.title}`}><Arrow diagonal /></a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="why-section section-wrap section-pad" id="why-work-with-me">
          <div className="why-card">
            <div className="why-heading">
              <p className="eyebrow">The difference is in the details <span className="section-number">03 / WHY ME</span></p>
              <h2>Advice that feels<br /><em>like it fits.</em></h2>
              <a className="button button-light" href="#booking">Let&apos;s find your next step <Arrow /></a>
            </div>
            <div className="why-points">
              {site.reasons.map((reason, index) => (
                <div className="why-point" key={reason}>
                  <span>0{index + 1}</span><p>{reason}</p><Arrow diagonal />
                </div>
              ))}
              <p className="why-aside">No pressure. No jargon. Just a thoughtful place to start.</p>
            </div>
            <div className="why-decoration" aria-hidden="true"><StarMark /></div>
          </div>
        </section>

        <section className="testimonials-section section-pad" id="testimonials">
          <div className="section-wrap">
            <div className="section-heading testimonial-heading">
              <p className="eyebrow">Kind words <span className="section-number">04 / STORIES</span></p>
              <h2>Better together, <em>by design.</em></h2>
            </div>
            <div className="testimonial-grid">
              {site.testimonials.map((item, index) => (
                <figure className="quote-card" key={`${item.name}-${index}`}>
                  <span className="quote-mark" aria-hidden="true">“</span>
                  <blockquote>{item.quote}</blockquote>
                  <figcaption><span className="quote-avatar">{String(index + 1).padStart(2, "0")}</span><span><strong>{item.name}</strong><small>{item.detail}</small></span><span className="sample-label">SAMPLE</span></figcaption>
                </figure>
              ))}
            </div>
            <p className="sample-note">Sample content for layout preview. Replace with genuine, approved client feedback before publishing.</p>
          </div>
        </section>

        <section className="gallery-section section-wrap section-pad" id="gallery">
          <div className="gallery-heading">
            <div className="section-heading">
              <p className="eyebrow">A few moments <span className="section-number">05 / GALLERY</span></p>
              <h2>A little more of <em>my world.</em></h2>
            </div>
            <p>Local moments, shared ideas, and the spaces where good conversations happen.</p>
          </div>
          <div className="gallery-grid">
            {site.gallery.map((image) => (
              <figure className={`gallery-item ${image.shape}`} key={image.src}>
                <img src={image.src} alt={image.alt} loading="lazy" />
                <figcaption><span>{image.caption}</span><Arrow diagonal /></figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className="booking-section section-wrap section-pad" id="booking">
          <div className="booking-card">
            <div className="booking-copy">
              <p className="eyebrow">Your next step starts here <span className="section-number">06 / BOOK</span></p>
              <h2>Let&apos;s make a little <em>space to talk.</em></h2>
              <p>{site.booking.note}</p>
              <a className="button button-solid" href={site.booking.url} target="_blank" rel="noreferrer">{site.booking.label} <Arrow diagonal /></a>
            </div>
            <div className="booking-aside">
              <div className="calendar-mark"><span>LET&apos;S<br />TALK</span><StarMark /></div>
              <p>Come with a question or a rough idea. We can take it from there.</p>
              <span className="booking-aside-line" />
            </div>
          </div>
        </section>

        <section className="contact-section section-wrap section-pad" id="contact">
          <div className="contact-top">
            <div>
              <p className="eyebrow">Say hello <span className="section-number">07 / CONTACT</span></p>
              <h2>Good things begin<br /><em>with hello.</em></h2>
            </div>
            <a className="contact-email" href={`mailto:${site.contact.email}`}>{site.contact.email}<Arrow diagonal /></a>
          </div>
          <div className="contact-details">
            <div><span className="detail-label">CALL OR MESSAGE</span><a href={`tel:${site.contact.phone.replace(/[^+\d]/g, "")}`}>{site.contact.phone}</a></div>
            <div><span className="detail-label">FIND ME</span><span>{site.contact.address}</span></div>
            <div><span className="detail-label">SOCIAL</span><div className="social-links">{site.socials.map((item) => <a key={item.label} href={item.href} target="_blank" rel="noreferrer">{item.label}<Arrow diagonal /></a>)}</div></div>
          </div>
        </section>
      </div>

      <footer className="footer section-wrap">
        <a className="brand-lockup" href="#top" aria-label="Back to top">
          <span className="brand-mark">{site.logoText}</span><span className="brand-name">{site.brand}</span>
        </a>
        <p>{site.footerNote}</p>
        <nav className="footer-socials" aria-label="Social media">
          {site.socials.map((item) => <a key={item.label} href={item.href} target="_blank" rel="noreferrer">{item.label}<Arrow diagonal /></a>)}
        </nav>
        <span>© {new Date().getFullYear()} {site.name}</span>
      </footer>
    </main>
  );
}
