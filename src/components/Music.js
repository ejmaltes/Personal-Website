import React, { Component } from 'react';
import styled from 'styled-components';
import Image from 'react-bootstrap/Image';
import MusicNote from '../assets/music-note-inverted.png';

import ReadingIMG from '../assets/jstart.jpg';
const Styles = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@300&display=swap');

  .hidden {
    display: none;
  }

  .ah.bm.b6.bn {
    display: none;
  }
`;

export const Music = () => (
  <Styles>
    <iframe src="https://open.spotify.com/embed/playlist/5WQ1R5lhETsnKz2bGcvsrN" width="300" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
  </Styles>
)
