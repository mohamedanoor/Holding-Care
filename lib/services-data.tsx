import { type ReactNode } from "react";

export interface Service {
  id: number;
  title: string;
  summary: string;
  description: string;
  details: string[];
  icon: ReactNode;
}

const iconProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  strokeWidth: 1.5,
};

export const services: Service[] = [
  {
    id: 1,
    title: "Personal Support Specialist (PSS)",
    summary:
      "Compassionate one-on-one care and support for individuals with disabilities or chronic conditions — right in the comfort of home.",
    description:
      "Our Personal Support Specialists offer a wide range of personalized services tailored to meet the unique needs of each individual. From assistance with activities of daily living to emotional support, our PSS professionals are here to provide the compassionate care you deserve.",
    details: [
      "Bathing and personal hygiene",
      "Dressing and grooming",
      "Mobility and transfers",
      "Meal preparation",
      "Medication reminders",
      "Emotional and social support",
    ],
    icon: (
      <svg {...iconProps}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Respite Care",
    summary:
      "Temporary relief for family caregivers — so you can rest and recharge while your loved one continues to receive quality care.",
    description:
      "We understand that caregiving can be demanding, both physically and emotionally. That's why we offer respite care services to provide temporary relief for family caregivers, allowing them to take a break while ensuring their loved ones continue to receive the care they need.",
    details: [
      "Short-term coverage",
      "Flexible scheduling",
      "Seamless coordination with family",
      "Consistent, familiar care routines",
      "Peace of mind for the whole family",
    ],
    icon: (
      <svg {...iconProps}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Companionship & Emotional Support",
    summary:
      "Meaningful social connection and emotional encouragement to enhance the overall quality of life for our clients.",
    description:
      "We understand the importance of social interaction and emotional well-being. Our PSS professionals not only assist with practical tasks but also provide companionship and emotional support, fostering meaningful relationships and enhancing overall quality of life.",
    details: [
      "Friendly conversation and engagement",
      "Shared activities and hobbies",
      "Community outings and appointments",
      "Emotional encouragement",
      "Connection with family and friends",
    ],
    icon: (
      <svg {...iconProps}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
  },
  {
    id: 4,
    title: "Household Assistance",
    summary:
      "Light household support to keep your home clean, safe, and comfortable — so daily life stays manageable.",
    description:
      "In addition to personal care, our PSS professionals can assist with light household tasks to ensure a clean and comfortable living environment. Whether it's light housekeeping, laundry, or grocery shopping, we're here to help with day-to-day tasks that may become challenging due to disability or illness.",
    details: [
      "Light housekeeping and tidying",
      "Laundry and linen changes",
      "Grocery shopping and errands",
      "Meal planning and prep",
      "Home safety monitoring",
    ],
    icon: (
      <svg {...iconProps}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>
    ),
  },
];
