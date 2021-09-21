import React from 'react';
import { ProjectsJumbotron } from './Jumbotron.js';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import Wave from '../assets/wave-card.png';
import Sea from '../assets/sea-card.jpg';
import Audio from '../assets/audio-card.jpg';

import Card from 'react-bootstrap/Card';

const Styles = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@300&display=swap');
  
  #project-container {
    min-height: 70vh;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 7.5vh;
  }
  
  .card {
    width: 25vw;
    min-width: 200px;
    margin-left: 2.5vw;
    margin-right: 2.5vw;
  }
  
  .card-body {
    height: 25vh;
    overflow: scroll;
  }
`;

export const Projects = () => (
  <Styles>
    <Fade>
      <ProjectsJumbotron />
      <div id="project-container">
        <Card>
          <Card.Img variant="top" src={ Sea } />
          <Card.Body>
            <Card.Title>This Website</Card.Title>
            <Card.Text>
              A static website built using React and Bootstrap, and deployed using AWS Amplify.
            </Card.Text>
            <Card.Link href="https://github.com/ejmaltes/Personal-Website">Github</Card.Link>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="top" src={ Wave } />
          <Card.Body>
            <Card.Title>Music Discord Bot</Card.Title>
            <Card.Text>
              A discord bot that works with the YouTube and Spotify APIs to play music and playlists in discord voice channels.
            </Card.Text>
            <Card.Link href="https://github.com/ejmaltes/discord-bot">Github</Card.Link>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="top" src={ Audio } />
          <Card.Body>
            <Card.Title>Make Me A Playlist</Card.Title>
            <Card.Text>
              A website that can generate Spotify playlists for users based on their preferences and add it to their Spotify account using the Spotify API.  Frontend deployed using AWS Amplify, and backend deployed using Serverless with AWS Lambda. 
            </Card.Text>
            <Card.Link href="https://www.makemeaplaylist.app/">Website</Card.Link>
          </Card.Body>
        </Card>
      </div>
    </Fade>
  </Styles>
)
