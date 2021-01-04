import React from 'react';
import './App.css';
import Home from './components/pages/HomePage/Home';
import Services from './components/pages/Services/Services';
import Products from './components/pages/Products/Products';
import Started from './components/pages/Started/Started';
import Story from './components/pages/Story/Story';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/pages/Footer.js/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/services' component={Services} />
        <Route path='/products' component={Products} />
        <Route path='/started' component={Started} />
        <Route path='/story' component={Story} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
