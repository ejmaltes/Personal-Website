import React from 'react';
import { ContactJumbotron } from './Jumbotron.js';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import Icon from '../assets/wave.png';
const Styles = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@300&display=swap');

  #contact-container {
    font-family: "Raleway", sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    flex-direction: column;
    height: 85vh;
  }

  footer {
    text-align: center;
    font-size: 0.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  img {
    height: 5vh;
    width: auto;
  }
`;

export const Contact = () => (
  <Styles>
    <Fade bottom>
      <ContactJumbotron />
      <div id="contact-container">
        <h2>Email: <a href="mailto: ejmaltes@me.com">ejmaltes@me.com</a></h2>
        <hr />
        <h2><a href="https://www.linkedin.com/in/ethanmaltes/">LinkedIn</a></h2>
        <hr />
        <h2><a href="https://github.com/ejmaltes">GitHub</a></h2>
      </div>
    </Fade>
    <footer>
      <img src={Icon} />
      <p>
        Website icon found <a href="https://www.thedoodlelibrary.com/places/wave">here</a>
      </p>
    </footer>
  </Styles>
)
