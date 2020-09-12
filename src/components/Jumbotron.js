import React from 'react';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@300&display=swap');

  .jumbo {
    display: inline-block;
    position: relative;
    margin: 0px 2.5vw 2.5vh 2.5vw;
    padding: 4vw 2vw 4vw 2vw;
    height: 10vh;
    display: flex;
    align-items: center;
    text-align: center;
    background-color: white;
    top: 2.5vh;
    font-size: 2.75rem;
    font-family: 'Raleway', sans-serif;
    font-weight: bold;
    color: #33333;
  }
`

export const AboutJumbotron = () => (
  <Styles>
    <Jumbo fluid id="about" className="jumbo">
      <Container>
        	&#60; About &#62;
      </Container>
    </Jumbo>
  </Styles>
)

export const ExperiencesJumbotron = () => (
  <Styles>
    <Jumbo fluid id="experiences" className="jumbo">
      <Container>
          &#60; Experiences &#62;
      </Container>
    </Jumbo>
  </Styles>
)

export const ContactJumbotron = () => (
  <Styles>
    <Jumbo fluid id="contact" className="jumbo">
      <Container>
          &#60; Contact &#62;
      </Container>
    </Jumbo>
  </Styles>
)
