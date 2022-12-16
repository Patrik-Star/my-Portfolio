import React, { Suspense } from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import SinglePost from "./components/SinglePost";
import playground from "./components/playground";
import Project from "./components/Project";
import NavBar from './components/NavBar';
import { ParallaxProvider } from 'react-scroll-parallax';

function App() {
  return (
    <BrowserRouter>
    <NavBar />
    <Suspense fallback="Loading...">
      <ParallaxProvider>
      <Switch>
          <Route component={Home} path='/' exact/>
          <Route component={About} path='/about' />
          <Route component={SinglePost} path='/post/:slug' />
          <Route component={playground} path='/playground' />
          <Route component={Project} path='/project' />
      </Switch>
      </ParallaxProvider>
    </Suspense>
    </BrowserRouter>
  );
}

export default App;
