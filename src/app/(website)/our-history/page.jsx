import OurHistoryClient from "./history";
import { getHistoryPage } from "../../../services/historypage";

export default async function OurHistory() {
  let data = await getHistoryPage();
  data = data?.data?.contentRef;

  console.log("History Data:", data);

  return <OurHistoryClient data={data} />;
}
