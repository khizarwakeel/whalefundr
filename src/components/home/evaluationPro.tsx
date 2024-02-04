import Image from "next/image";
import Wrapper from "../resuseComp/wrapper";
import Process1 from "/public/assets/process1.png";
import Process2 from "/public/assets/process2.png";

const processData = [
  {
    image: "/assets/bulb.png",
    title: "WhaleFundr Challenge",
    desc: `An WhaleFundr Challenge is the first step of the Evaluation
           Process. You need to succeed here to advance into the
           Verification stage. Prove your trading skills and discipline in
           observing the Trading Objectives.`,
  },
  {
    image: "/assets/email.png",
    title: "Verification",
    desc: `A Verification is the second and the last step towards becoming
    an WhaleFundr Trader. Once you pass a Verification stage and
    your results are verified, you will be offered to trade on an
    WhaleFundr Account.`,
  },
  {
    image: "/assets/growth.png",
    title: "WhaleFundr Trader",
    desc: `You are becoming an WhaleFundr Trader with an WhaleFundr
    Account. Trade responsibly and consistently and receive up to
    90%. If you consistently generate profits on your WhaleFundr
    Account.`,
  },
];

const EvaluationPro = () => {
  return (
    <section className="bg-white lg:py-10 py-5">
      <Wrapper>
        <div className="relative bg-[#F0F0F0] py-14 px-5 md:rounded-[4rem] rounded-3xl">
          <div className="text-center lg:text-5xl text-2xl md:text-3xl font-bold">
            <h1>Evaluation Process</h1>
          </div>
          {/* Large Screen Process */}
          <div className="lg:block hidden">
            <div className="flex mt-14">
              <div className="relative">
                <Image
                  src={Process1}
                  alt="Process"
                  className="object-contain"
                />
              </div>
              <div className="xl:-ml-[22rem] -ml-[17rem]">
                <Image
                  src={Process2}
                  alt="Process"
                  className="object-contain"
                />
              </div>
            </div>
            {/* Process Data 1 */}
            <div className=" absolute xl:top-[14.5rem] xl:left-[3.7rem] lg:top-[12.5rem] lg:left-[2.6rem] xl:w-72 w-60 text-center flex flex-col justify-center">
              <div className="flex justify-center mb-2">
                <Image
                  src={"/assets/bulb.png"}
                  alt="Bulb"
                  width={200}
                  height={200}
                  className="w-10"
                />
              </div>
              <h4 className="xl:text-2xl text-xl mb-2">WhaleFundr Challenge</h4>
              <p className="xl:text-sm text-xs">
                An WhaleFundr Challenge is the first step of the Evaluation
                Process. You need to succeed here to advance into the
                Verification stage. Prove your trading skills and discipline in
                observing the Trading Objectives.
              </p>
            </div>
            {/* Process Data 2 */}
            <div className=" absolute xl:top-[16rem] xl:left-[28.6rem] lg:top-[14.6rem] lg:left-[22.6rem] xl:w-72 w-60 text-center flex flex-col justify-center">
              <div className="flex justify-center mb-2">
                <Image
                  src={"/assets/email.png"}
                  alt="Bulb"
                  width={200}
                  height={200}
                  className="w-10"
                />
              </div>
              <h4 className="xl:text-2xl text-xl mb-2">Verification</h4>
              <p className="xl:text-sm text-xs">
                A Verification is the second and the last step towards becoming
                an WhaleFundr Trader. Once you pass a Verification stage and
                your results are verified, you will be offered to trade on an
                WhaleFundr Account.
              </p>
            </div>
            {/* Process Data 3 */}
            <div className=" absolute xl:top-[15.5rem] xl:right-[3.5rem] lg:top-[13.6rem] lg:right-[2.6rem] xl:w-72 w-60 text-center flex flex-col justify-center">
              <div className="flex justify-center mb-2">
                <Image
                  src={"/assets/growth.png"}
                  alt="Bulb"
                  width={200}
                  height={200}
                  className="w-10"
                />
              </div>
              <h4 className="xl:text-2xl text-xl mb-2">WhaleFundr Trader</h4>
              <p className="xl:text-sm text-xs">
                You are becoming an WhaleFundr Trader with an WhaleFundr
                Account. Trade responsibly and consistently and receive up to
                90%. If you consistently generate profits on your WhaleFundr
                Account,
              </p>
            </div>
          </div>
          {/* Medium and Small Screen Process */}
          <div className="lg:hidden block">
            <div className="flex flex-wrap justify-center mt-8 gap-6">
              {processData.map((item, index) => (
                <div
                  key={index}
                  className=" md:w-72 w-full text-center flex flex-col justify-center border border-gray-300 px-3 py-5 rounded-2xl"
                >
                  <div className="flex justify-center mb-2">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={200}
                      height={200}
                      className="w-10"
                    />
                  </div>
                  <h4 className="xl:text-2xl text-xl mb-2">{item.title}</h4>
                  <p className="xl:text-sm text-xs">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default EvaluationPro;