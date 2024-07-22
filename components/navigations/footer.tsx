import { LocateIcon, MailIcon, PhoneIcon } from "lucide-react";
import Link from "next/link";
import { forwardRef, type SVGProps } from "react";

export const Footer = () => {
  return (
    <>
      <footer className=" bg-gray-950 text-gray-200 z-20 py-12 sm:py-16">
        <div className="container mx-auto px-4  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ">
          <div className="flex flex-col ">
            <div className="flex items-center mb-4">
              <span className="text-2xl font-bold">WISLAW</span>
            </div>
            <p className="body_text mb-4">
              Wislaw Education and Support Fund, founded in 2007 is a
              development and social enterprise-oriented organisation based in
              Nsuta-Tarkwa, in the Western region of Ghana.
            </p>
          </div>
          <div className="w-fit">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    className="hover:text-blue-500 body_text"
                    href={link.href}
                    aria-label="footer links"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-fit">
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-2">
              {contactInfo.map((info) => (
                <div key={info.label} className="body_text flex flex-row">
                  <info.icon className="size-7 mr-2" />
                  <span>{info.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="w-fit">
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <Link
                  key={link.href}
                  className="body_text"
                  href={link.href}
                  aria-label="social media links"
                >
                  <link.icon className="size-7" />
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-8 text-center body_text">
          &copy; Wislaw {new Date().getFullYear()} . All rights reserved
        </div>
      </footer>
    </>
  );
};
export const FacebookIcon = forwardRef<SVGSVGElement, SVGProps<SVGSVGElement>>(
  ({ ...props }) => {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className=""
      >
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        <span className="sr-only">Facebook icon</span>
      </svg>
    );
  }
);

export const InstagramIcon = forwardRef<SVGSVGElement, SVGProps<SVGSVGElement>>(
  ({ ...props }) => {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className=""
      >
        <span className="sr-only">Instagram icon</span>
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
      </svg>
    );
  }
);

export const LinkedinIcon = forwardRef<SVGSVGElement, SVGProps<SVGSVGElement>>(
  ({ ...props }) => {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className=""
      >
        <span className="sr-only">Linkedin icon</span>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect width="4" height="12" x="2" y="9" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    );
  }
);

export const TwitterIcon = forwardRef<SVGSVGElement, SVGProps<SVGSVGElement>>(
  ({ ...props }) => {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className=""
      >
        <span className="sr-only">Twitter icon</span>
        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
      </svg>
    );
  }
);

interface LinkItem {
  href: string;
  label: string;
}

const links: LinkItem[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  // { href: "/news", label: "News" },
  { href: "/donate", label: "Donate" },
];

export interface ContactInfo {
  icon: React.ComponentType<any>;
  label: string;
}

const contactInfo: ContactInfo[] = [
  { icon: PhoneIcon, label: "+233 506 20 1255" },
  { icon: MailIcon, label: "info@wislawedufund.org" },
  { icon: LocateIcon, label: "Nsuta-Tarkwa, W/R Ghana" },
];

export interface SocialLinkProps {
  icon: React.ComponentType<any>;
  href: string;
}

export const socialLinks: SocialLinkProps[] = [
  { icon: TwitterIcon, href: "https://twitter.com/Wislaw_edu_fund" },
  { icon: FacebookIcon, href: "https://www.facebook.com/wislawedufund/" },
  {
    icon: LinkedinIcon,
    href: "https://www.linkedin.com/company/wislaw-education-and-support-fund/",
  },
  { icon: InstagramIcon, href: "#https://www.instagram.com/wislaw_edu_fund/" },
];
