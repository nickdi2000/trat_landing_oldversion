import React from "react";
import Header from "../components/Header";
import Breadcrumb from "../components/Breadcrumb";
import Footer from "../components/Footer";
import Errorcontent from "../components/Errorcontent";
import Scrolltop from "../components/Scrolltop";

const Error = () => {
  return (
    <>
      <Header />
      <main>
        <Breadcrumb name="error" />
        <Errorcontent />
        <Footer />
      </main>
      <Scrolltop />
    </>
  );
};

export default Error;
