// components/testimonials/data.ts
export interface Testimonial {
  id: number;
  message: string;
  name: string;
  location: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    message: "This platform has completely transformed how I manage my finances. The smart savings feature helped me save ₦500,000 in just 6 months!",
    name: "Chinedu Okoro",
    location: "Lagos, Nigeria"
  },
  {
    id: 2,
    message: "The loan process was incredibly smooth and fast. I got approved within 24 hours and the funds were in my account the same day. Highly recommended!",
    name: "Amina Yusuf",
    location: "Abuja, Nigeria"
  },
  {
    id: 3,
    message: "As a small business owner, the budgeting tools have been invaluable. I can now track my expenses and plan for growth effectively.",
    name: "Emeka Nwankwo",
    location: "Port Harcourt, Nigeria"
  },
  {
    id: 4,
    message: "The security features give me peace of mind. I know my money and personal information are safe with their advanced protection systems.",
    name: "Funke Adebayo",
    location: "Ibadan, Nigeria"
  },
  {
    id: 5,
    message: "Fast payments and seamless transfers make this my go-to banking app. The user experience is exceptional compared to traditional banks.",
    name: "David Chukwu",
    location: "Enugu, Nigeria"
  },
  {
    id: 6,
    message: "The 24/7 customer support is amazing! Whenever I have questions, I get immediate help. This level of service is unmatched.",
    name: "Grace Okafor",
    location: "Kano, Nigeria"
  },
  {
    id: 7,
    message: "I love how the platform helps me automatically save while spending. It's like having a personal financial advisor in my pocket!",
    name: "Bola Ahmed",
    location: "Kaduna, Nigeria"
  }
];