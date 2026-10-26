export const site = {
  name: "Jordan Lee",
  role: "Independent Financial Advisor",
  brand: "Jordan Lee Advisory",
  location: "Cebu City, Philippines",
  availability: "Now welcoming new conversations",
  description:
    "Thoughtful guidance for the plans, people, and next steps that matter to you.",
  about:
    "Good advice starts with listening. I help people make sense of their options, set clear priorities, and take a next step that feels right for them. Our conversations are practical, personal, and shaped around your goals.",
  profileImage:
    "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=1100&q=85",
  profileImageAlt: "Sample portrait. Replace with the advisor's approved profile photo.",
  initials: "JL",
  logoText: "JL",
  colors: {
    ink: "#173b32",
    accent: "#b9674e",
    paper: "#f7f5ef",
  },
  navigation: [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Stories", href: "#testimonials" },
    { label: "Gallery", href: "#gallery" },
  ],
  services: [
    {
      number: "01",
      title: "A plan that fits",
      description:
        "Talk through your priorities, organize the moving parts, and create a clear place to begin.",
      tag: "Planning",
    },
    {
      number: "02",
      title: "Protection for what matters",
      description:
        "Explore protection options with a clear view of the cover, costs, and trade-offs involved.",
      tag: "Protection",
    },
    {
      number: "03",
      title: "A home for your next chapter",
      description:
        "Get personal support as you compare places, ask questions, and plan your property journey.",
      tag: "Property",
    },
  ],
  reasons: [
    "Advice shaped around your goals and circumstances",
    "Clear explanations, with time to ask questions",
    "A steady point of contact from first chat to next step",
  ],
  testimonials: [
    {
      quote:
        "Add an approved client quote here. Keep the wording accurate and confirm you have permission to share it.",
      name: "Client name",
      detail: "Client relationship",
    },
    {
      quote:
        "Share a specific, verifiable experience that helps a new visitor understand what working with you feels like.",
      name: "Client name",
      detail: "Client relationship",
    },
  ],
  gallery: [
    {
      src: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1100&q=85",
      alt: "Sunlit, welcoming meeting space",
      caption: "A space for good conversations",
      shape: "gallery-wide",
    },
    {
      src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=85",
      alt: "Modern city buildings in warm evening light",
      caption: "Rooted in the community",
      shape: "gallery-tall",
    },
    {
      src: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=900&q=85",
      alt: "Bright shared workspace with plants",
      caption: "Here when you need a sounding board",
      shape: "gallery-small",
    },
  ],
  booking: {
    url: "https://cal.com/",
    label: "Book a first conversation",
    note: "A relaxed 20-minute introduction. No pressure to make a decision.",
  },
  contact: {
    email: "hello@example.com",
    phone: "+63 917 000 0000",
    address: "Cebu City, Philippines",
  },
  socials: [
    { label: "Instagram", href: "https://instagram.com/" },
    { label: "LinkedIn", href: "https://linkedin.com/" },
    { label: "Facebook", href: "https://facebook.com/" },
  ],
  footerNote:
    "Information on this page is general and for introduction only. It is not a personal recommendation or a promise of results.",
};

export type SiteConfig = typeof site;
