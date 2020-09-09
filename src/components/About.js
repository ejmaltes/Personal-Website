import React from 'react';
import { AboutJumbotron } from './Jumbotron.js';
import styled from 'styled-components';
import { Image } from 'react-bootstrap';
import AboutIMG from '../assets/me-space-1.png';

const Styles = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@300&display=swap');

  #about-container {
    font-family: "Raleway", sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 85vh;
  }

  #me-img {
    width: 30vw;
    min-width: 150px;
    margin: 10px;
    border: solid #8cc4ec 1px;
  }

  #about-content {
    max-height: 75vh;
    width: 60vw;
    margin: 10px 10px 10px 15px;
    overflow: scroll;
    font-size: 1.5rem;
  }
`;

export const About = () => (
  <Styles>
    <AboutJumbotron />
    <div id="about-container">
      <div id="image-container">
        <Image id="me-img" src={AboutIMG} roundedCircle/>
      </div>
      <div id="about-content">
        <p>
        Hi! My name is Ethan. I am currently a student at the University of Washington with a passion for Computer Science.  Right now my interests include full-stack web development and database management.  So far I've worked on a variety of projects on and off campus, and am excited to get involved in more!
        </p>
      </div>
    </div>
  </Styles>
)
