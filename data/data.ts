import { navigationProps, slideProps } from "@/app/lib/types";

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
