import EvaluationPro from "@/components/home/evaluationPro";
import Herosection from "@/components/home/herosection";
import Objective from "@/components/home/objective";
import Partners from "@/components/home/partners";
import Services from "@/components/home/services";

export default function Home() {
  return (
    <main>
      <Herosection />
      <Partners />
      <EvaluationPro />
      <Objective />
      <Services />
    </main>
  );
}