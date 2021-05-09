import React from "react";
import Header from "../components/Header";
import Breadcrumb from "../components/Breadcrumb";
import Footer from "../components/Footer";
import Scrolltop from "../components/Scrolltop";
import ContactContent from "../components/ContactContent";

const Contact = () => {
  return (
    <>
      <Header />
      <main>
        <Breadcrumb name="contact" />
        <ContactContent/>
        <Footer />
      </main>
      <Scrolltop />
    </>
  );
};

export default Contact;
