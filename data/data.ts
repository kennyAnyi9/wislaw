import {
  AnalyticsDataProps,
  InitProps,
  InitiativesProps,
  beneficiaryProps,
  donateProps,
  memberProps,
  navigationProps,
} from "@/lib/types";

export const links: navigationProps[] = [
  { href: "/", route: "Home" },
  { href: "/about", route: "About" },
  { href: "/initiatives", route: "Initiatives" },
  { href: "/contact", route: "Contact" },
  // { href: "/news", route: "News" },
];

// export const slideImages: slideProps[] = [
//   // {
//   //   url: '/images/dark.jpg',

//   //   caption1: ' Level Up Your   ',
//   //   caption2: '   Coding ',
//   //   caption3: ' Skills with',
//   //   caption4: 'Our Web Programming',
//   //   caption5: 'Course',
//   //   button: 'Enroll Now',
//   //   href: '/digital',
//   // },
//   {
//     url: "/images/first_slide.jpg",

//     caption1:
//       " Helping to empower kids with a tech-oriented approach to problem-solving",
//     caption2: "  ",
//     caption3: "  ",
//     caption4: "",
//     caption5: "",
//     button: "Learn more",
//     href: "/innitiatives",
//   },
//   {
//     url: "/images/v1.jpg",
//     caption1:
//       "Empowering The Youth Through Technical and Vocational Education Training ",
//     caption2: "",
//     caption3: "",
//     caption4: " ",
//     caption5: "  ",
//     button: "Learn More",
//     href: "/innitiatives",
//   },
//   {
//     url: "/images/new-slide.jpg",

//     caption1:
//       " Empowering the youth with skills to thrive in the 21st century ",
//     caption2: "   ",
//     caption3: "  ",
//     caption4: " ",
//     caption5: "",
//     button: "Learn more",
//     href: "/innitiatives",
//   },
//   {
//     url: "/images/ent1.jpg",

//     caption1:
//       " Helping entrepreneurs apply innovation and technology to their businesses ",
//     caption2: "    ",
//     caption3: "  ",
//     caption4: " ",
//     caption5: "",
//     button: "Learn more",
//     href: "/innitiatives",
//   },
// ];

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
    image: "/images/vivian.jpg",
    category: "BUSINESS COACHING",
    name: "Vivian Badwoba Kwofie",
    message:
      "As the CEO of AJ Vees Enterprise, the training from WISLAW significantly improved my business. It helped me overcome startup challenges, enhance marketing, attract investors, and manage finances better. The training also taught me the importance of reinvestment and networking with other entrepreneurs, leading to business success.",
    position: " Entrepreneur, CEO of AJ Vees Enterprise",
  },
  {
    image: "/images/beneficiary.jpg",
    category: " TVET",
    name: "Betty Larkor Addo",
    message:
      "Wislaw’s training has enhanced my record-keeping skills, given me a unique edge in design, enabled a steady income, and spurred my business growth.",
    position: "Entrepreneur",
  },
];

export const board: memberProps[] = [
  {
    image: "/images/wisdom.webp",
    name: "Wisdom Adjei-Mensah",
    position: "Founder/Executive Director",
    url: "https://www.linkedin.com/in/wisdom-adjei-mensah-chmc-33069b15/",
  },
  {
    image: "/images/Lawrencia.jpg",
    name: "Lawrencia Adjei-Mensah",
    position: "Co-Founder",
    url: "https://www.linkedin.com/in/kennedy-anyidoho-32669723a",
  },
  // {
  //   image: "/images/wisdom.webp",
  //   name: "Benjamin Dzidular Gamey",
  //   position: "Member",
  //   url: "https://www.linkedin.com/in/benjamin-gamey-77031b9b",
  // },
  {
    image: "/images/edward.webp",
    name: "Edward Kwaku Kassah",
    position: "Member",
    url: "https://www.linkedin.com/in/kennedy-anyidoho-32669723a",
  },
  {
    image: "/images/david.webp",
    name: "Fianu David Dzotsi",
    position: "Managing Director",
    url: "https://www.linkedin.com/in/fianu-david-dzotsi-82a3601b1/",
  },
];

export const members: memberProps[] = [
  {
    image: "/images/mercy.png",
    name: "Mercy Adoley Quaye",
    position: "Tech Lead",
    url: "https://www.linkedin.com/in/mercy-quaye/",
  },
  {
    image: "/images/Daddy_k.jpg",
    name: "Listowell Peter Krah",
    position: "Finance Lead",
    url: "https://www.linkedin.com/in/kennedy-anyidoho-32669723a",
  },
  // {
  //   image: "/images/wisdom.webp",
  //   name: "Joel Nsafoah",
  //   position: "Media Lead",
  //   url: "https://www.linkedin.com/in/joel-nsafoah-80a36b217/",
  // },
  // {
  //   image: "/images/wisdom.webp",
  //   name: "Oswald Ayepah",
  //   position: "Media",
  //   url: "https://www.linkedin.com/in/oswald-ayepah-652828232/",
  // },
  {
    image: "/images/kennedy.webp",
    name: "Kennedy Anyidoho",
    position: "Volunteer",
    url: "https://www.linkedin.com/in/kennedy-anyidoho-32669723a",
  },
  // {
  //   image: "/images/wisdom.webp",
  //   name: "Janet Frimpong",
  //   position: "Volunteer",
  //   url: "https://www.linkedin.com/in/frimpong-janet-b849a7245",
  // },
];

export const initiatives: InitiativesProps[] = [
  {
    title: "Community",
    description:
      "We engage with Ghana’s Nsuta-Tarkwa communities, conducting outreach and fostering collaboration. We support through Services like health, education, and sanitation to improve locals’ life quality.",
    image: "/images/init2.jpg",
    route: "/#education",
  },
  {
    title: "Education",
    description:
      "We are dedicated to empowering Ghana’s youth, particularly in rural areas, with quality education and skills training. We view education as a catalyst for individual potential and socio-economic growth",
    image: "/images/init1.jpg",
    route: "/#education",
  },
  {
    title: "Entrepreneurship",
    description:
      "We support entrepreneurs and small businesses in Ghana, particularly in rural and marginalized areas. We see entrepreneurship as a driver of economic growth and social innovation, providing impactful business ideas.",
    image: "/images/init3.jpg",
    route: "/#education",
  },
];

export const init: InitProps[] = [
  {
    image: "/images/digitalskills.jpg",
    title: "Digital Skills Training For Kids",
    desctiption:
      "We offer digital skills training for kids in basic schools, where they learn the basics of computer programming with python, web development and more. Our aim is to inspire the next generation of innovators and problem-solvers who can use technology to create positive change in their communities and beyond.Our digital skills training is delivered through online platforms, and community centers, where we provide access to computers, internet, and mentors. We also organize hackathons, competitions, to showcase the projects and talents of our kids.",
  },
  {
    image: "/images/women-ent.jpg",
    title: "The Women’s Entrepreneurship and Livelihoods Initiative",
    desctiption:
      "The Women’s Entrepreneurship and Livelihoods Initiative (WELI) is a project that aims to empower women and girls in Ghana through entrepreneurship and skills development. WELI provides women and girls with access to finance, business training, mentorship, networking, and market linkages. WELI also supports women and girls to develop their leadership, confidence, and self-reliance. WELI is aligned with the Sustainable Development Goals of gender equality, decent work, and economic growth.",
  },
  {
    image: "/images/womenent.jpg",
    title: "The Women’s Entrepreneurship and Livelihoods Initiative",
    desctiption:
      "The Women’s Entrepreneurship and Livelihoods Initiative (WELI) is part of our efforts to empower women and girls in Ghana through entrepreneurship and skills development. WELI provides women and girls with access to finance, business training, mentorship, networking, and market linkages. WELI also supports women and girls to develop their leadership, confidence, and self-reliance. WELI is aligned with the Sustainable Development Goals of gender equality, decent work, and economic growth.",
  },
  {
    image: "/images/community8.png",
    title: "Community Economic & Livelihoods(CEL) Skills Training",
    desctiption:
      "CEL skils training is a program that aims to empower the local people in selected communities with the skills and resources they need to improve their economic and social well-being. The program is part of Wislaw’s vision to create opportunities for Ghana’s sustainable development through technology and innovation by adopting a holistic and inclusive approach that considers the needs, aspirations, and potentials of the participants. By providing training in various areas such as digital literacy, entrepreneurship, financial literacy, agribusiness, and vocational skills through funding, mentorship, networking, and market linkages for the participants, We hope to inspire and support the participants to become agents of change in their communities and contribute to the national development agenda.",
  },
];

export const donate: donateProps[] = [
  {
    id: 1,
    title: "Donate by check in Ghana",
    description:
      "check in must be made payable to wislaw eduction and support fund. Mail your check to:",
    details: "PO Box HP NaN",
  },
  {
    id: 2,
    title: "Donate by bank transfer in Ghana",
    description: "",
    details: "details 2",
  },
  {
    id: 3,
    title: "Donate by gifting",
    description: "",
    details: " details three",
  },
];
