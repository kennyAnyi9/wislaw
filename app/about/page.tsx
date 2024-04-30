import {
  Heroine,
  Intro,
  Mission,
  Staff,
  Why,
  Board,
  Hero,
} from "../../lib/exports";

const AboutUs = () => {
  return (
    <div className=" flex min-h-screen flex-col gap-32 ">
      <Hero />
      <Why />
      <Mission />
      <Board />
      <Staff />
    </div>
  );
};

export default AboutUs;
