import Link from "next/link";
import Image from "next/image";
export const Footer = () => {
  return (
    <>
      <footer className="bg-zinc-800 flex flex-col border-t mt-5 border-gray-200 ">
        <div
          className="flex max-md:flex-col
        flex-wrap justify-between gap-5 sm:px-16 px-6 py-10"
        >
          <div
            className="flex flex-col justify-start  
            items-start gap-6"
          >
            <h1 className="description_1_footer">Wesfund</h1>
            <div className=" lg:mb-20 flex w-36 flex-row justify-around text-white lg:relative ">
              <Link href="https://twitter.com/Wislaw_edu_fund">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 1200 1227"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mt-1"
                >
                  <path
                    d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z"
                    fill="white"
                  />
                </svg>
              </Link>
              <Link href="https://www.linkedin.com/company/wislaw-education-and-support-fund/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-white"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </Link>
              <Link href="https://www.facebook.com/wislawedufund/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#ffffff"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-facebook"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </Link>

              <Link href="https://www.instagram.com/wislaw_edu_fund/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#ffffff"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-instagram"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </Link>
            </div>
            <div className="flex flex-col md:flex-row gap-5">
              <h1 className="text-white font-semi-bold opacity-90">
                Telephone: +233 506 20 1255
              </h1>
              <h1 className="text-white font-semi-bold opacity-90">
                Email: info@wislawedufund.org
              </h1>
            </div>
          </div>
          <section className="flex flex-col gap-10 lg:gap-16 mt-5 justify-between">
            <div className="grid grid-cols-4  lg:w-full">
              <Link href="/" className="text-white font-normal opacity-90">
                Home
              </Link>
              <Link href="/" className="text-white font-normal opacity-90">
                About
              </Link>

              <Link href="/" className="text-white font-normal opacity-90">
                Donate
              </Link>
              <Link href="/" className="text-white font-normal opacity-90">
                Privacy
              </Link>
            </div>

            <section className="flex flex-col-reverse md:flex-row gap-10 ">
              <p className="text-base font-normal text-gray-200">
                &copy; {new Date().getFullYear()} Wislaw, Inc. All Rights
                Reserved
              </p>
            </section>
          </section>
        </div>
      </footer>
    </>
  );
};

//  Copyright &copy; Wislaw {new Date().getFullYear()} . All rights
//             reserved{" "}
