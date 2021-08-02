import React from "react";
import Header from "../components/Header";
import Breadcrumb from "../components/Breadcrumb";
import Footer from "../components/Footer";
import Scrolltop from "../components/Scrolltop";
import Pricing2 from "../components/Pricing2";

const Pricing = ({url}) => {
  return (
    <>
      <Header />
      <main>
        <Breadcrumb name="pricing" />
        <Pricing2 />
        <Footer />
      </main>
      <Scrolltop />
    </>
  );
};

export default Pricing;
