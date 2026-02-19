import { getProductPage } from "../../../services/product";
import Product from "./Product";

export default async function OurProduct() {
  let data = await getProductPage();
  data = data?.data?.contentRef;

  console.log("product data:", data);

  return <Product data={data} />;
}
