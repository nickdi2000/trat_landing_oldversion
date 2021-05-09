import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Features from "../components/Features";
import Cta from "../components/Cta";
import Counter from "../components/Counter";
import Video from "../components/Video";
import Screenshot from "../components/Screenshot";
import Blog from "../components/Blog";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Testimonial from "../components/Testimonial";
import Accordion from "../components/Accordion";
import Subscribe from "../components/Subscribe";
import Client from "../components/Client";
import Pricing from "../components/Pricing";
import Scrolltop from "../components/Scrolltop";
const Home = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Counter />
        <Features />
        <Video />
        <Screenshot />
        <Cta />
        <Pricing />
        <Accordion />
        <Testimonial />
        <Blog />
        <Subscribe />
        <Client />
        <Footer />
      </main>
      <Scrolltop />
    </>
  );
};

export default Home;
