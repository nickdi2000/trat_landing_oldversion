import React from "react";
import Header from "../components/Header";
import Breadcrumb from "../components/Breadcrumb";
import Footer from "../components/Footer";
import Scrolltop from "../components/Scrolltop";
import BlogList from "../components/BlogList";

const Bloglist = () => {
  return (
    <>
      <Header />
      <main>
        <Breadcrumb name="blog list" />
        <BlogList />
        <Footer />
      </main>
      <Scrolltop />
    </>
  );
};

export default Bloglist;
