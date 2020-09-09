import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';
import WelcomeBG from '../assets/welcome-background.png';

import { Link } from 'react-scroll';

const Styles = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@300&display=swap');

  #welcome-container {
    font-family: "Raleway", sans-serif;
    background: url(${WelcomeBG}) no-repeat fixed bottom;
    background-size: cover;
    height: 100vh;
    width: 100vw;
    max-width: None;
    z-index: -1;
  }

  .big {
    font-family: "Raleway", sans-serif;
    font-size: 15vw;
    max-height: 35vh;
    margin: 10px;
    color: white;
    font-weight: 500;
    z-index: 1;
  }

  .right {
    text-align: right;
  }

  .transparent {
    background-color: None;
    color: white;
    font-family: "Raleway", sans-serif;
  }

  #arrow {
    position: fixed;
    bottom: 0px;
  }

  #name {
    display: inline-block;
    border: solid white 2px;
    padding: 5px;
    color: white;
    font-size: 1.5rem;
  }

  #name-container {
    margin-top: 40vh;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  p {
    margin: 0px;
  }
`;

export const Home = () => (
  <Styles>
    <Container id="welcome-container">
      <Navbar className="transparent" variant="dark">
        <Navbar.Brand href="#">EJM</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link>
            <Link activeClass="active" to="about" spy={true} smooth={true} duration={1000}>
              About
            </Link>
          </Nav.Link>
          <Nav.Link href="#">
            <Link activeClass="active" to="experiences" spy={true} smooth={true} duration={1000}>
              Experiences
            </Link>
          </Nav.Link>
          <Nav.Link href="#">
            <Link activeClass="active" to="contact" spy={true} smooth={true} duration={1000}>
              Contact
            </Link>
          </Nav.Link>
        </Nav>
      </Navbar>
      <div id="name-container">
        <div id="name">
          <p>Ethan Maltes</p>
        </div>
      </div>
    </Container>
  </Styles>
)
