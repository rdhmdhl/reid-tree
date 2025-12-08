import TopicCard from "@/components/TopicCard";
import FirstNormalRules from "./firstNormalRules";
import SecondNormalRules from "./secondNormalRules";
import ThirdNormalRules from "./thirdNormalRules";
import FourthNormalRules from "./fourthNormalRules";
import FifthNormalRules from "./fifthNormalRules";
export default function Normalization() {
  return (
    <div>
      <TopicCard
        title="Normalization"
        subtitle="What is database normalization?"
        body="A table structured in a way that it cannot express duplicate versions of the truth. They are protected from contradictory data, anomolies and easier to understand. There is a way to determine if tables are not normalized enough. These sets of criteria are 1NF, 2NF, 3NF, 4NF, 5NF. Think of these as safety levels."
      />
      <FirstNormalRules />
      <SecondNormalRules />
      <ThirdNormalRules />
      <FourthNormalRules />
      <FifthNormalRules />
    </div>
  );
}
