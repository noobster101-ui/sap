export interface Testimonial {
  id: number;
  name: string;
  designation: string;
  content: string;
  image: string;
  star: number;
  status?: boolean; // For admin control (enabled/disabled)
  createdAt?: string;
  updatedAt?: string;
}

// For backward compatibility with existing components
export const getFallbackReviews = (): Testimonial[] => [
  {
    id: 1,
    name: "Ravi Kumar",
    designation: "SAP Fresher",
    content:
      "Excellent SAP SD training! Real-time scenarios and hands-on practice helped me get placed in 2 months. Highly recommended for MM, FICO courses too.",
    image: "/images/testimonials/auth-01.png",
    star: 5,
  },
  // ... add others if needed for offline fallback
];
