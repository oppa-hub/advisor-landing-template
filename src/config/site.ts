export type ThemeName = "executive" | "minimal" | "small-business";
export type FontChoice = "editorial" | "modern" | "friendly";
export type IconName = "shield" | "compass" | "home" | "spark" | "chart" | "heart";

export interface SiteConfig {
  name: string;
  title: string;
  brand: string;
  initials: string;
  logo: string;
  profileImage: string;
  profileImageAlt: string;
  theme: ThemeName;
  font?: FontChoice;
  colors: Partial<{ ink: string; accent: string; paper: string; soft: string }>;
  availability: string;
  introduction: string;
  copy: {
    heroPrefix: string;
    aboutEyebrow: string; aboutHeading: string; aboutHighlight: string;
    servicesEyebrow: string; servicesHeading: string; servicesHighlight: string; servicesIntro: string;
    reasonsEyebrow: string; reasonsHeading: string; reasonsHighlight: string;
    testimonialsEyebrow: string; testimonialsHeading: string; testimonialsHighlight: string;
    galleryEyebrow: string; galleryHeading: string; galleryHighlight: string;
    bookingEyebrow: string; bookingHeading: string; bookingHighlight: string;
    contactEyebrow: string; contactHeading: string; contactHighlight: string;
  };
  about: { story: string; background: string; mission: string; credentials: string[] };
  services: { title: string; description: string; icon: IconName }[];
  reasons: string[];
  accomplishments: { label: string; value: string }[];
  testimonials: { quote: string; name: string; detail: string; approved: boolean; photo?: string }[];
  gallery: { src: string; alt: string; caption: string }[];
  contact: {
    email: string;
    phone: string;
    location: string;
    messengerUrl: string;
    whatsappUrl: string;
    facebookUrl: string;
    linkedinUrl: string;
  };
  booking: { googleCalendarUrl: string; calendlyUrl: string; messengerUrl: string; label: string; note: string };
  privacyPolicyUrl: string;
  disclosure: string;
  seo: { title: string; description: string; canonicalUrl: string; openGraphImage: string; favicon: string };
  sections: {
    about: boolean; services: boolean; reasons: boolean; testimonials: boolean;
    gallery: boolean; booking: boolean; contact: boolean; accomplishments: boolean;
  };
}

export const themePalettes: Record<ThemeName, SiteConfig["colors"]> = {
  executive: { ink: "#40131f", accent: "#c7435d", paper: "#fbf7f3", soft: "#f2e8e3" },
  minimal: { ink: "#15283c", accent: "#356b8a", paper: "#f7fafc", soft: "#e9f0f4" },
  "small-business": { ink: "#2f3524", accent: "#b86439", paper: "#fff9ed", soft: "#f4ead5" },
};

export const site = {
  name: "Your Name",
  title: "Financial Advisor",
  brand: "Your Name Advisory",
  initials: "YN",
  logo: "/favicon.svg",
  profileImage: "/images/profile-placeholder.svg",
  profileImageAlt: "Replace with an approved portrait of the professional",
  theme: "executive",
  font: "editorial",
  colors: {},
  availability: "Welcoming new conversations",
  introduction: "Clear, personal guidance for the plans, people, and next steps that matter to you.",
  copy: {
    heroPrefix: "Meet",
    aboutEyebrow: "A little about me", aboutHeading: "Good decisions start with", aboutHighlight: "good conversations.",
    servicesEyebrow: "Ways I can help", servicesHeading: "Support for the things", servicesHighlight: "you’re moving toward.", servicesIntro: "We’ll begin with your priorities and discuss the options that fit.",
    reasonsEyebrow: "The difference is in the details", reasonsHeading: "Advice that feels", reasonsHighlight: "like it fits.",
    testimonialsEyebrow: "Kind words", testimonialsHeading: "Shared experiences,", testimonialsHighlight: "with permission.",
    galleryEyebrow: "A few moments", galleryHeading: "More of", galleryHighlight: "my work and world.",
    bookingEyebrow: "Your next step starts here", bookingHeading: "A good place to", bookingHighlight: "begin.",
    contactEyebrow: "Say hello", contactHeading: "Good things begin", contactHighlight: "with hello.",
  },
  about: {
    story: "Good advice starts with listening. Use this space to introduce yourself, explain how you work, and help people understand what to expect from a first conversation.",
    background: "Add a short, factual account of your professional background and relevant experience.",
    mission: "Describe the purpose that guides your work with clients.",
    credentials: [],
  },
  services: [
    { title: "Financial planning", description: "Talk through priorities, organize questions, and set a clear next step around your goals.", icon: "compass" },
    { title: "Life and health protection", description: "Review suitable protection options, including costs, terms, and important limitations.", icon: "shield" },
    { title: "Property guidance", description: "Get help comparing options and planning a property search around your needs.", icon: "home" },
  ],
  reasons: [
    "Conversations shaped around your goals and circumstances",
    "Clear explanations and time to ask questions",
    "A steady point of contact from first chat to next step",
  ],
  accomplishments: [],
  testimonials: [],
  gallery: [],
  contact: {
    email: "hello@example.com",
    phone: "+63 917 000 0000",
    location: "Philippines",
    messengerUrl: "",
    whatsappUrl: "",
    facebookUrl: "",
    linkedinUrl: "",
  },
  booking: {
    googleCalendarUrl: "",
    calendlyUrl: "",
    messengerUrl: "",
    label: "Book a first conversation",
    note: "Share your preferred booking link and what a first conversation covers.",
  },
  privacyPolicyUrl: "/privacy/",
  disclosure: "Information on this page is general and for introduction only. It is not a personal recommendation, policy illustration, or promise of results.",
  seo: {
    title: "Your Name | Financial Advisor",
    description: "Meet Your Name, Financial Advisor. Start a conversation about your priorities and goals.",
    canonicalUrl: "",
    openGraphImage: "/og-card.svg",
    favicon: "/favicon.svg",
  },
  sections: {
    about: true, services: true, reasons: true, testimonials: true,
    gallery: true, booking: true, contact: true, accomplishments: true,
  },
} satisfies SiteConfig;

const HEX_COLOR = /^#[0-9a-fA-F]{6}$/;
export function validateSiteConfig(config: SiteConfig): SiteConfig {
  if (!config.name.trim() || !config.title.trim() || !config.brand.trim()) {
    throw new Error("Set the professional name, title, and brand in src/config/site.ts.");
  }
  for (const [key, value] of Object.entries(config.colors)) {
    if (value && !HEX_COLOR.test(value)) throw new Error(`Invalid ${key} color in src/config/site.ts: ${value}`);
  }
  if (!/^\S+@\S+\.\S+$/.test(config.contact.email)) {
    throw new Error("Add a valid contact email in src/config/site.ts.");
  }
  return config;
}

validateSiteConfig(site);
