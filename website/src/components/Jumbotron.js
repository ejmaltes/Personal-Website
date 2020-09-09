import React from 'react';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@300&display=swap');

  .jumbo {
    display: inline-block;
    margin: 2.5vh 2.5vw 2.5vh 2.5vw;
    padding: 4vw 2vw 4vw 2vw;
    height: 10vh;
    display: flex;
    align-items: center;
    background-color: white;
  }

  #about {
    border: solid #8cc4ec 1px;
    color: #8cc4ec;
  }

  #experiences {
    border: solid #fcd49c 1px;
    color: #fcd49c;
  }

  #contact {
    border: solid #bcdcf4 1px;
    color: #bcdcf4;
  }

  p {
    margin: 0px;
    font-size: 2rem;
    font-family: 'Raleway', sans-serif;
  }
`

export const AboutJumbotron = () => (
  <Styles>
    <Jumbo fluid id="about" className="jumbo">
      <Container>
        <p>About</p>
      </Container>
    </Jumbo>
  </Styles>
)

export const ExperiencesJumbotron = () => (
  <Styles>
    <Jumbo fluid id="experiences" className="jumbo">
      <Container>
        <p>Experiences</p>
      </Container>
    </Jumbo>
  </Styles>
)

export const ContactJumbotron = () => (
  <Styles>
    <Jumbo fluid id="contact" className="jumbo">
      <Container>
        <p>Contact</p>
      </Container>
    </Jumbo>
  </Styles>
)
