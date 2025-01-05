import {
  AnalyticsDataProps,
  InitProps,
  InitiativesProps,
  beneficiaryProps,
  foundersProps,
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

export const founders: foundersProps[] = [
  {
    id: 1,
    name: "Wisdom Adjei-Mensah",
    designation: "Founder/Executive Director",
    image: "https://res.cloudinary.com/di9xi0zod/image/upload/v1736039810/wisdom_l7djgu.webp",
  },
  {
    id: 2,
    name: "Lawrencia Adjei-Mensah",
    designation: "Co-Founder",
    image: "https://res.cloudinary.com/di9xi0zod/image/upload/v1736039860/Lawrencia_gy54ns.jpg",
  },
  {
    id: 3,
    name: "Edward Kwaku Kassah",
    designation: "Member",
    image: "https://res.cloudinary.com/di9xi0zod/image/upload/v1736039854/edward_wnywcm.webp",
  },
  {
    id: 4,
    name: "Fianu David Dzotsi",
    designation: "General Manager",
    image: "https://res.cloudinary.com/di9xi0zod/image/upload/v1736039857/david_au24z9.webp",
  },
  {
    id: 5,
    name: "Listowell Peter Krah",
    designation: "Finance Lead",
    image: "https://res.cloudinary.com/di9xi0zod/image/upload/v1736039861/Daddy_k_gxslyj.jpg",
  },
  {
    id: 6,
    name: "Mercy Adoley Quaye",
    designation: "Tech Lead",
    image: "https://res.cloudinary.com/di9xi0zod/image/upload/v1736039837/mercy_bfetgp.png",
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
    image: "https://res.cloudinary.com/di9xi0zod/image/upload/v1736039815/vivian_kixl31.jpg",
    category: "BUSINESS COACHING",
    name: "Vivian Badwoba Kwofie",
    message:
      "As the CEO of AJ Vees Enterprise, the training from WISLAW significantly improved my business. It helped me overcome startup challenges, enhance marketing, attract investors, and manage finances better. The training also taught me the importance of reinvestment and networking with other entrepreneurs, leading to business success.",
    position: " Entrepreneur, CEO of AJ Vees Enterprise",
  },
  {
    image: "https://res.cloudinary.com/di9xi0zod/image/upload/v1736039859/beneficiary_qxbrk3.jpg",
    category: " TVET",
    name: "Betty Larkor Addo",
    message:
      "Wislaw’s training has enhanced my record-keeping skills, given me a unique edge in design, enabled a steady income, and spurred my business growth.",
    position: "Entrepreneur",
  },
];

export const board: memberProps[] = [
  {
    image: "https://res.cloudinary.com/di9xi0zod/image/upload/v1736039810/wisdom_l7djgu.webp",
    name: "Wisdom Adjei-Mensah",
    position: "Founder/Executive Director",
    url: "https://www.linkedin.com/in/wisdom-adjei-mensah-chmc-33069b15/",
  },
  {
    image: "https://res.cloudinary.com/di9xi0zod/image/upload/v1736039860/Lawrencia_gy54ns.jpg",
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
    image: "https://res.cloudinary.com/di9xi0zod/image/upload/v1736039854/edward_wnywcm.webp",
    name: "Edward Kwaku Kassah",
    position: "Member",
    url: "https://www.linkedin.com/in/kennedy-anyidoho-32669723a",
  },
  {
    image: "https://res.cloudinary.com/di9xi0zod/image/upload/v1736039857/david_au24z9.webp",
    name: "Fianu David Dzotsi",
    position: "Managing Director",
    url: "https://www.linkedin.com/in/fianu-david-dzotsi-82a3601b1/",
  },
];

export const members: memberProps[] = [
  {
    image: "https://res.cloudinary.com/di9xi0zod/image/upload/v1736039837/mercy_bfetgp.png",
    name: "Mercy Adoley Quaye",
    position: "Tech Lead",
    url: "https://www.linkedin.com/in/mercy-quaye/",
  },
  {
    image: "https://res.cloudinary.com/di9xi0zod/image/upload/v1736039861/Daddy_k_gxslyj.jpg",
    name: "Listowell Peter Krah",
    position: "Finance Lead",
    url: "https://www.linkedin.com/in/kennedy-anyidoho-32669723a",
  },
  // {
  //   image: "/images/.jpg",
  //   name: "Joel Nsafoah",
  //   position: "Media Lead",
  //   url: "https://www.linkedin.com/in/joel-nsafoah-80a36b217/",
  // },
  {
    image: "https://res.cloudinary.com/di9xi0zod/image/upload/v1736039829/oswald_kclrkq.jpg",
    name: "Oswald Ayepah",
    position: "Media",
    url: "https://www.linkedin.com/in/oswald-ayepah-652828232/",
  },
  {
    image: "https://res.cloudinary.com/di9xi0zod/image/upload/v1736039840/kennedy_wsa7lm.webp",
    name: "Kennedy Anyidoho",
    position: "Volunteer",
    url: "https://www.linkedin.com/in/kennedy-anyidoho-32669723a",
  },
  {
    image: "https://res.cloudinary.com/di9xi0zod/image/upload/v1736039841/janet_pgdbmy.jpg",
    name: "Janet Frimpong",
    position: "Volunteer",
    url: "https://www.linkedin.com/in/frimpong-janet-b849a7245",
  },
];

export const initiatives: InitiativesProps[] = [
  {
    title: "Community",
    description:
      "We engage with Ghana’s Nsuta-Tarkwa communities, conducting outreach and fostering collaboration. We support through Services like health, education, and sanitation to improve locals’ life quality.",
    image: "https://res.cloudinary.com/di9xi0zod/image/upload/v1736039853/init2_d3smon.jpg",
    route: "/#education",
  },
  {
    title: "Education",
    description:
      "We are dedicated to empowering Ghana’s youth, particularly in rural areas, with quality education and skills training. We view education as a catalyst for individual potential and socio-economic growth",
    image: "https://res.cloudinary.com/di9xi0zod/image/upload/v1736039854/init1_svxthg.jpg",
    route: "/#education",
  },
  {
    title: "Entrepreneurship",
    description:
      "We support entrepreneurs and small businesses in Ghana, particularly in rural and marginalized areas. We see entrepreneurship as a driver of economic growth and social innovation, providing impactful business ideas.",
    image: "https://res.cloudinary.com/di9xi0zod/image/upload/v1736039850/init3_u1ob6n.jpg",
    route: "/#education",
  },
];

export const init: InitProps[] = [
  {
    image: "https://res.cloudinary.com/di9xi0zod/image/upload/v1736039861/digitalskills_tldrci.jpg",
    title: "Digital Skills Training For Kids",
    desctiption:
      "We offer digital skills training for kids in basic schools, where they learn the basics of computer programming with python, web development and more. Our aim is to inspire the next generation of innovators and problem-solvers who can use technology to create positive change in their communities and beyond.Our digital skills training is delivered through online platforms, and community centers, where we provide access to computers, internet, and mentors. We also organize hackathons, competitions, to showcase the projects and talents of our kids.",
  },
  {
    image: "https://res.cloudinary.com/di9xi0zod/image/upload/v1736039814/women-ent_zgaxjh.jpg",
    title: "The Women’s Entrepreneurship and Livelihoods Initiative",
    desctiption:
      "The Women’s Entrepreneurship and Livelihoods Initiative (WELI) is a project that aims to empower women and girls in Ghana through entrepreneurship and skills development. WELI provides women and girls with access to finance, business training, mentorship, networking, and market linkages. WELI also supports women and girls to develop their leadership, confidence, and self-reliance. WELI is aligned with the Sustainable Development Goals of gender equality, decent work, and economic growth.",
  },
  {
    image: "https://res.cloudinary.com/di9xi0zod/image/upload/v1736039823/womenent_czrg19.jpg",
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
