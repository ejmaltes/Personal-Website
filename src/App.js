import React, { Component } from 'react';
import Home from './components/Home.js';
import About from './components/About.js';
import { Experiences } from './components/Experiences.js';
import { Contact } from './components/Contact.js';
import { Element } from 'react-scroll';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';

const Styles = styled.div`
  #content {
    background-color: white;
    position: relative;
    max-width: None;
    z-index: 5;
  }

  .hidden {
    visibility: hidden;
    opacity: 0;
    transition: visibility 3s linear, opacity 3s linear;
  }

  #experiences, #contact {
    margin-top: 15vh;
  }
`;

class App extends Component {
  render() {
    return (
      <Styles>
        <Fade wait={100}>
          <div>
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
          </div>
        </Fade>
      </Styles>
    );
  }
}

export default App;
