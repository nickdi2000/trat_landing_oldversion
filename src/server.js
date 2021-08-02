import React, {useEffect} from "react";
import ReactGA from 'react-ga';
const queryString = require('query-string');


const ServerTools = () => {
	useEffect(() => {
		console.log('analytics-loaded');
	  ReactGA.initialize('UA-196224044-1');
		ReactGA.pageview(window.location.pathname + window.location.search);

		const parsed = queryString.parse(window.location.search);
    console.log(parsed.utm_source);
		if(parsed.utm_source){
			var utm = parsed.utm_source;
			global.utm_source = utm;
			global.signup_url = "https://triviarat.com/?utm_source=" + utm;
		}else{
			global.signup_url = "https://triviarat.com/";
		}

	}, []);

};

export default ServerTools;
