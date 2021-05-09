import React from "react";
import Header from "../components/Header";
import Breadcrumb from "../components/Breadcrumb";
import Footer from "../components/Footer";
import Scrolltop from "../components/Scrolltop";
import BlogDetails from "../components/BlogDetails";

const Blogdetails = () => {
  return (
    <>
      <Header />
      <main>
        <Breadcrumb name="blog details" />
        <BlogDetails />
        <Footer />
      </main>
      <Scrolltop />
    </>
  );
};

export default Blogdetails;
