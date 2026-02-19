import LabClient from "./agrilab";
import { getAgriLabPage } from "../../../services/agrilabpage";

export default async function Page() {
  let data = null;

  try {
    const res = await getAgriLabPage();
    data = res?.data?.contentRef;
    console.log(data, "AGRILAB ");
  } catch (err) {
    console.error("Agri Lab API Error:", err);
  }

  return <LabClient data={data} />;
}
