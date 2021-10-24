import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import Home from './components/Home';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import 'bulma/css/bulma.min.css';


import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";


ReactDOM.render(
  <React.StrictMode>
      <Router>
          <Switch>
              <Route path="/home">
                  <Home/>
              </Route>
              <Redirect to="/home"/>
        </Switch>
      </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

