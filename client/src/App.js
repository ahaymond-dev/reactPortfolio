import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Pages/Home";
import About from "./components/Pages/About";
import Projects from "./components/Pages/Projects";
import Contact from "./components/Pages/Contact";
import NavTabs from "./components/NavTabs";

function App() {
  return (
    <Router>
      <div className="container">
        <Route exact path="/" component={Home} />
        <Route exact path="/about" render= {props =>
          <div>
            <NavTabs />
            <About />
          </div>
        } />
        <Route exact path="/projects" render= {props =>
          <div>
            <NavTabs />
            <Projects />
          </div>
        } />
        <Route exact path="/contact" render= {props =>
          <div>
            <NavTabs />
            <Contact />
          </div>
        } />
      </div>
    </Router>
  );
}

export default App;
