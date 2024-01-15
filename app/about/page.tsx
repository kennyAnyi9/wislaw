import {
  Heroine,
  Intro,
  Mission,
  Staff,
  Why,
  Board,
  Video,
} from "../../lib/exports";

const AboutUs = () => {
  return (
    <div className=" flex min-h-screen flex-col gap-20 ">
      <Video />
      <Intro />
      <Why />
      <Mission />
      <Board />
      <Staff />
    </div>
  );
};

export default AboutUs;
