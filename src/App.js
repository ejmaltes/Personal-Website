import React, { Component } from 'react';
import Home from './components/Home.js';
import About from './components/About.js';
import { Experiences } from './components/Experiences.js';
import { Contact } from './components/Contact.js';
import { Element } from 'react-scroll';
import styled from 'styled-components';

const Styles = styled.div`
  #content {
    background-color: white;
  }
`;

class App extends Component {
  render() {
    return (
      <Styles>
        <React.Fragment>
          <Element name='home' id='home'>
            <Home />
          </Element>
          <div id="content">
            <Element name='about' id='about'>
              <About />
            </Element>
            <Element name='experiences' id='experiences'>
              <Experiences />
            </Element>
            <Element name='contact' id='contact'>
              <Contact />
            </Element>
          </div>
        </React.Fragment>
      </Styles>
    );
  }
}

export default App;
