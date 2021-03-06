import React, { Component } from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';
import SeaBG from '../assets/sea.jpg';
import SeaMP4 from '../assets/sea1.mp4';
import SeaWEBM from '../assets/sea1.webm';
import SeaOGV from '../assets/sea1.ogv';
import { Link } from 'react-scroll';
import { CSSTransition } from "react-transition-group";

const Styles = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@300&display=swap');

  #welcome-container {
    font-family: "Raleway", sans-serif;
    position: relative;
    background-color: rgba(0, 0, 0, 0.5);
    height: 100vh;
    width: 100vw;
    max-width: None;
    z-index: 5;
  }

  video, #video-poster {
    object-fit: cover;
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: -10;
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
  
  .nav-link {
    cursor: pointer;
  }
`;

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      appearHome: true,
      video: React.createRef(),
      poster: false
    }
  }

  async componentDidMount() {
    setTimeout(() => {
      this.state.video.current.play();
      if (this.state.video.current.paused) {
        this.setState({poster: true})
      }
    }, 500)
  }

  render() {
    const { appearHome } = this.state;
    const SeaVideo = () => {
      return this.state.poster ? (
        <img src={SeaBG} id="video-poster" />
      ) : (
        <video poster={SeaBG} ref={this.state.video} playsInline autoPlay loop muted>
          <source src={SeaMP4} type="video/mp4" />
          <source src={SeaWEBM} type="video/webm" />
          <source src={SeaOGV} type="video/ogv" />
        </video>
      )
    }
    return (
      <Styles>
        <SeaVideo />
        <Container id="welcome-container">
          <Navbar className="transparent" variant="dark">
            <Navbar.Brand href="#">EJM</Navbar.Brand>
            <Nav className="mr-auto">
              <Link className="nav-link" activeClass="active" to="about" spy={true} smooth={true} duration={1000}>
                About
              </Link>
              <Link className="nav-link" activeClass="active" to="experiences" spy={true} smooth={true} duration={1000}>
                Experiences
              </Link>
              <Link className="nav-link" activeClass="active" to="projects" spy={true} smooth={true} duration={1000}>
                Projects
              </Link>
              <Link className="nav-link" activeClass="active" to="contact" spy={true} smooth={true} duration={1000}>
                Contact
              </Link>
            </Nav>
          </Navbar>
          <CSSTransition
            in={appearHome}
            appear={true}
            timeout={2000}
          >
            <div id="name-container">
              <div id="name">
                <p ref={this.state.test}>Ethan Maltes</p>
              </div>
            </div>
          </CSSTransition>
        </Container>
      </Styles>
    )
  }
}

export default Home;
