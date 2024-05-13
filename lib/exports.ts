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

import Button from "../components/buttons/button";
import Overview from "../components/overview";
import { Analytics } from "../components/analytics";
import Beneficiaries from "../components/beneficiaries";
import Heroine from "../components/heroine";
import Intro from "../components/intro";
import Why from "../components/why";
import Mission from "../components/mission";
import Staff from "../components/about-us/staff";
import Board from "../components/board";
import ContactForm from "../components/contact-us/form";
import Initiatives from "../components/our-inititatives/initiatives";
import Init from "../components/our-inititatives/init";
import { Footer } from "@/components/navigations/footer";
import Hero from "@/components/about-us/hero";
import { Slide } from "@/components/slide-show";
import CallToDonate from "@/components/landing/call-to-donate";
import StayConnected from "@/components/landing/stay-connected";
import WeHaveDonated from "@/components/landing/we-have-donated";
import { CallToAction } from "@/components/call-to-action";
import { Globe } from "@/components/landing/globe";

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
  ContactForm,
  Initiatives,
  Init,
  Footer,
  Hero,
  CallToAction,
  CallToDonate,
  WeHaveDonated,
  StayConnected,
  Globe,
};
