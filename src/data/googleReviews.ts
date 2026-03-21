// Mock Google Reviews (4-5 stars only) - replace with live API when key available
import { Testimonial } from "../types/testimonial";

export const googleReviews: Testimonial[] = [
  {
    id: 1,
    name: "Ravi Kumar",
    designation: "SAP Fresher",
    content:
      "Excellent SAP SD training! Real-time scenarios and hands-on practice helped me get placed in 2 months. Highly recommended for MM, FICO courses too.",
    image: "/images/testimonials/auth-01.png",
    star: 5,
  },
  {
    id: 2,
    name: "Priya Sharma",
    designation: "Working Professional",
    content:
      "Completed SAP MM course. Trainer has 20+ years experience, very practical approach. Flexible timings perfect for working professionals.",
    image: "/images/testimonials/auth-02.png",
    star: 5,
  },
  {
    id: 3,
    name: "Arun Reddy",
    designation: "SAP Consultant",
    content:
      "S/4HANA training was excellent. Current project scenarios and interview preparation helped me upgrade from ECC to S/4HANA successfully.",
    image: "/images/testimonials/auth-03.png",
    star: 5,
  },
  {
    id: 4,
    name: "Sita Devi",
    designation: "B.Tech Graduate",
    content:
      "Good ABAP training with focus on HANA and Fiori. Mock interviews and resume support really helped during placement.",
    image: "/images/testimonials/auth-01.png",
    star: 4,
  },
];

export const getFallbackReviews = () =>
  googleReviews.filter((review) => review.star >= 4);

export const getGoogleReviews = getFallbackReviews; // backward compat
