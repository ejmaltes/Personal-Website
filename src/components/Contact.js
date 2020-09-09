import React from 'react';
import { ContactJumbotron } from './Jumbotron.js';
import styled from 'styled-components';

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
`;

export const Contact = () => (
  <Styles>
    <ContactJumbotron />
    <div id="contact-container">
      <h2>Email: <a href="mailto: ejmaltes@me.com">ejmaltes@me.com</a></h2>
      <hr />
      <h2><a href="https://www.linkedin.com/in/ethanmaltes/">LinkedIn</a></h2>
      <hr />
      <h2><a href="https://github.com/ejmaltes">GitHub</a></h2>
    </div>
  </Styles>
)
