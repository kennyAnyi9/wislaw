import {
  navigationProps,
  ButtonProps,
  slideProps,
  AnalyticsDataProps,
  beneficiaryProps,
  memberProps,
  donateProps,
} from "./types";
import Dropdown from "../components/navigations/mobile-dropdown";
import Navigation from "../components/navigations/navigation-bar";
import Slide from "../components/slide-show";
import Button from "../components/buttons/button";
import localFont from "next/font/local";
import Overview from "../components/overview";
import { Analytics } from "../components/analytics";
import Beneficiaries from "../components/beneficiaries";
import Heroine from "../components/about-us/heroine";
import Intro from "../components/about-us/intro";
import Why from "../components/about-us/why";
import Mission from "../components/about-us/mission";
import Staff from "../components/about-us/staff";
import Board from "../components/about-us/board";
import Video from "../components/about-us/text-video";
import ContactForm from "../components/contact-us/form";
import Initiatives from "../components/our-inititatives/initiatives";
import Init from "../components/our-inititatives/init";
import Accordion from "../components/donations/other-ways";

export type {
  navigationProps,
  ButtonProps,
  slideProps,
  AnalyticsDataProps,
  beneficiaryProps,
  memberProps,
  donateProps,
};
export {
  Navigation,
  Dropdown,
  Slide,
  Button,
  Overview,
  Analytics,
  Beneficiaries,
  Heroine,
  Intro,
  Why,
  Mission,
  Staff,
  Board,
  Video,
  ContactForm,
  Initiatives,
  Init,
  Accordion,
};

export const poppins = localFont({
  src: "../../public/fonts/Poppins/Poppins-Black.ttf",
  variable: "--font-poppins",
});
export const fira = localFont({
  src: "../../public/fonts/Fira_Sans/FiraSans-ExtraBold.ttf",
  variable: "--font-fira",
});

export const lato = localFont({
  src: "../../public/fonts/Lato/Lato-Black.ttf",
  variable: "--font-fira",
});

export const hanken = localFont({
  src: "../../public/fonts/Hanken_Grotesk/HankenGrotesk-VariableFont_wght.ttf",
  variable: "--font-hanken",
});

export const montserrat = localFont({
  src: "../../public/fonts/Montserrat/Montserrat-VariableFont_wght.ttf",
  variable: "--font-montserrat",
});

export const redhat = localFont({
  src: "../../public/fonts/Red_Hat_Display/RedHatDisplay-VariableFont_wght.ttf",
  variable: "--font-redhat",
});

export const video = localFont({
  src: "../../public/fonts/BebasNeue-Regular.ttf",
  variable: "--font-redhat",
});
