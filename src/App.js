import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Pricing from "./pages/Pricing";
import Error from "./pages/Error";
import Features from "./pages/Features";
import Bloglist from "./pages/Bloglist";
import Bloggrid from "./pages/Bloggrid";
import Blogdetails from "./pages/Blogdetails";
import Contact from "./pages/Contact";
function App() {
  return (
    <Router basename="/">
      <Switch>
        <Route
          exact path={`${process.env.PUBLIC_URL + "/about"}`} component={About}
        />
        <Route
          exact path={`${process.env.PUBLIC_URL + "/pricing"}`} component={Pricing}
        />
        <Route
          exact path={`${process.env.PUBLIC_URL + "/error"}`} component={Error}
        />
        <Route
          exact path={`${process.env.PUBLIC_URL + "/features"}`} component={Features}
        />
        <Route
          exact path={`${process.env.PUBLIC_URL + "/blog-list"}`} component={Bloglist}
        />
        <Route
          exact path={`${process.env.PUBLIC_URL + "/blog-grid"}`} component={Bloggrid}
        />
        <Route
          exact path={`${process.env.PUBLIC_URL + "/blog-details"}`} component={Blogdetails}
        />
        <Route
          exact path={`${process.env.PUBLIC_URL + "/contact"}`} component={Contact}
        />
				  <Route
	          exact path={`${process.env.PUBLIC_URL + "/home"}`} component={Home}
	        />
        <Route
          exact path={`${process.env.PUBLIC_URL + "/"}`} component={Home}
        />
      </Switch>
    </Router>
  );
}

export default App;
