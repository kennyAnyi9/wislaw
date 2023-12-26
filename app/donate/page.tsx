import { Button, Accordion } from "../lib/exports";
const Donate = () => {
  return (
    <div className="flex min-h-screen  flex-col md:flex-row  relative top-36 w-4/5 justify-center  mx-auto gap-64">
      <section className="flex flex-col gap-10">
        <h1 className="text-3xl lg:text-6xl font-hanken font-normal">
          How to Donate
        </h1>
        <p className="descriptive__text">
          Your donations and support will help us reach a larger community to
          make a greater impact
        </p>

        <div className="flex flex-col lg:flex-row gap-64">
          <div className="flex-1 gap-10 flex flex-col">
            <h1 className="sub__title">Donate Online</h1>

            <p className="descriptive__text">
              WESFUND accepts donations from nearly everywhere in the world. If
              your local currency is not listed, you can still donate! Your
              donation will be processed in the currency you select. Conversion
              rates and foreign transaction fees apply
            </p>

            <div className="flex flex-row gap-5 lg:gap-10 ">
              <Button
                text="One-time"
                className="border border-orange-600 bg-orange-600"
              />
              <Button
                text="Recurring"
                className="border border-orange-600 bg-orange-600"
              />
              <Button
                text="Donate in USD"
                className="border border-orange-600 bg-orange-600"
              />
            </div>
          </div>
          <section className="flex flex-col flex-1 ">
            <h1 className="sub__title">Other Ways to Give</h1>
            <Accordion />
          </section>
        </div>
      </section>
    </div>
  );
};

export default Donate;

//https://paystack.com/pay/wesfund
//https://paystack.com/pay/wesfund-recurring
