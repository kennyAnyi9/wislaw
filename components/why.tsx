import Motion, { childVariants } from "@/app/framer";
import React from "react";

const Why = () => {
  return (
    <>
      <section className="w-screen lg:px-10 mx-auto flex flex-col  items-center gap-20 justify-center py-10">
        <Motion childVariants={childVariants}>
          <div className="max-w-6xl px-6">
            <h1 className=" font-semibold text-4xl md:text-5xl text-center mx-auto tracking-thighter">
              {" "}
              Why{" "}
              <span className="bg-clip-text max-w-5xl text-transparent bg-gradient-to-r from-orange-400 to-orange-600">
                Wislaw
              </span>{" "}
              Education and Support (WES) Fund?
            </h1>

            <p className="text_width mt-5 body_text">
              WES Fund is committed to pioneering a grassroots developmental
              approach with the youth at the forefront of implementing
              progressively the African Union's Agenda 2063 and the United
              Nations Sustainable Development Goals 2030
            </p>
          </div>
        </Motion>

        <section className="">
          <div className="mx-auto max-w-6xl px-6 text-gray-500">
            <div className="relative">
              <div className="relative   grid grid-cols-6 gap-3">
                <div className="relative col-span-full overflow-hidden rounded-[--card-border-radius] border border-[--ui-light-border-color] bg-white p-[--card-padding] dark:border-[--ui-dark-border-color] dark:bg-[--card-dark-bg] sm:col-span-3 lg:col-span-2">
                  <div>
                    <div className="absolute right-3 top-3 mx-auto mb-2 w-fit cursor-pointer rounded-[--annonce-border-radius] border border-[--ui-light-border-color] px-3 py-px text-sm font-medium text-gray-700 transition duration-200 hover:border-[--ui-light-border-hover-color] dark:border-[--ui-dark-border-color] dark:text-gray-300 dark:hover:border-[--ui-dark-border-hover-color]">
                      SDG 4
                    </div>
                    <div className="relative mx-auto flex aspect-square size-32 rounded-full border before:absolute before:-inset-2 before:rounded-full before:border dark:border-white/10 dark:bg-white/5 dark:before:border-white/5 dark:before:bg-white/5">
                      <svg
                        className="m-auto text-blue-500"
                        xmlns="http://www.w3.org/2000/svg"
                        width="72"
                        height="72"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <rect width="8" height="18" x="3" y="3" rx="1" />
                        <path d="M7 3v18" />
                        <path d="M20.4 18.9c.2.5-.1 1.1-.6 1.3l-1.9.7c-.5.2-1.1-.1-1.3-.6L11.1 5.1c-.2-.5.1-1.1.6-1.3l1.9-.7c.5-.2 1.1.1 1.3.6Z" />
                      </svg>
                    </div>

                    <div className="relative  mt-6 space-y-2 text-center">
                      <h2 className="text-lg font-medium text-gray-800 transition group-hover:text-secondary-950 dark:text-white">
                        Quality Education
                      </h2>
                      <p className="">
                        We seek to achieve this by equipping individuals with
                        the technological training and career guidance they need
                        to succeed in the 21st Century
                      </p>
                    </div>
                  </div>
                </div>

                <div className="relative col-span-full overflow-hidden rounded-[--card-border-radius] border border-[--ui-light-border-color] bg-white p-[--card-padding] dark:border-[--ui-dark-border-color] dark:bg-[--card-dark-bg] sm:col-span-3 lg:col-span-2">
                  <div>
                    <div className="absolute right-3 top-3 mx-auto mb-2 w-fit cursor-pointer rounded-[--annonce-border-radius] border border-[--ui-light-border-color] px-3 py-px text-sm font-medium text-gray-700 transition duration-200 hover:border-[--ui-light-border-hover-color] dark:border-[--ui-dark-border-color] dark:text-gray-300 dark:hover:border-[--ui-dark-border-hover-color]">
                      SDG 1
                    </div>
                    <div className="relative mx-auto flex aspect-square size-32 rounded-full border before:absolute before:-inset-2 before:rounded-full before:border dark:border-white/10 dark:bg-white/5 dark:before:border-white/5 dark:before:bg-white/5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="72"
                        height="72"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="m-auto text-blue-500"
                      >
                        <path d="M12.4 2.7c.9-.9 2.5-.9 3.4 0l5.5 5.5c.9.9.9 2.5 0 3.4l-3.7 3.7c-.9.9-2.5.9-3.4 0L8.7 9.8c-.9-.9-.9-2.5 0-3.4Z" />
                        <path d="m14 7 3 3" />
                        <path d="M9.4 10.6 2 18v3c0 .6.4 1 1 1h4v-3h3v-3h2l1.4-1.4" />
                      </svg>
                    </div>
                    <div className="relative  mt-6 space-y-2 text-center">
                      <h2 className="text-lg font-medium text-gray-800 transition group-hover:text-secondary-950 dark:text-white">
                        No Poverty
                      </h2>
                      <p className="">
                        We seek to achieve this through the alternate
                        livelihoods by equipping individuals with various
                        livelihood skills training to enable them to cater for
                        their families.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="relative col-span-full overflow-hidden rounded-[--card-border-radius] border border-[--ui-light-border-color] bg-white p-[--card-padding] dark:border-[--ui-dark-border-color] dark:bg-[--card-dark-bg] sm:col-span-3 lg:col-span-2">
                  <div>
                    <div className="absolute right-3 top-3 mx-auto mb-2 w-fit cursor-pointer rounded-[--annonce-border-radius] border border-[--ui-light-border-color] px-3 py-px text-sm font-medium text-gray-700 transition duration-200 hover:border-[--ui-light-border-hover-color] dark:border-[--ui-dark-border-color] dark:text-gray-300 dark:hover:border-[--ui-dark-border-hover-color]">
                      SDG 5
                    </div>
                    <div className="relative mx-auto flex aspect-square size-32 rounded-full border before:absolute before:-inset-2 before:rounded-full before:border dark:border-white/10 dark:bg-white/5 dark:before:border-white/5 dark:before:bg-white/5">
                      <svg
                        className="m-auto  w-20"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M13 3H8.2C7.0799 3 6.51984 3 6.09202 3.21799C5.71569 3.40973 5.40973 3.71569 5.21799 4.09202C5 4.51984 5 5.0799 5 6.2V17.8C5 18.9201 5 19.4802 5.21799 19.908C5.40973 20.2843 5.71569 20.5903 6.09202 20.782C6.51984 21 7.0799 21 8.2 21H12M13 3L19 9M13 3V7.4C13 7.96005 13 8.24008 13.109 8.45399C13.2049 8.64215 13.3578 8.79513 13.546 8.89101C13.7599 9 14.0399 9 14.6 9H19M19 9V10M21 15.21C20.9318 15.2141 20.7357 15.21 20.6667 15.21C19.6422 15.21 18.7077 14.7524 18 14C17.2923 14.7524 16.3578 15.2099 15.3333 15.2099C15.2643 15.2099 15.0684 15.2141 15.0002 15.21C15.0002 15.21 15 15.9855 15 16.3979C15 18.6121 16.2748 20.4725 18 21C19.7252 20.4725 21 18.6121 21 16.3979C21 15.9855 21 15.21 21 15.21Z"
                          stroke="currentColor"
                          strokeWidth="1.128"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-primary-500"
                        ></path>{" "}
                      </svg>
                    </div>

                    <div className="relative  mt-6 space-y-2 text-center">
                      <h2 className="text-lg font-medium text-gray-800 transition group-hover:text-secondary-950 dark:text-white">
                        Gender Equality
                      </h2>
                      <p className="">
                        By organising training activities targeted at developing
                        women and girls in the community, we hope to bridge the
                        gender gap.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="relative col-span-full overflow-hidden rounded-[--card-border-radius] border border-[--ui-light-border-color] bg-white p-[--card-padding] dark:border-[--ui-dark-border-color] dark:bg-[--card-dark-bg] sm:col-span-3 lg:col-span-2">
                  <div>
                    <div className="absolute right-3 top-3 mx-auto mb-2 w-fit cursor-pointer rounded-[--annonce-border-radius] border border-[--ui-light-border-color] px-3 py-px text-sm font-medium text-gray-700 transition duration-200 hover:border-[--ui-light-border-hover-color] dark:border-[--ui-dark-border-color] dark:text-gray-300 dark:hover:border-[--ui-dark-border-hover-color]">
                      SDG 8
                    </div>
                    <div className="relative mx-auto flex aspect-square size-32 rounded-full border before:absolute before:-inset-2 before:rounded-full before:border dark:border-white/10 dark:bg-white/5 dark:before:border-white/5 dark:before:bg-white/5">
                      <svg
                        className="m-auto text-primary-500"
                        xmlns="http://www.w3.org/2000/svg"
                        width="72"
                        height="72"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M11 15h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 17" />
                        <path d="m7 21 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9" />
                        <path d="m2 16 6 6" />
                        <circle cx="16" cy="9" r="2.9" />
                        <circle cx="6" cy="5" r="3" />
                      </svg>{" "}
                    </div>
                    <div className="relative  mt-6 space-y-2 text-center">
                      <h2 className="text-lg font-medium text-gray-800 transition group-hover:text-secondary-950 dark:text-white">
                        Decent Work and Economic Growth
                      </h2>
                      <p className="">
                        We seek to achieve this by inculcating an
                        entrepreneurial mindset in the youth and providing
                        support for start-ups that have the potential of
                        supporting economic growth
                      </p>
                    </div>
                  </div>
                </div>

                {/* start from here if you are confused */}
              </div>
            </div>
          </div>
        </section>
        {/* mission, vision and gap */}
        <section className="bg-gray-950 w-screen h-full py-10">
          <div className="mx-auto max-w-6xl px-6 text-gray-500 space-y-10">
            <h1 className="font-semibold text-white text-4xl md:text-5xl text-center mx-auto tracking-thighter">
              Who We Are & What <br />
              We{" "}
              <span className="bg-clip-text max-w-5xl text-transparent bg-gradient-to-r from-blue-400 to-blue-700">
                Believe
              </span>{" "}
              In
            </h1>
            <p className="text_width body_text_dark">
              we are guided by a set of core principles that define our purpose,
              aspirations, and the values we hold dear. These principles shape
              our decisions and actions, creating a roadmap for our success and
              positive impact.
            </p>
            <div className="relative">
              <div className="relative   grid grid-cols-6 gap-3">
                {/* right here */}
                <div className="relative col-span-full  overflow-hidden rounded-[--card-border-radius] border  p-[--card-padding] border-[--ui-dark-border-color] bg-[--card-dark-bg] lg:col-span-2">
                  <div className="grid h-full sm:grid-cols-1">
                    <div className="relative  flex flex-col justify-between space-y-12 lg:space-y-6 ">
                      <div className="relative flex aspect-square size-12 rounded-full border before:absolute before:-inset-2 before:rounded-full before:border dark:border-white/10 dark:bg-white/5 dark:before:border-white/5 dark:before:bg-white/5">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="1em"
                          height="1em"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="m-auto size-6"
                        >
                          <circle cx="12" cy="12" r="10" />
                          <circle cx="12" cy="12" r="6" />
                          <circle cx="12" cy="12" r="2" />
                        </svg>{" "}
                      </div>
                      <div className="space-y-2">
                        <h2 className="text-lg font-medium transition group-hover:text-secondary-950 text-white">
                          Our Mission
                        </h2>
                        <p className="">
                          To be a leading organisation in the creation of
                          opportunities for Technology and Innovation for
                          Ghana’s sustainable development.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* vision */}
                <div className="relative col-span-full  overflow-hidden rounded-[--card-border-radius] border  p-[--card-padding] border-[--ui-dark-border-color] bg-[--card-dark-bg] lg:col-span-2">
                  <div className="grid h-full sm:grid-cols-1">
                    <div className="relative  flex flex-col justify-between space-y-12 lg:space-y-6 ">
                      <div className="relative flex aspect-square size-12 rounded-full border before:absolute before:-inset-2 before:rounded-full before:border dark:border-white/10 dark:bg-white/5 dark:before:border-white/5 dark:before:bg-white/5">
                        <svg
                          className="m-auto size-6"
                          xmlns="http://www.w3.org/2000/svg"
                          width="1em"
                          height="1em"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                          <circle cx="12" cy="12" r="3" />
                        </svg>
                      </div>
                      <div className="space-y-2">
                        <h2 className="text-lg font-medium transition group-hover:text-secondary-950 text-white">
                          Our Vision
                        </h2>
                        <p className="">
                          To raise high-potential Startups, SMEs and
                          Entrepreneurs that will inspire economic growth and
                          social development through innovation and technology.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* values */}
                <div className="relative col-span-full  overflow-hidden rounded-[--card-border-radius] border  p-[--card-padding] border-[--ui-dark-border-color] bg-[--card-dark-bg] lg:col-span-2">
                  <div className="grid h-full sm:grid-cols-1">
                    <div className="relative  flex flex-col justify-between space-y-12 lg:space-y-6 ">
                      <div className="relative flex aspect-square size-12 rounded-full border before:absolute before:-inset-2 before:rounded-full before:border dark:border-white/10 dark:bg-white/5 dark:before:border-white/5 dark:before:bg-white/5">
                        <svg
                          className="m-auto size-6"
                          xmlns="http://www.w3.org/2000/svg"
                          width="1em"
                          height="1em"
                          viewBox="0 0 24 24"
                        >
                          <g fill="none">
                            <path
                              stroke="currentColor"
                              d="M9 6a3 3 0 1 0 6 0a3 3 0 0 0-6 0zm-4.562 7.902a3 3 0 1 0 3 5.195a3 3 0 0 0-3-5.196zm15.124 0a2.999 2.999 0 1 1-2.998 5.194a2.999 2.999 0 0 1 2.998-5.194z"
                            />
                            <path
                              fill="currentColor"
                              fillRule="evenodd"
                              d="M9.003 6.125a2.993 2.993 0 0 1 .175-1.143a8.507 8.507 0 0 0-5.031 4.766a8.5 8.5 0 0 0-.502 4.817a3 3 0 0 1 .902-.723a7.498 7.498 0 0 1 4.456-7.717m5.994 0a7.499 7.499 0 0 1 4.456 7.717a2.998 2.998 0 0 1 .902.723a8.5 8.5 0 0 0-5.533-9.583a3 3 0 0 1 .175 1.143m2.536 13.328a3.002 3.002 0 0 1-1.078-.42a7.501 7.501 0 0 1-8.91 0l-.107.065a3 3 0 0 1-.971.355a8.5 8.5 0 0 0 11.066 0"
                              clipRule="evenodd"
                            />
                          </g>
                        </svg>
                      </div>
                      <div className="space-y-2">
                        <h2 className="text-lg font-medium transition group-hover:text-secondary-950 text-white">
                          Our Values
                        </h2>
                        <p className="">
                          Innovation and Technology, Sustainability and Growth,
                          Diversity and Inclusion, Social justice and Equality,
                          Empathy and Attitude of Giving.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default Why;
