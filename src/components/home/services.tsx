import Image from "next/image";
import Wrapper from "../resuseComp/wrapper";

const servData = [
  {
    image: "/assets/serv1.png",
    title: "Amazing trading conditions",
    desc: "FTMO Solution with a wide choice of assets across the board, with very low commissions and spreads.",
  },
  {
    image: "/assets/serv2.png",
    title: "Leverage 1:100",
    desc: "Use professional trader’s leverage to your advantage with no imposed limits on position sizing.",
  },
  {
    image: "/assets/serv3.png",
    title: "Amazing trading conditions",
    desc: "FTMO Solution with a wide choice of assets across the board, with very low commissions and spreads.",
  },
  {
    image: "/assets/serv4.png",
    title: "Amazing trading conditions",
    desc: "FTMO Solution with a wide choice of assets across the board, with very low commissions and spreads.",
  },
  {
    image: "/assets/serv5.png",
    title: "Amazing trading conditions",
    desc: "FTMO Solution with a wide choice of assets across the board, with very low commissions and spreads.",
  },
  {
    image: "/assets/serv6.png",
    title: "Amazing trading conditions",
    desc: "FTMO Solution with a wide choice of assets across the board, with very low commissions and spreads.",
  },
];

const Services = () => {
  return (
    <section className="bg-white lg:py-20 py-10">
      <Wrapper>
        <div className="grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 gap-5">
          {servData.map((item, index) => (
            <div className="bg-[#F0F0F0] rounded-2xl px-7 py-6" key={index}>
              <div>
                <Image
                  src={item.image}
                  width={500}
                  height={500}
                  alt={item.title}
                  className="w-8"
                />
              </div>
              <div>
                <h2 className="mt-4 font-bold text-xl">{item.title}</h2>
                <p className="mt-2">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Wrapper>
    </section>
  );
};

export default Services;