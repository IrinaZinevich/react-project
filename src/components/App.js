import React, { Component } from 'react';
import Navbar from './Navbar';
import Header from './Header';
import Footer from './Footer';
import RoutingPages from './RoutingPages';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <Header/>
        <RoutingPages/>
        <Footer/>
      </div>
    );
  }
}

export default App;
