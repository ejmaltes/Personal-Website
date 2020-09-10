import React, { Component } from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';
import WelcomeBG from '../assets/welcome-background.png';
import { Link } from 'react-scroll';
import { CSSTransition } from "react-transition-group";

const Styles = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@300&display=swap');

  #welcome-container {
    font-family: "Raleway", sans-serif;
    background: url(${WelcomeBG}) no-repeat fixed center;
    background-size: cover;
    image-rendering: -webkit-optimize-contrast;
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

    /* appear - on page load */
  .appear {
      opacity: 0;
      z-index: 1;
      transform: scale(0.97) translateY(5px);
  }
  .appear.appear-active {
    opacity: 1;
    transform: scale(1) translateY(0);
    transition: opacity 500ms linear 500ms, transform 500ms ease-in-out 500ms;
  }
`;

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      appearHome: true
    }
  }


  render() {
    const { appearHome } = this.state;
    return (
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
          <CSSTransition
            in={appearHome}
            appear={true}
            timeout={2000}
          >
            <div id="name-container">
              <div id="name">
                <p>Ethan Maltes</p>
              </div>
            </div>
          </CSSTransition>
        </Container>
      </Styles>
    )
  }
}

export default Home;
