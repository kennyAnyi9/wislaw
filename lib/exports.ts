import {
  navigationProps,
  ButtonProps,
  AnalyticsDataProps,
  beneficiaryProps,
  memberProps,
  donateProps,
} from "./types";

import Navigation from "../components/navigations/navigation-bar";

import { Analytics } from "../components/analytics";
import Beneficiaries from "../components/beneficiaries";
import Why from "../components/why";
import Staff from "../components/about-us/staff";
import Board from "../components/board";
import ContactForm from "../components/contact-us/form";
import Initiatives from "../components/our-inititatives/initiatives";
import Init from "../components/our-inititatives/init";
import { Footer } from "@/components/navigations/footer";
import Hero from "@/components/about-us/hero";
import { Slide } from "@/components/slide-show";
import CallToDonate from "@/components/landing/call-to-donate";

export type {
  navigationProps,
  ButtonProps,
  AnalyticsDataProps,
  beneficiaryProps,
  memberProps,
  donateProps,
};
export {
  Navigation,
  Slide,
  Analytics,
  Beneficiaries,
  Why,
  Staff,
  Board,
  ContactForm,
  Initiatives,
  Init,
  Footer,
  Hero,
  CallToDonate,
};
