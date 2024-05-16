import {
  AnalyticsDataProps,
  InitProps,
  InitiativesProps,
  beneficiaryProps,
  donateProps,
  memberProps,
  missionProps,
  navigationProps,
  slideProps,
  whyProps,
} from "@/lib/types";

export const links: navigationProps[] = [
  { href: "/", route: "Home" },
  { href: "/about", route: "About" },
  { href: "/innitiatives", route: "Initiatives" },
  { href: "/contact", route: "Contact" },
  { href: "/news", route: "News" },
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

export const why: whyProps[] = [
  {
    title: "SDG 4-Quality Education",
    description:
      "We seek to achieve this by equipping individuals with the technological training and career guidance they need to succeed in the 21st Century",
    path1: "M22 10v6M2 10l10-5 10 5-10 5z",
    path2: "M6 12v5c3 3 9 3 12 0v-5",
    path3: "",
  },
  {
    title: "SDG1-No Poverty",
    description:
      "We seek to achieve this through the alternate livelihoods by equipping individuals with various livelihood skills training to enable them to cater for their families.",
    path1:
      "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",
    path2:
      "M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08v0c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66",
    path3: "m15 18-2-2",
  },
  {
    title: "Gender Equality (5)",
    description:
      " By organising training activities targeted at developing women and girls in the community, we hope to bridge the gender gap.",
    path1:
      "M8.8 20v-4.1l1.9.2a2.3 2.3 0 0 0 2.164-2.1V8.3A5.37 5.37 0 0 0 2 8.25c0 2.8.656 3.054 1 4.55a5.77 5.77 0 0 1 .029 2.758L2 20",
    path2: "M19.8 17.8a7.5 7.5 0 0 0 .003-10.603",
    path3: "M17 15a3.5 3.5 0 0 0-.025-4.975",
  },
  {
    title: "SDG 8 -Decent Work and Economic Growth",
    description:
      "We seek to achieve this by inculcating an entrepreneurial mindset in the youth and providing support for start-ups that have the potential of supporting economic growth",
    path1:
      "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",
    path2: "M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8",
    path3: "M12 18V6",
  },
];

export const mission: missionProps[] = [
  {
    title: "Our Mission",
    description:
      "To be a leading organisation in the creation of opportunities for Technology and Innovation for Ghana’s sustainable development.",
    path1: "M12 13V2l8 4-8 4",
    path2: "M20.55 10.23A9 9 0 1 1 8 4.94",
    path3: "M8 10a5 5 0 1 0 8.9 2.02",
    cx: "",
    cy: "",
    radius: "",
  },
  {
    title: "Our Vision",
    description:
      "To raise high-potential Startups, SMEs and Entrepreneurs that will inspire economic growth and social development in Ghana through Technology and innovation.",
    path1: "M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",
    path2: "M6 12v5c3 3 9 3 12 0v-5",
    path3: "",
    cx: "12",
    cy: "12",
    radius: "3",
  },
  {
    title: "Our Core Values",
    description: "Innovation, Discipline, Team Work",
    path1: "M6 3h12l4 6-10 13L2 9Z",
    path2: "M11 3 8 9l4 13 4-13-3-6",
    path3: "M2 9h20",
    cx: "",
    cy: "",
    radius: "",
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
    position: "Secretary",
    url: "https://www.linkedin.com/in/fianu-david-dzotsi-82a3601b1/",
  },
];

export const members: memberProps[] = [
  {
    image: "/images/david.webp",
    name: "Fianu David Dzotsi",
    position: "Manager",
    url: "https://www.linkedin.com/in/fianu-david-dzotsi-82a3601b1/",
  },
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
