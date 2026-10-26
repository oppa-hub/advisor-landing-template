import Image from "next/image";
import type { CSSProperties } from "react";
import { InquiryLinkForm } from "@/components/InquiryLinkForm";
import { site, themePalettes, type IconName, type SiteConfig } from "@/config/site";

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return <svg aria-hidden="true" className="arrow-icon" viewBox="0 0 20 20" fill="none">{diagonal ? <path d="M5 15 15 5M6 5h9v9" /> : <path d="M3.5 10h12m-5-5 5 5-5 5" />}</svg>;
}

function Mark({ kind = "spark" }: { kind?: IconName }) {
  const paths: Record<IconName, string> = {
    shield: "M12 3 20 6v5c0 5-3.4 8.4-8 10-4.6-1.6-8-5-8-10V6l8-3Zm-3.5 9 2.4 2.4 4.8-5",
    compass: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm3.8-12.8-2.2 5.4-5.4 2.2 2.2-5.4 5.4-2.2Z",
    home: "m3 10 9-7 9 7M5.5 9v11h13V9M9 20v-6h6v6",
    spark: "m12 2 1.8 7.2L21 12l-7.2 1.8L12 21l-1.8-7.2L3 12l7.2-2.8L12 2Z",
    chart: "M4 19V5m0 14h16M7 15l4-4 3 2 5-6",
    heart: "M20.8 8.8c0 5.3-8.8 10.3-8.8 10.3S3.2 14.1 3.2 8.8A4.4 4.4 0 0 1 12 7a4.4 4.4 0 0 1 8.8 1.8Z",
  };
  return <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="mark-icon"><path d={paths[kind]} /></svg>;
}

function appointmentHref(config: SiteConfig) {
  return config.booking.calendlyUrl || config.booking.googleCalendarUrl || config.booking.messengerUrl || `mailto:${config.contact.email}`;
}

export function SiteHeader({ config = site }: { config?: SiteConfig }) {
  const links = [
    config.sections.about && ["About", "#about"],
    config.sections.services && ["Services", "#services"],
    config.sections.testimonials && config.testimonials.some((item) => item.approved) && ["Stories", "#testimonials"],
    config.sections.gallery && config.gallery.length > 0 && ["Gallery", "#gallery"],
    config.sections.contact && ["Contact", "#contact"],
  ].filter((item): item is [string, string] => Array.isArray(item));
  return <header className="topbar">
    <a className="brand-lockup" href="#top" aria-label={`${config.brand} home`}>
      <span className="brand-mark">{config.logo ? <Image src={config.logo} alt="" width={30} height={30} /> : config.initials}</span>
      <span className="brand-name">{config.brand}</span>
    </a>
    <nav className="desktop-nav" aria-label="Main navigation">{links.map(([label, href]) => <a href={href} key={href}>{label}</a>)}</nav>
    <a className="button button-small button-outline header-cta" href={appointmentHref(config)}>{config.booking.label}<Arrow diagonal /></a>
    <details className="mobile-menu"><summary aria-label="Open navigation menu"><span /><span /></summary>
      <nav aria-label="Mobile navigation">{links.map(([label, href]) => <a href={href} key={href}>{label}</a>)}<a href={appointmentHref(config)}>{config.booking.label}</a></nav>
    </details>
  </header>;
}

export function HeroSection({ config = site }: { config?: SiteConfig }) {
  return <section className="hero section-wrap" id="top" aria-labelledby="hero-title">
    <div className="hero-copy">
      <p className="eyebrow"><span className="status-dot" /> {config.availability}</p>
      <p className="hero-overline">{config.title} · {config.contact.location}</p>
      <h1 id="hero-title">{config.copy.heroPrefix} <em>{config.name}</em></h1>
      <p className="hero-intro">{config.introduction}</p>
      <div className="hero-actions"><a className="button button-solid" href={appointmentHref(config)}>{config.booking.label}<Arrow /></a><a className="text-link" href="#contact">Contact me<Arrow /></a></div>
      <div className="hero-footnote"><span className="footnote-rule" /><span>PERSONAL GUIDANCE<br />{config.contact.location.toUpperCase()}</span></div>
    </div>
    <div className="hero-visual"><div className="hero-image-frame"><Image className="hero-image" src={config.profileImage} alt={config.profileImageAlt} width={720} height={900} priority /><div className="hero-image-label"><span className="label-dot" /><span>{config.availability}</span></div></div><div className="orbit-stamp" aria-hidden="true"><Mark /><span>PEOPLE<br />FIRST</span></div><p className="hero-index" aria-hidden="true">01 <span /> 09</p></div>
  </section>;
}

export function AboutSection({ config = site }: { config?: SiteConfig }) {
  return <section className="about-section section-wrap section-pad" id="about">
    <div className="section-heading"><p className="eyebrow">{config.copy.aboutEyebrow} <span className="section-number">01 / ABOUT</span></p><h2>{config.copy.aboutHeading} <em>{config.copy.aboutHighlight}</em></h2></div>
    <div className="about-grid"><div className="about-symbol"><Mark /><span>PERSONAL<br />BY DESIGN</span></div><div className="about-copy"><p>{config.about.story}</p><p>{config.about.background}</p><p>{config.about.mission}</p>{config.about.credentials.length > 0 && <ul className="credential-list">{config.about.credentials.map((credential) => <li key={credential}>{credential}</li>)}</ul>}<p className="about-signoff">I&apos;m {config.name}. It&apos;s good to meet you.</p><a className="text-link" href="#services">Explore how I help<Arrow /></a></div></div>
  </section>;
}

export function ServicesSection({ config = site }: { config?: SiteConfig }) {
  return <section className="services-section section-pad" id="services"><div className="section-wrap"><div className="section-heading services-heading"><p className="eyebrow">{config.copy.servicesEyebrow} <span className="section-number">02 / SERVICES</span></p><h2>{config.copy.servicesHeading}<br /><em>{config.copy.servicesHighlight}</em></h2><p className="section-lede">{config.copy.servicesIntro}</p></div><div className="service-list">{config.services.map((service, index) => <article className="service-row" key={`${service.title}-${index}`}><span className="service-number">{String(index + 1).padStart(2, "0")}</span><div className="service-main"><div className="service-title-line"><Mark kind={service.icon} /><h3>{service.title}</h3></div><p>{service.description}</p></div><a className="round-arrow" href={appointmentHref(config)} aria-label={`Ask about ${service.title}`}><Arrow diagonal /></a></article>)}</div></div></section>;
}

export function ReasonsSection({ config = site }: { config?: SiteConfig }) {
  if (config.reasons.length === 0 && config.accomplishments.length === 0) return null;
  return <section className="why-section section-wrap section-pad" id="why-work-with-me"><div className="why-card"><div className="why-heading"><p className="eyebrow">{config.copy.reasonsEyebrow} <span className="section-number">03 / WHY WORK WITH ME</span></p><h2>{config.copy.reasonsHeading}<br /><em>{config.copy.reasonsHighlight}</em></h2><a className="button button-light" href={appointmentHref(config)}>Let&apos;s find a next step<Arrow /></a></div><div className="why-points">{config.reasons.map((reason, index) => <div className="why-point" key={reason}><span>0{index + 1}</span><p>{reason}</p><Arrow diagonal /></div>)}{config.sections.accomplishments && config.accomplishments.length > 0 && <ul className="accomplishment-list">{config.accomplishments.map((item) => <li key={`${item.label}-${item.value}`}><strong>{item.value}</strong><span>{item.label}</span></li>)}</ul>}</div><div className="why-decoration" aria-hidden="true"><Mark /></div></div></section>;
}

export function TestimonialsSection({ config = site }: { config?: SiteConfig }) {
  const approved = config.testimonials.filter((item) => item.approved);
  if (!config.sections.testimonials || approved.length === 0) return null;
  return <section className="testimonials-section section-pad" id="testimonials"><div className="section-wrap"><div className="section-heading"><p className="eyebrow">{config.copy.testimonialsEyebrow} <span className="section-number">04 / STORIES</span></p><h2>{config.copy.testimonialsHeading} <em>{config.copy.testimonialsHighlight}</em></h2></div><div className="testimonial-grid">{approved.map((item, index) => <figure className="quote-card" key={`${item.name}-${index}`}><span className="quote-mark" aria-hidden="true">“</span><blockquote>{item.quote}</blockquote><figcaption>{item.photo ? <Image className="quote-photo" src={item.photo} alt="" width={52} height={52} /> : <span className="quote-avatar">{item.name.slice(0, 1)}</span>}<span><strong>{item.name}</strong><small>{item.detail}</small></span></figcaption></figure>)}</div></div></section>;
}

export function GallerySection({ config = site }: { config?: SiteConfig }) {
  if (!config.sections.gallery || config.gallery.length === 0) return null;
  return <section className="gallery-section section-wrap section-pad" id="gallery"><div className="gallery-heading"><div className="section-heading"><p className="eyebrow">{config.copy.galleryEyebrow} <span className="section-number">05 / GALLERY</span></p><h2>{config.copy.galleryHeading} <em>{config.copy.galleryHighlight}</em></h2></div><p>Photos and milestones shared with approval.</p></div><div className="gallery-grid">{config.gallery.map((image, index) => <figure className={`gallery-item gallery-item-${index % 3}`} key={image.src}><Image src={image.src} alt={image.alt} width={1200} height={900} loading="lazy" /><figcaption>{image.caption}</figcaption></figure>)}</div></section>;
}

export function BookingSection({ config = site }: { config?: SiteConfig }) {
  if (!config.sections.booking) return null;
  const bookingLinks = [
    config.booking.googleCalendarUrl && ["Google Calendar", config.booking.googleCalendarUrl],
    config.booking.calendlyUrl && ["Calendly", config.booking.calendlyUrl],
    config.booking.messengerUrl && ["Messenger", config.booking.messengerUrl],
  ].filter((item): item is [string, string] => Array.isArray(item));
  return <section className="booking-section section-wrap section-pad" id="booking"><div className="booking-card"><div className="booking-copy"><p className="eyebrow">{config.copy.bookingEyebrow} <span className="section-number">06 / BOOK</span></p><h2>{config.copy.bookingHeading} <em>{config.copy.bookingHighlight}</em></h2><p>{config.booking.note}</p><a className="button button-solid" href={appointmentHref(config)}>{config.booking.label}<Arrow /></a></div><aside className="booking-aside"><div className="calendar-mark"><Mark kind="chart" /><span>YOUR<br />SCHEDULE</span></div><p>Choose a time or send a message when it suits you.</p><div className="booking-options">{bookingLinks.map(([label, href]) => <a key={label} href={href} target="_blank" rel="noreferrer">{label}<Arrow diagonal /></a>)}</div></aside></div></section>;
}

export function ContactSection({ config = site }: { config?: SiteConfig }) {
  const links = [
    ["Messenger", config.contact.messengerUrl], ["WhatsApp", config.contact.whatsappUrl],
    ["Facebook", config.contact.facebookUrl], ["LinkedIn", config.contact.linkedinUrl],
  ].filter((item): item is [string, string] => Boolean(item[1]));
  return <section className="contact-section section-wrap section-pad" id="contact"><div className="contact-top"><div><p className="eyebrow">{config.copy.contactEyebrow} <span className="section-number">07 / CONTACT</span></p><h2>{config.copy.contactHeading}<br /><em>{config.copy.contactHighlight}</em></h2></div><a className="contact-email" href={`mailto:${config.contact.email}`}>{config.contact.email}<Arrow diagonal /></a></div><div className="contact-details"><div><span className="detail-label">CALL OR MESSAGE</span><a href={`tel:${config.contact.phone.replace(/[^+\d]/g, "")}`}>{config.contact.phone}</a></div><div><span className="detail-label">LOCATION</span><span>{config.contact.location}</span></div><div><span className="detail-label">SOCIAL</span><div className="social-links">{links.map(([label, href]) => <a key={label} href={href} target="_blank" rel="noreferrer">{label}<Arrow diagonal /></a>)}</div></div></div><div className="contact-inquiry"><div><span className="detail-label">SEND A NOTE</span><p>Share a few details and your email app will prepare a message.</p></div><InquiryLinkForm email={config.contact.email} /></div><p className="disclosure">{config.disclosure}</p></section>;
}

export function SiteFooter({ config = site }: { config?: SiteConfig }) {
  return <footer className="footer section-wrap"><a className="brand-lockup" href="#top" aria-label="Back to top"><span className="brand-mark">{config.initials}</span><span className="brand-name">{config.brand}</span></a><p>{config.disclosure}</p><nav className="footer-socials" aria-label="Social media">{[["Facebook", config.contact.facebookUrl], ["LinkedIn", config.contact.linkedinUrl], ["WhatsApp", config.contact.whatsappUrl]].filter((item) => item[1]).map(([label, href]) => <a href={href!} key={label} target="_blank" rel="noreferrer">{label}<Arrow diagonal /></a>)}<a href={config.privacyPolicyUrl}>Privacy</a></nav><span>© {new Date().getFullYear()} {config.name}</span></footer>;
}

export function SiteThemeStyles({ config = site }: { config?: SiteConfig }) {
  const palette = { ...themePalettes[config.theme], ...config.colors };
  const font = config.font ?? (config.theme === "executive" ? "editorial" : config.theme === "minimal" ? "modern" : "friendly");
  const style = {
    "--ink": palette.ink,
    "--accent": palette.accent,
    "--paper": palette.paper,
    "--soft": palette.soft,
    "--serif": font === "editorial" ? '"Iowan Old Style", Baskerville, Georgia, serif' : font === "friendly" ? '"Trebuchet MS", Arial, sans-serif' : 'Arial, sans-serif',
  } as CSSProperties;
  return <div className={`site-shell theme-${config.theme}`} data-theme={config.theme} style={style}><a className="skip-link" href="#main-content">Skip to content</a><div id="main-content"><SiteHeader config={config} /><main><HeroSection config={config} />{config.sections.about && <AboutSection config={config} />}{config.sections.services && <ServicesSection config={config} />}{config.sections.reasons && <ReasonsSection config={config} />}{config.sections.testimonials && <TestimonialsSection config={config} />}{config.sections.gallery && <GallerySection config={config} />}{config.sections.booking && <BookingSection config={config} />}{config.sections.contact && <ContactSection config={config} />}</main><SiteFooter config={config} /></div></div>;
}
