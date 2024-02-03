import Image from "next/image";
import Button from "../resuseComp/button";
import Wrapper from "../resuseComp/wrapper";
import Phone from "/public/assets/iphone.png";
import Peoples from "/public/assets/peoples.png";

const Herosection = () => {
  return (
    <Wrapper>
      <section className="text-white lg:mt-0 md:mt-8 mt-4">
        <div className="grid lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto lg:col-span-7">
            <h2 className="text-[#2176B9] font-bold">SINCE 2024</h2>
            <h1 className="max-w-2xl mb-4 text-2xl mt-4 lg:leading-[3.5rem] xl:leading-[4.5rem] font-medium md:text-5xl xl:text-6xl dark:text-white">
              WE ARE LOOKING FOR PROFITABLE TRADERS
            </h1>
            <p className="max-w-2xl mb-6 font-light lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              Unleash your inner whale and trade up to $500,000 in a trading
              environment where you can earn real gains.
            </p>
            <div className="flex">
              <div>
                <Button content="Learn More" color="bg-[#2176B9]" />
              </div>
              <div>
                <Button
                  content="Free Trial"
                  color="bg-[#121212]"
                  border="border border-[#150578]"
                />
              </div>
            </div>
            <div className="mt-4 flex md:flex-row flex-col md:gap-5 gap-2 items-center">
              <div>
                <Image src={Peoples} alt="Peoples" className="md:w-56 w-40" />
              </div>
              <div className="md:max-w-44 text-center md:text-left">
                <h4 className="font-bold md:text-3xl text-xl">15 Million+</h4>
                <h4 className="md:text-lg text-base">
                  Be part of growing community
                </h4>
              </div>
            </div>
          </div>
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <Image
              src={Phone}
              alt="Phone"
              className="w-full lg:h-[36.5rem] object-contain"
            />
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

export default Herosection;