import React, { Component } from 'react';
import { Home } from './components/Home.js'
import { About } from './components/About.js'
import { Experiences } from './components/Experiences.js'
import { Contact } from './components/Contact.js'
// import 'bootstrap/dist/css/bootstrap.css';
import { Element } from 'react-scroll'

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Element name='home'>
          <Home />
        </Element>
        <Element name='about'>
          <About />
        </Element>
        <Element name='experiences'>
          <Experiences />
        </Element>
        <Element name='contact'>
          <Contact />
        </Element>
      </React.Fragment>
    );
  }
}

export default App;
