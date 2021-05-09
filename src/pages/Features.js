import React from "react";
import Header from "../components/Header";
import Breadcrumb from "../components/Breadcrumb";
import Footer from "../components/Footer";
import Scrolltop from "../components/Scrolltop";
import Features2 from "../components/Features2";

const Features = () => {
  return (
    <>
      <Header />
      <main>
        <Breadcrumb name="Features" />
        <Features2 />
        <Footer />
      </main>
      <Scrolltop />
    </>
  );
};

export default Features;
