import React, {useEffect} from "react";
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
import ReactGA from 'react-ga';
import { useState } from 'react';
// UA-196224044-1
const queryString = require('query-string');



const Home = () => {
	const [url, updateUrl] = React.useState('https://triviarat.com/sign-up');

	useEffect(() => {
		console.log('analytics-loading..');


	  ReactGA.initialize('UA-196224044-1');
		ReactGA.pageview(window.location.pathname + window.location.search);

		var parsed = queryString.parse(window.location.search);
    console.log(parsed.utm_source);
		if(typeof parsed.utm_source !== 'undefined'){
			var address = "https://triviarat.com/sign-up?utm_source=" + parsed.utm_source;
			updateUrl(address);
		}


	}, []);



  return (
    <>
      <Header />
      <main>
        <Hero url={url}/>
        <About url={url} />
        <Features />
				<Testimonial />
        <Video />
        <Cta url={url}/>
        <Pricing url={url}/>
        <Footer />
      </main>
      <Scrolltop />
    </>
  );
};

export default Home;
