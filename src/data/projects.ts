export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  category: string[];
  color: string;
  icon: string;
  image?: string;
  gallery?: string[];
}

export const projects: Project[] = [
  {
    id: "cpaas-platform",
    title: "CPaaS WhatsApp Platform",
    subtitle: "Cloud Communication Suite",
    description:
      "A robust Communications Platform as a Service enabling businesses to integrate voice, video, messaging, and authentication APIs into their applications seamlessly.",
    tags: ["SaaS Design", "API Platform", "Design System", "Enterprise"],
    category: ["Web", "Mobile", "SaaS"],
    color: "#06b6d4",
    icon: "📡",
    image: "/projects/cpaas-1.webp",
    gallery: ["/projects/cpaas/1.webp", "/projects/cpaas/2.jpg", "/projects/cpaas/3.webp"],
  },
  {
    id: "dataflow-pro",
    title: "Enterprise Analytics SaaS Dashboard",
    subtitle: "Enterprise Analytics Dashboard",
    description:
      "A comprehensive analytics platform designed for enterprise teams to visualize complex data sets, track KPIs, and generate actionable insights with real-time monitoring.",
    tags: ["SaaS Design", "Dashboard", "Data Visualization", "Design System"],
    category: ["Web", "SaaS"],
    color: "#0ea5e9",
    icon: "📊",
    image: "/projects/dataflow-1.webp",
    gallery: Array.from({ length: 25 }, (_, i) => `/projects/dataflow/${i + 1}.webp`),
  },
  {
    id: "healthcare-fitness",
    title: "Health Care App",
    subtitle: "Health Monitoring Platform",
    description:
      "A mobile-first health and fitness application that tracks vitals, workout routines, nutrition, and provides personalized wellness recommendations powered by user data.",
    tags: ["Mobile App", "Healthcare", "UX Research", "Prototyping"],
    category: ["Mobile"],
    color: "#10b981",
    icon: "🏥",
    image: "/projects/healthcare-1.webp",
    gallery: Array.from({ length: 11 }, (_, i) => `/projects/healthcare/${i + 1}.webp`),
  },
  {
    id: "brand-guideline",
    title: "Creatiwise Brand Guideline",
    subtitle: "Complete Brand Identity System",
    description:
      "A comprehensive brand guideline for Creatiwise covering brand story, mission & vision, primary & secondary logos, color palette, typography, iconography, social media templates, business cards, and outdoor advertising posters.",
    tags: ["Brand Identity", "Visual Design", "Style Guide", "Print Design"],
    category: ["Branding"],
    color: "#8b5cf6",
    icon: "🎨",
    image: "/projects/brand-guideline-1.webp",
    gallery: Array.from({ length: 19 }, (_, i) => `/projects/brand-guideline/${i + 1}.webp`),
  },
  {
    id: "natural-icecream",
    title: "Natural Ice Cream — Website Redesign",
    subtitle: "E-Commerce Website Redesign",
    description:
      "A fresh, vibrant website redesign for a natural ice cream brand, featuring an immersive hero section and a modern landing page that captures the brand's playful, artisanal identity.",
    tags: ["Website Redesign", "E-Commerce", "UI Design", "Visual Design"],
    category: ["Web"],
    color: "#f43f5e",
    icon: "🍦",
    image: "/projects/natural-icecream-1.webp",
    gallery: ["/projects/natural-icecream/2.webp"],
  },
  {
    id: "habit-tracker",
    title: "Habit Tracker",
    subtitle: "Gamified Productivity App",
    description:
      "A gamified habit-building application where users nurture a virtual pet by completing daily habits. Combines behavioral psychology with engaging game mechanics.",
    tags: ["Gamification", "Mobile App", "Behavioral Design", "Illustration"],
    category: ["Mobile"],
    color: "#ec4899",
    icon: "🐾",
    image: "/projects/habit-tracker-1.webp",
    gallery: Array.from({ length: 9 }, (_, i) => `/projects/habit-tracker/${i + 1}.webp`),
  },
  {
    id: "virtual-venue",
    title: "Virtual Venue Booking",
    subtitle: "Smart Space Reservation System",
    description:
      "An innovative booking platform that enables users to explore, compare, and reserve event venues through immersive virtual tours and smart filtering capabilities.",
    tags: ["Booking System", "3D/VR", "Product Design", "UI/UX"],
    category: ["Mobile"],
    color: "#f59e0b",
    icon: "🏛️",
    image: "/projects/virtual-venue-1.webp",
    gallery: Array.from({ length: 31 }, (_, i) => `/projects/virtual-venue/${i + 1}.webp`),
  },
  {
    id: "ai-chatbot",
    title: "AI Educational Chatbot",
    subtitle: "Intelligent Learning Assistant",
    description:
      "An AI-powered educational chatbot that provides personalized tutoring, answers questions in real-time, and adapts its teaching style based on the learner's progress.",
    tags: ["AI/ML", "EdTech", "Conversational UI", "UX Research"],
    category: ["AI", "Mobile", "Web"],
    color: "#6366f1",
    icon: "🤖",
  },
  {
    id: "export-import",
    title: "Export Import Trade System",
    subtitle: "Global Trade Management",
    description:
      "A comprehensive trade management system for import/export businesses, featuring shipment tracking, document management, compliance checks, and partner coordination.",
    tags: ["Enterprise", "Trade Tech", "Complex Systems", "Dashboard"],
    category: ["Mobile", "Web"],
    color: "#14b8a6",
    icon: "🌐",
  },
  {
    id: "ai-knowledge-admin",
    title: "AI Knowledge & Support Management System",
    subtitle: "Centralized AI Operations Dashboard",
    description:
      "A comprehensive admin platform designed to manage AI conversations, monitor user interactions, handle support escalations, and manage AI training resources through a centralized dashboard.",
    tags: ["Admin Panel", "AI Operations", "Dashboard", "Enterprise"],
    category: ["Web", "Admin Panel"],
    color: "#7c3aed",
    icon: "🧠",
  },
  {
    id: "tax-compliance-saas",
    title: "AI-Powered Tax & Compliance SaaS",
    subtitle: "Intelligent Tax Workflow Platform",
    description:
      "An AI-driven SaaS platform built for tax and compliance professionals to streamline notice analysis, workflow tracking, document management, and intelligent response generation.",
    tags: ["AI SaaS", "Fintech", "Compliance", "Workflow"],
    category: ["Mobile", "AI", "SaaS"],
    color: "#059669",
    icon: "💼",
  },
  {
    id: "legal-compliance-tools",
    title: "B2B Legal & Compliance Tools",
    subtitle: "Compliance Workflow & Advisory Platform",
    description:
      "A digital operations platform designed for legal and taxation firms to manage compliance workflows, advisory services, AI-assisted operations, and business support systems.",
    tags: ["Legal Tech", "Compliance", "B2B", "Workflow"],
    category: ["Mobile"],
    color: "#be185d",
    icon: "⚖️",
  },
  {
    id: "consumer-delivery-marketplace",
    title: "Consumer Delivery Marketplace",
    subtitle: "Subscription & Delivery Management Platform",
    description:
      "A modern consumer marketplace focused on recurring purchases, subscription management, delivery scheduling, and seamless order experiences through a mobile-first interface.",
    tags: ["Consumer App", "Marketplace", "Mobile-First", "E-Commerce"],
    category: ["Mobile", "Web"],
    color: "#f97316",
    icon: "📦",
  },
  {
    id: "delivery-partner-ops",
    title: "Delivery Partner Operations App",
    subtitle: "Delivery Workflow & Route Management Platform",
    description:
      "A delivery operations application designed for delivery partners to manage assigned orders, delivery tracking, route workflows, scheduling, and real-time order handling through a streamlined mobile-first experience.",
    tags: ["Logistics", "Mobile App", "Route Management", "Operations"],
    category: ["Mobile"],
    color: "#0891b2",
    icon: "🚚",
  },
  {
    id: "tech-park-community",
    title: "Tech Park Community Platform",
    subtitle: "Business Networking & Collaboration Ecosystem",
    description:
      "A community-driven platform designed for tech parks to help companies connect, collaborate, discover nearby businesses, share opportunities, manage demand-supply interactions, and build stronger professional ecosystems.",
    tags: ["Community", "Networking", "B2B", "Collaboration"],
    category: ["Mobile"],
    color: "#8b5cf6",
    icon: "🏢",
  },
];

export const categories = [
  "All",
  "SaaS",
  "Mobile",
  "Web",
  "Branding",
  "AI",
  "Admin Panel",
];

