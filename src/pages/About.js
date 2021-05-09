import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Scrolltop from "../components/Scrolltop";
import Breadcrumb from "../components/Breadcrumb";
import About2 from "../components/About2";

const About = () => {
  return (
    <>
      <Header />
      <main>
          <Breadcrumb name="about"/>
          <About2/>
        <Footer />
      </main>
      <Scrolltop />
    </>
  );
};

export default About;
