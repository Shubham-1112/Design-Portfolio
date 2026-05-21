export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  category: string;
  color: string;
  icon: string;
  image?: string;
  gallery?: string[];
}

export const projects: Project[] = [
  {
    id: "cpaas-platform",
    title: "CPaaS Communication Platform",
    subtitle: "Cloud Communication Suite",
    description:
      "A robust Communications Platform as a Service enabling businesses to integrate voice, video, messaging, and authentication APIs into their applications seamlessly.",
    tags: ["SaaS Design", "API Platform", "Design System", "Enterprise"],
    category: "SaaS",
    color: "#06b6d4",
    icon: "📡",
    image: "/projects/cpaas-1.webp",
    gallery: ["/projects/cpaas/1.webp", "/projects/cpaas/2.jpg", "/projects/cpaas/3.webp"],
  },
  {
    id: "dataflow-pro",
    title: "DataFlow Pro",
    subtitle: "Enterprise Analytics Dashboard",
    description:
      "A comprehensive analytics platform designed for enterprise teams to visualize complex data sets, track KPIs, and generate actionable insights with real-time monitoring.",
    tags: ["SaaS Design", "Dashboard", "Data Visualization", "Design System"],
    category: "SaaS",
    color: "#0ea5e9",
    icon: "📊",
    image: "/projects/dataflow-1.webp",
    gallery: Array.from({ length: 25 }, (_, i) => `/projects/dataflow/${i + 1}.webp`),
  },
  {
    id: "healthcare-fitness",
    title: "Healthcare & Fitness App",
    subtitle: "Health Monitoring Platform",
    description:
      "A mobile-first health and fitness application that tracks vitals, workout routines, nutrition, and provides personalized wellness recommendations powered by user data.",
    tags: ["Mobile App", "Healthcare", "UX Research", "Prototyping"],
    category: "Mobile",
    color: "#10b981",
    icon: "🏥",
    image: "/projects/healthcare-1.webp",
    gallery: Array.from({ length: 11 }, (_, i) => `/projects/healthcare/${i + 1}.webp`),
  },
  {
    id: "habit-tracker",
    title: "Habit Tracker with Virtual Pet",
    subtitle: "Gamified Productivity App",
    description:
      "A gamified habit-building application where users nurture a virtual pet by completing daily habits. Combines behavioral psychology with engaging game mechanics.",
    tags: ["Gamification", "Mobile App", "Behavioral Design", "Illustration"],
    category: "Mobile",
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
    category: "Web",
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
    category: "AI",
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
    category: "Enterprise",
    color: "#14b8a6",
    icon: "🌐",
  },
];

export const categories = [
  "All",
  "SaaS",
  "Mobile",
  "Web",
  "AI",
  "Enterprise",
];

