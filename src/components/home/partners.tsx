import Image from "next/image";
import Wrapper from "../resuseComp/wrapper";
import PropImage1 from "/public/assets/propImg1.png";
import PropImage2 from "/public/assets/propImg2.png";
import PropImage3 from "/public/assets/propImg3.png";

const cardsData = [
  {
    title: "$180M+",
    desc: "Paid out to FTMO Traders",
  },
  {
    title: "180+",
    desc: "No. of countries with traders registered at FTMO",
  },
  {
    title: "16M+",
    desc: "No. of trades opened every month",
  },
  {
    title: "8h",
    desc: "Avg payout processing time",
  },
];

const partnersData = [
  "/assets/part1.png",
  "/assets/part2.png",
  "/assets/part3.png",
  "/assets/part4.png",
  "/assets/part5.png",
  "/assets/part6.png",
  "/assets/part7.png",
  "/assets/part8.png",
];

const cardsDataProp = [
  {
    title: "Profit Split",
    desc: "$76,000",
    image: PropImage1,
  },
  {
    title: "Profit Split",
    desc: "$41,018",
    image: PropImage2,
  },
  {
    title: "Profit Split",
    desc: "$500,180",
    image: PropImage3,
  },
];

const Partners = () => {
  return (
    <section className="bg-white z-20 pb-10">
      <Wrapper>
        {/* Cards Div */}
        <div className="flex lg:flex-row flex-wrap lg:flex-nowrap justify-center gap-6 lg:mt-0 mt-8 pt-8 lg:pt-0">
          {cardsData.map((data, index) => (
            <div
              style={{ boxShadow: "inset gray 0px 0px 30px -12px;" }}
              className="lg:w-72 w-full md:w-[47.9%] h-40 lg:-mt-[4.5rem] rounded-2xl shadow-inner shadow-slate-400 bg-white z-10"
              key={index}
            >
              <div className="flex flex-col text-center justify-center items-center h-full mx-5">
                <h2 className="text-3xl font-bold text-[#2176b9]">
                  {data.title}
                </h2>
                <h3 className="text-sm">{data.desc}</h3>
              </div>
            </div>
          ))}
        </div>
        {/* Main Data Section */}
        <div className="mt-20">
          <div>
            <h1 className="text-5xl font-semibold text-center leading-tight">
              <span className="text-[#2176b9]">WhaleFundr</span> is one of the
              most reliable firms in modern prop trading industry.
            </h1>
          </div>
          <div className="grid grid-cols-4 gap-5 mt-8">
            {partnersData.map((item, index) => (
              <div
                className="bg-[#F0F0F0] h-32 rounded-2xl flex justify-center items-center"
                key={index}
              >
                <Image
                  src={item}
                  width={500}
                  height={500}
                  alt={item}
                  className="w-24"
                />
              </div>
            ))}
          </div>
        </div>
        {/* Modern Prop  */}
        <div className="grid grid-cols-2 mt-16 gap-10">
          <div className="flex gap-5">
            {cardsDataProp.map((item, index) => (
              <div
                className=" rounded-xl dark:bg-gray-800 dark:border-gray-700 h-full"
                key={index}
              >
                <div className="relative">
                  <Image src={item.image} alt="PropImage" className="w-full" />
                </div>
                <div
                  style={{ boxShadow: "inset gray 0px 0px 30px -12px;" }}
                  className="p-5 rounded-b-xl -mt-8"
                >
                  <div className="mt-5 text-center">
                    <h3 className="text-sm">{item.title}</h3>
                    <h4 className="text-2xl mt-1 font-bold text-[#2176b9]">
                      {item.desc}
                    </h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div>
            <h1 className="text-5xl font-bold leading-tight">
              Trade for{" "}
              <span className="text-[#2176b9]">Modern Prop Trading </span>Firm
            </h1>
            <p className="mt-4 text-sm">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English. Many desktop
              publishing packages and web page editors now use Lorem Ipsum as
              their default model text, and a search for 'lorem ipsum' will
              uncover
            </p>
            <p className="mt-4 text-sm">
              Upon successful completion of the Evaluation Process, you are
              offered to trade on an WhaleFundr Account with a balance of up to
              200,000 USD. Your journey to get there might be challenging, but
              our educational applications, Account Analysis and Performance
              Coaches are here to help you on the endeavour to financial
              independence.
            </p>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default Partners;