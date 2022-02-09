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
import {CSSTransition, TransitionGroup,} from 'react-transition-group';

import {initializeApp} from "firebase/app";
import {getAnalytics} from "firebase/analytics";
import {getPerformance} from "firebase/performance";
import Motorcycle from "./views/Motorcycle";
import FAQ from "./views/FAQ";
import Car from "./views/Car";

const firebaseConfig = {
    apiKey: "AIzaSyDQ7ZlOAt9gX0CWzI52mgiueyCJkElS1NU",
    authDomain: "debbie-does-driving.firebaseapp.com",
    projectId: "debbie-does-driving",
    storageBucket: "debbie-does-driving.appspot.com",
    messagingSenderId: "387550847923",
    appId: "1:387550847923:web:9784521d52dbebb3ae61c6",
    measurementId: "G-EJ66WNWH5K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
getAnalytics(app);
getPerformance(app);


ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Nav/>
            <Route render={({location}) => (
                <TransitionGroup>
                    <CSSTransition
                        key={location.key}
                        timeout={300}
                        classNames="fade"
                    >
                        <Switch location={location}>
                            <Route path="/home" component={Home}/>
                            <Route path="/motorcycle" component={Motorcycle}/>
                            <Route path="/car" component={Car}/>
                            <Route path="/contact" component={Contact}/>
                            <Route path="/faq" component={FAQ}/>
                            <Redirect to="/home"/>
                        </Switch>
                    </CSSTransition>
                </TransitionGroup>
            )}/>
        </BrowserRouter>
        <Footer/>
    </React.StrictMode>,
    document.getElementById('root')
);

