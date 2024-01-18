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
import Heroine from "../components/heroine";
import Intro from "../components/intro";
import Why from "../components/why";
import Mission from "../components/mission";
import Staff from "../components/about-us/staff";
import Board from "../components/board";
import Video from "../components/text-video";
import ContactForm from "../components/contact-us/form";
import Initiatives from "../components/our-inititatives/initiatives";
import Init from "../components/our-inititatives/init";
import { Footer } from "@/components/navigations/footer";

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
  Footer,
};

export const hanken = localFont({
  src: "../public/fonts/Hanken_Grotesk/HankenGrotesk-VariableFont_wght.ttf",
  variable: "--font-hanken",
});

export const montserrat = localFont({
  src: "../public/fonts/Montserrat/Montserrat-VariableFont_wght.ttf",
  variable: "--font-montserrat",
});

export const video = localFont({
  src: "../public/fonts/BebasNeue-Regular.ttf",
  variable: "--font-video",
});
