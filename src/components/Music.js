import React, { Component } from 'react';
import { ExperiencesJumbotron } from './Jumbotron.js';
import styled from 'styled-components';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion';

import ReadingIMG from '../assets/jstart.jpg';
const Styles = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@300&display=swap');

`;

class Music extends Component (
  handleClick(e) {
    e.preventDefault();
    console.log("clicked");
  }

  render() {
    <Styles>
      <iframe src="https://open.spotify.com/embed/playlist/5WQ1R5lhETsnKz2bGcvsrN" width="300" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
    </Styles>
  }
)
