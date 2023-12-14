import { navigationProps, ButtonProps, slideProps } from "./types";
import Dropdown from "../components/navigations/mobile-dropdown";
import Navigation from "../components/navigations/navigation-bar";
import Slide from "../components/slide-show";
import Button from "../components/buttons/button";
import localFont from "next/font/local";

export type { navigationProps, ButtonProps, slideProps };
export { Navigation, Dropdown, Slide, Button };

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
