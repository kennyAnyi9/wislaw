import DonationGallery from "@/components/donations/gallery";
import Tabs from "@/components/donations/tabs";

const Donate = () => {
  return (
    <div className="flex min-h-screen flex-col justify-center items-center">
      <section>
        <Tabs />
      </section>

      <section className="w-full h-full">
        <DonationGallery />
      </section>
    </div>
  );
};

export default Donate;
