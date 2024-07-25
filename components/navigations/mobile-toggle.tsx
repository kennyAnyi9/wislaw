"use client";

import { Sheet, SheetContent } from "@/components/ui/sheet";
import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { socialLinks } from "./footer";

// Define the type for a navigation link
interface NavigationLink {
  href: string;
  text: string;
}

// Define the type for the hamburger menu props
interface HamburgerMenuProps {
  isMenuOpen: boolean;
  onToggleMenuOpen: () => void;
}

//raplace this with your menu items and links
const menuNavigationLinks: NavigationLink[] = [
  { href: "/", text: "Home" },
  { href: "/about", text: "About" },
  { href: "/contact", text: "Contact" },

  { href: "/robotics", text: "Robotics" },
  { href: "/donate", text: "Donate" },
  { href: "/initiatives", text: "Initiatives" },
];

// hamburger button
export const Hamburger: React.FC<HamburgerMenuProps> = ({
  isMenuOpen,
  onToggleMenuOpen,
}) => {
  return (
    <div className="flex lg:hidden">
      <Button
        variant="ghost"
        className="z-20 w-10 border-transparent p-0"
        onClick={onToggleMenuOpen}
      >
        {isMenuOpen ? null : <MenuIcon />}
      </Button>
    </div>
  );
};

// hamburger menu

export const HamburgerMenu: React.FC<HamburgerMenuProps> = ({
  isMenuOpen,
  onToggleMenuOpen,
}) => {
  const isMotionReduced = useReducedMotion();

  const handleLinkClick = () => {
    onToggleMenuOpen();
  };

  return (
    <Sheet open={isMenuOpen} onOpenChange={onToggleMenuOpen}>
      <SheetContent className="w-full" side={"top"}>
        <Link href="/" onClick={handleLinkClick}>
          <h1 className="text-lg font-bold inline-flex justify-center items-center gap-2  text-gray-800 dark:text-gray-200">
            Menu
          </h1>
        </Link>
        <motion.div
          className="flex flex-col items-start gap-y-4"
          initial="initial"
          animate="animate"
          transition={{
            staggerChildren: 0.03,
          }}
        >
          <div className="flex flex-col gap-2 mt-10">
            {menuNavigationLinks.map(({ href, text }) => (
              <motion.div
                key={href}
                variants={{
                  initial: {
                    opacity: 0,
                    x: isMotionReduced ? 0 : 100,
                  },
                  animate: {
                    opacity: 1,
                    x: 0,
                    transition: {
                      duration: 0.5,
                      ease: "backInOut",
                    },
                  },
                }}
              >
                <Link
                  key={href}
                  className="text-lg font-normal text-foreground hover:text-foreground/80"
                  href={href}
                  onClick={() => handleLinkClick()}

                  // target={target}
                >
                  {text}
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
        <div className="flex justify-between gap-2 mt-10">
          <ul className="flex flex-wrap gap-2">
            {socialLinks.map((item) => (
              <li
                key={item.href}
                className="rounded-md p-2 border  border-border"
              >
                <item.icon size="4" />
              </li>
            ))}
          </ul>
          {/* <LoginButton variant="outline" /> */}
        </div>
      </SheetContent>
    </Sheet>
  );
};

// Define the MenuIcon component
const MenuIcon: React.FC = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="size-6 text-orange-500"
    >
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );
};
