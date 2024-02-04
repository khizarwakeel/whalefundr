import { StaticImageData } from "next/image";
import CountryList from "../resuseComp/countryList";
import Wrapper from "../resuseComp/wrapper";
import USA from "/public/assets/usa.png";

const Objective = () => {
  return (
    <section
      className="lg:bg-white bg-gray-800 py-10"
      style={{
        backgroundImage: "url('/assets/tradingImg.png')",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right",
      }}
    >
      <Wrapper>
        <div className="grid lg:py-16 lg:grid-cols-12 items-center">
          <div className="lg:col-span-5 lg:mt-8 md:mt-0 max-w-xs xl:max-w-md">
            <div className="lg:-mr-60 xl:-mr-0 -mr-0">
              <h1 className="lg:text-5xl text-2xl md:text-3xl font-bold leading-tight lg:text-black text-white">
                Know your{" "}
                <span className="text-[#2176b9]">Trading Objectives</span>
              </h1>
              <p className="mt-4 text-sm text-white lg:text-black">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using Content
                here, content here, making it look like readable English.
              </p>
            </div>
            <div className="flex md:flex-row flex-col md:mt-5 gap-10 md:items-start items-center">
              <div>
                <h1 className="mb-2 ml-2 text-xl lg:text-black text-white">
                  Currency:
                </h1>
                <CountryList
                  country="USD"
                  image={USA as StaticImageData}
                  bgColor="bg-[#F0F0F0]"
                />
              </div>
              <div>
                <h1 className="mb-2 ml-2 text-xl lg:text-black text-white">
                  Risk:
                </h1>
                <CountryList country="Normal" bgColor="bg-[#F0F0F0]" />
              </div>
              <div>
                <h1 className="mb-2 ml-2 text-xl lg:text-black text-white">
                  Balance:
                </h1>
                <CountryList country="$200,000" bgColor="bg-[#F0F0F0]" />
              </div>
            </div>
          </div>
          <div className="hidden lg:mt-0 lg:col-span-7 lg:flex">
            {/* Empty Div */}
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default Objective;