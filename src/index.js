import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import Home from './views/Home';
import Contact from './views/Contact';
import Nav from "./components/Nav";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import 'bulma/css/bulma.min.css';

import {
    BrowserRouter,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import Footer from "./components/Footer";

ReactDOM.render(
  <React.StrictMode>
      <Nav/>
      <BrowserRouter>
          <Switch>
              <Route path="/home" component={Home}/>
              <Route path="/contact" component={Contact}/>
              <Redirect to="/home"/>
        </Switch>
      </BrowserRouter>
      <Footer/>
  </React.StrictMode>,
  document.getElementById('root')
);

