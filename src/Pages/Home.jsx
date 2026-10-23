import { OurProducts } from "./OurProducts";
import { Banner } from "../Components/Banner";
import { Helmet } from "react-helmet-async";
export function Home() {
  return (
    <>
      <Helmet>
        <title>Best Cleaning Products | SAAFSATHI</title>

        <meta
          name="description"
          content="SAAF-SATHI,
          Best feauture home cleaning ."
        />

        <meta name="SONU RAJ" content="index, follow" />
      </Helmet>
      <Banner />
      <OurProducts />
    </>
  );
}
