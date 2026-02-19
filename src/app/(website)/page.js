import { getHomepage } from "../../services/homepage";
import Concept from "../components/home/Concept";
import Hero from "../components/home/Hero";

export default async function Home() {
  let data = await getHomepage();
  console.log(data);
  data = data?.data?.contentRef;
  return (
    <>
      <Hero data={data} />
      <Concept data={data?.coreIdea} />
    </>
  );
}
