import WordRotate from "@/components/magicui/word-rotate";
import Link from "next/link";

export default function InitiativesPage() {
  return (
    <div className="bg-background text-foreground mt-20">
      <section className="w-full py-20 md:py-32 bg-gradient-to-r from-blue-800 to-orange-600">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter text-primary-foreground sm:text-5xl xl:text-6xl/none">
                Empowering{" "}
                <WordRotate
                  className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-orange-600"
                  words={[
                    "Communities",
                    "Students",
                    "Farmers",
                    "Entrepreneurs",
                  ]}
                />
                Through Innovation
              </h1>
              <p className="max-w-[600px] text-primary-foreground/80 md:text-xl">
                Our NGO is dedicated to driving sustainable development and
                empowering underserved communities through innovative
                initiatives in agriculture, business, digital skills, and
                vocational training.
              </p>
            </div>
            <img
              src="images/women-ent.jpg"
              width="550"
              height="400"
              alt="Hero"
              className="mx-auto overflow-hidden rounded-xl object-cover"
            />
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-[1fr_500px] lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                Agritech
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Revolutionizing Agriculture Through Technology
              </h2>
              <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our agritech initiatives empower farmers with cutting-edge
                technologies, data-driven insights, and sustainable farming
                practices to boost productivity and income.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link
                  href="#"
                  className="inline-flex h-10 items-center justify-center rounded-md  px-8  bg-orange-600 hover:bg-orange-500 text-sm font-medium text-primary-foreground shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Learn More
                </Link>
                <Link
                  href="#"
                  className="inline-flex h-10 items-center text-orange-500 justify-center rounded-md border border-input  border-orange-400 bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Get Involved
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col items-center justify-center space-y-2 rounded-lg bg-card p-4 text-center">
                <TractorIcon className="h-8 w-8 text-primary" />
                <h3 className="text-lg font-semibold">Smart Farming</h3>
                <p className="text-muted-foreground text-sm">
                  Precision agriculture technologies for improved yields.
                </p>
              </div>
              <div className="flex flex-col items-center justify-center space-y-2 rounded-lg bg-card p-4 text-center">
                <LeafIcon className="h-8 w-8 text-primary" />
                <h3 className="text-lg font-semibold">Sustainable Practices</h3>
                <p className="text-muted-foreground text-sm">
                  Eco-friendly farming methods for long-term resilience.
                </p>
              </div>
              <div className="flex flex-col items-center justify-center space-y-2 rounded-lg bg-card p-4 text-center">
                <BarChartIcon className="h-8 w-8 text-primary" />
                <h3 className="text-lg font-semibold">Data-driven Insights</h3>
                <p className="text-muted-foreground text-sm">
                  Leveraging data to optimize agricultural operations.
                </p>
              </div>
              <div className="flex flex-col items-center justify-center space-y-2 rounded-lg bg-card p-4 text-center">
                <WalletIcon className="h-8 w-8 text-primary" />
                <h3 className="text-lg font-semibold">Increased Incomes</h3>
                <p className="text-muted-foreground text-sm">
                  Empowering farmers to improve their financial well-being.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-[500px_1fr] lg:gap-12">
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col items-center justify-center space-y-2 rounded-lg bg-card p-4 text-center">
                <BriefcaseIcon className="h-8 w-8 text-primary" />
                <h3 className="text-lg font-semibold">Entrepreneurship</h3>
                <p className="text-muted-foreground text-sm">
                  Fostering a culture of innovation and self-employment.
                </p>
              </div>
              <div className="flex flex-col items-center justify-center space-y-2 rounded-lg bg-card p-4 text-center">
                <PieChartIcon className="h-8 w-8 text-primary" />
                <h3 className="text-lg font-semibold">Market Access</h3>
                <p className="text-muted-foreground text-sm">
                  Connecting entrepreneurs to new markets and opportunities.
                </p>
              </div>
              <div className="flex flex-col items-center justify-center space-y-2 rounded-lg bg-card p-4 text-center">
                <LightbulbIcon className="h-8 w-8 text-primary" />
                <h3 className="text-lg font-semibold">Innovation</h3>
                <p className="text-muted-foreground text-sm">
                  Fostering a culture of creativity and problem-solving.
                </p>
              </div>
              <div className="flex flex-col items-center justify-center space-y-2 rounded-lg bg-card p-4 text-center">
                <WalletIcon className="h-8 w-8 text-primary" />
                <h3 className="text-lg font-semibold">Financial Inclusion</h3>
                <p className="text-muted-foreground text-sm">
                  Improving access to financial services and capital.
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                Business Development
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Empowering Entrepreneurs and Small Businesses
              </h2>
              <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our business development services provide aspiring entrepreneurs
                and small businesses with the tools, training, and resources
                they need to thrive in the local and global marketplace.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link
                  href="#"
                  className="inline-flex h-10 items-center justify-center rounded-md  px-8  bg-orange-600 hover:bg-orange-500 text-sm font-medium text-primary-foreground shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Learn More
                </Link>
                <Link
                  href="#"
                  className="inline-flex h-10 items-center text-orange-500 justify-center rounded-md border border-input  border-orange-400 bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Get Involved
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-[1fr_500px] lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                Digital Skills
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Bridging the Digital Divide Through Education
              </h2>
              <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our digital skills training programs empower underserved
                communities with the knowledge and tools they need to thrive in
                the digital age, opening up new opportunities for employment and
                entrepreneurship.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link
                  href="#"
                  className="inline-flex h-10 items-center justify-center rounded-md  px-8  bg-orange-600 hover:bg-orange-500 text-sm font-medium text-primary-foreground shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Learn More
                </Link>
                <Link
                  href="#"
                  className="inline-flex h-10 items-center text-orange-500 justify-center rounded-md border border-input  border-orange-400 bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Get Involved
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col items-center justify-center space-y-2 rounded-lg bg-card p-4 text-center">
                <LaptopIcon className="h-8 w-8 text-primary" />
                <h3 className="text-lg font-semibold">Computer Literacy</h3>
                <p className="text-muted-foreground text-sm">
                  Equipping learners with essential digital skills.
                </p>
              </div>
              <div className="flex flex-col items-center justify-center space-y-2 rounded-lg bg-card p-4 text-center">
                <CodeIcon className="h-8 w-8 text-primary" />
                <h3 className="text-lg font-semibold">
                  Coding and Programming
                </h3>
                <p className="text-muted-foreground text-sm">
                  Empowering learners to create digital solutions.
                </p>
              </div>

              <div className="flex flex-col items-center justify-center space-y-2 rounded-lg bg-card p-4 text-center">
                <RobotIcon className="h-8 w-8 text-primary" />
                <h3 className="text-lg font-semibold">Robotics</h3>
                <p className="text-muted-foreground text-sm">
                  Empowering learners with cloud-based tools and services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-[500px_1fr] lg:gap-12">
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col items-center justify-center space-y-2 rounded-lg bg-card p-4 text-center">
                <WrenchIcon className="h-8 w-8 text-primary" />
                <h3 className="text-lg font-semibold">Technical Training</h3>
                <p className="text-muted-foreground text-sm">
                  Providing hands-on vocational skills development.
                </p>
              </div>
              <div className="flex flex-col items-center justify-center space-y-2 rounded-lg bg-card p-4 text-center">
                <BriefcaseIcon className="h-8 w-8 text-primary" />
                <h3 className="text-lg font-semibold">Job Placement</h3>
                <p className="text-muted-foreground text-sm">
                  Connecting graduates to employment opportunities.
                </p>
              </div>
              <div className="flex flex-col items-center justify-center space-y-2 rounded-lg bg-card p-4 text-center">
                <WalletIcon className="h-8 w-8 text-primary" />
                <h3 className="text-lg font-semibold">Financial Empowerment</h3>
                <p className="text-muted-foreground text-sm">
                  Providing access to financial services and resources.
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                TVET
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Empowering Technical and Vocational Skills Training
              </h2>
              <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our TVET programs equip individuals with practical skills and
                knowledge, enabling them to excel in their chosen trades, secure
                meaningful employment, or launch successful businesses. We focus
                on industry-relevant training, hands-on experience, and career
                guidance to bridge the skills gap and foster economic growth in
                our communities.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link
                  href="#"
                  className="inline-flex h-10 items-center justify-center rounded-md  px-8  bg-orange-600 hover:bg-orange-500 text-sm font-medium text-primary-foreground shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Learn More
                </Link>
                <Link
                  href="#"
                  className="inline-flex h-10 items-center text-orange-500 justify-center rounded-md border border-input  border-orange-400 bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Get Involved
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function BarChartIcon(props: any) {
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
      className="text-orange-400"
    >
      <line x1="12" x2="12" y1="20" y2="10" />
      <line x1="18" x2="18" y1="20" y2="4" />
      <line x1="6" x2="6" y1="20" y2="16" />
    </svg>
  );
}

function BriefcaseIcon(props: any) {
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
      className="text-orange-400"
    >
      <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      <rect width="20" height="14" x="2" y="6" rx="2" />
    </svg>
  );
}

function RobotIcon(props: any) {
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
      className="text-orange-400"
    >
      <path d="M12 8V4H8" />
      <rect width="16" height="12" x="4" y="8" rx="2" />
      <path d="M2 14h2" />
      <path d="M20 14h2" />
      <path d="M15 13v2" />
      <path d="M9 13v2" />
    </svg>
  );
}

function CodeIcon(props: any) {
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
      className="text-orange-400"
    >
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}

function GraduationCapIcon(props: any) {
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
      className="text-orange-400"
    >
      <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" />
      <path d="M22 10v6" />
      <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" />
    </svg>
  );
}

function LaptopIcon(props: any) {
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
      className="text-orange-400"
    >
      <path d="M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16" />
    </svg>
  );
}

function LeafIcon(props: any) {
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
      className="text-orange-400"
    >
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
    </svg>
  );
}

function LightbulbIcon(props: any) {
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
      className="text-orange-400"
    >
      <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
      <path d="M9 18h6" />
      <path d="M10 22h4" />
    </svg>
  );
}

function PieChartIcon(props: any) {
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
      className="text-orange-400"
    >
      <path d="M21.21 15.89A10 10 0 1 1 8 2.83" />
      <path d="M22 12A10 10 0 0 0 12 2v10z" />
    </svg>
  );
}

function SmartphoneIcon(props: any) {
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
      className="text-orange-400"
    >
      <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
      <path d="M12 18h.01" />
    </svg>
  );
}

function TractorIcon(props: any) {
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
      className="text-orange-400"
    >
      <path d="m10 11 11 .9c.6 0 .9.5.8 1.1l-.8 5h-1" />
      <path d="M16 18h-5" />
      <path d="M18 5a1 1 0 0 0-1 1v5.573" />
      <path d="M3 4h9l1 7.246" />
      <path d="M4 11V4" />
      <path d="M7 15h.01" />
      <path d="M8 10.1V4" />
      <circle cx="18" cy="18" r="2" />
      <circle cx="7" cy="15" r="5" />
    </svg>
  );
}

function WalletIcon(props: any) {
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
      className="text-orange-400"
    >
      <path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1" />
      <path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4" />
    </svg>
  );
}

function WrenchIcon(props: any) {
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
      className="text-orange-400"
    >
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>
  );
}

function XIcon(props: any) {
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
      className="text-orange-400"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}
