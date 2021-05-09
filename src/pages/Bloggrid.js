import React from "react";
import Header from "../components/Header";
import Breadcrumb from "../components/Breadcrumb";
import Footer from "../components/Footer";
import Scrolltop from "../components/Scrolltop";
import BlogGrid from "../components/BlogGrid";

const Bloggrid = () => {
  return (
    <>
      <Header />
      <main>
        <Breadcrumb name="blog grid" />
        <BlogGrid />
        <Footer />
      </main>
      <Scrolltop />
    </>
  );
};

export default Bloggrid;
