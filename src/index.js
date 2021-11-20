import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import Home from './views/Home';
import Contact from './views/Contact';
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import 'bulma/css/bulma.min.css';
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";

import {initializeApp} from "firebase/app";
import {getAnalytics} from "firebase/analytics";
import {getPerformance} from "firebase/performance";
import Motorcycle from "./views/Motorcycle";
import FAQ from "./views/FAQ";

const firebaseConfig = {
    apiKey: "AIzaSyDjTrfQQhM0pGY5RGWfzDDfyhGp9IL-wf8",
    authDomain: "debbie-does-driving-dev.firebaseapp.com",
    projectId: "debbie-does-driving-dev",
    storageBucket: "debbie-does-driving-dev.appspot.com",
    messagingSenderId: "721334462823",
    appId: "1:721334462823:web:aee7724d57768b51caa7c2",
    measurementId: "G-9LZ4P77YRG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
getAnalytics(app);
getPerformance(app);

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Nav/>
            <Switch>
                <Route path="/home" component={Home}/>
                <Route path="/motorcycle" component={Motorcycle}/>
                <Route path="/contact" component={Contact}/>
                <Route path="/faq" component={FAQ}/>
                <Redirect to="/home"/>
            </Switch>
        </BrowserRouter>
        <Footer/>
    </React.StrictMode>,
    document.getElementById('root')
);

