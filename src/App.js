import React from 'react';
import { Route, Switch } from 'react-router-dom';

import 'normalize.css/normalize.css';
import 'bulma/css/bulma.min.css';
import './assets/scss/default.scss';

import Navbar from './views/common/Navbar';
import Footer from './views/common/Footer';

import Home from './views/Home';
import About from './views/About';
import Error404 from './views/Error404';

import Newsletter from './components/Newsletter';

function App() {
  return (
    <div className="wrapper has-navbar-fixed-top">
      <Navbar></Navbar>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/about" component={About} />
        <Route component={Error404} />
      </Switch>
      <Newsletter></Newsletter>
      <Footer></Footer>
    </div>
  );
}

export default App;
