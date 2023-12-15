import {
  AnalyticsDataProps,
  beneficiaryProps,
  navigationProps,
  slideProps,
} from "@/app/lib/types";

export const links: navigationProps[] = [
  { href: "/", route: "Home" },
  { href: "/about", route: "About" },
  { href: "/contact", route: "Contact" },
  { href: "/innitiatives", route: "Initiatives" },
];

export const slideImages: slideProps[] = [
  // {
  //   url: '/images/dark.jpg',

  //   caption1: ' Level Up Your   ',
  //   caption2: '   Coding ',
  //   caption3: ' Skills with',
  //   caption4: 'Our Web Programming',
  //   caption5: 'Course',
  //   button: 'Enroll Now',
  //   href: '/digital',
  // },
  {
    url: "/images/first_slide.jpg",

    caption1:
      " Helping to empower kids with a tech-oriented approach to problem-solving",
    caption2: "  ",
    caption3: "  ",
    caption4: "",
    caption5: "",
    button: "Learn more",
    href: "/innitiatives",
  },
  {
    url: "/images/v1.jpg",
    caption1:
      "Empowering The Youth Through Technical and Vocational Education Training ",
    caption2: "",
    caption3: "",
    caption4: " ",
    caption5: "  ",
    button: "Learn More",
    href: "/innitiatives",
  },
  {
    url: "/images/tech1.jpg",

    caption1:
      " Empowering the youth with skills to thrive in the 21st century ",
    caption2: "   ",
    caption3: "  ",
    caption4: " ",
    caption5: "",
    button: "Learn more",
    href: "/innitiatives",
  },
  {
    url: "/images/ent1.jpg",

    caption1:
      " Helping entrepreneurs apply innovation and technology to their businesses ",
    caption2: "    ",
    caption3: "  ",
    caption4: " ",
    caption5: "",
    button: "Learn more",
    href: "/innitiatives",
  },
];

export const AnalyticsData: AnalyticsDataProps[] = [
  {
    value: 100,
    label: "Enterpreneurs Surpported",
  },
  {
    value: 20,
    label: "Trainings Organized",
  },
  {
    value: 75,
    label: "Community Events",
  },
  {
    value: 90,
    label: "Student Beneficiaries",
  },
];

export const beneficiaries: beneficiaryProps[] = [
  {
    image: "/images/dark.jpg",
    category: " TVET",
    name: "John  Doe",
    message:
      "Thanks to the training provided by Wislaw, I have acquired the ability to maintain accurate records, a skill that has proven immensely beneficial in keeping pace with my workload. As a designer, this training has provided me with a distinct edge, preventing me from simply following the crowd. This advantage has been instrumental in not only setting myself apart but also enabling me to allocate a salary for myself regularly. As a result of this training, I have  witnessed substantial growth in my business. ",
    position: "Entrepreneur",
  },

  {
    image: "/images/ent1.jpg",
    category: "BUSINESS COACHING",
    name: "Vivian Badwoba Kwofie",
    message:
      "Hello, I am the CEO of AJ Vees Enterprise(Shitor production). The training I received from WISLAW has positively impacted my business. Despite joining the training late, I quickly caught up and learned valuable skills. Before the training, I faced challenges as a startup, but the guidance helped me market my business, attract investors, and improve financial management. Additionally, I learned to reinvest in my business and expanded my network with fellow entrepreneurs. The training has been instrumental in transforming my business into a successful venture..",
    position: " Entrepreneur, CEO of AJ Vees Enterprise",
  },
];
