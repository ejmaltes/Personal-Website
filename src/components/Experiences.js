import React from 'react';
import { ExperiencesJumbotron } from './Jumbotron.js';
import styled from 'styled-components';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion';
import Fade from 'react-reveal/Fade';
const Styles = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@300&display=swap');

  #experiences-content {
    font-family: "Raleway", sans-serif;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    height: 85vh;
    display: table-row;
  }

  #table {
    display: table;
    margin-left: auto;
    margin-right: auto;
  }

  .experiences-card {
    width: 75vw;
    /* height: 25vh; */
    min-width: 400px;
    display: table;
    margin-top: 2vh;
  }

  .accordion .card {
    width: 70vw;
    /* max-height: 50vh; */
    overflow: scroll;
    display: table-row;
  }

  .card-header {
    width: 70vw;
  }
`;

export const Experiences = () => (
  <Styles>
    <Fade bottom>
      <ExperiencesJumbotron />
      <div id="table">
        <div id="experiences-container">
          <div id="experiences-content">
            <Card className="experiences-card">
              <Card.Body>
                <Card.Title>Mentor</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Jumpstart - Seattle, WA</Card.Subtitle>
                <Card.Subtitle className="mb-2 text-muted">October 2018 - June 2020</Card.Subtitle>
                <Accordion>
                  <Card>
                    <Card.Header>
                      <Accordion.Toggle as={Button} variant="link" eventKey="0">
                        Tasks
                      </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                      <Card.Body>
                      <p>
                      Participated as an AmeriCorps member in an award-winning network of volunteers who provide individualized attention to prepare children attending preschool in low-income neighborhoods for school success.
                      </p>
                      <p>
                      Planned and implemented early childhood curriculum, supported family involvement, promoted children’s language and literacy skills through ongoing relationships with 19 partner children, and increased adult support in the learning environment.
                      </p>
                      <p>
                      Participated as an AmeriCorps member in an award-winning network of volunteers who provide individualized attention to prepare children attending preschool in low-income neighborhoods for school success.
                      </p>
                      <p>
                      Received intensive training and professional development in early childhood theory and practice, language and literacy development, leadership skills, and communication with families.
                      </p>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </Card.Body>
            </Card>
            <Card className="experiences-card">
              <Card.Body>
                <Card.Title>Research Assistant</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">UW Geography Department - Seattle, WA</Card.Subtitle>
                <Card.Subtitle className="mb-2 text-muted">September 2019 - June 2020</Card.Subtitle>
                <Accordion>
                  <Card>
                    <Card.Header>
                      <Accordion.Toggle as={Button} variant="link" eventKey="0">
                        Tasks
                      </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                      <Card.Body>
                      <p>
                      Conducting research to further understand the correlations behind gay and public space, and how language and location change with them.
                      </p>
                      <p>
                      Leading data collection using Python with Selenium and database management using MongoDB
                      </p>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </Card.Body>
            </Card>
            <Card className="experiences-card">
              <Card.Body>
                <Card.Title>Software Engineering Intern</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Ration - Seattle, WA</Card.Subtitle>
                <Card.Subtitle className="mb-2 text-muted">September 2019 - Present</Card.Subtitle>
                <Accordion>
                  <Card>
                    <Card.Header>
                      <Accordion.Toggle as={Button} variant="link" eventKey="0">
                        Tasks
                      </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                      <Card.Body>
                      <p>
                      Write and deploy email parsers that facilitate newsletter data collection in Python using BeautifulSoup.
                      </p>
                      <p>
                      Design and manage a dynamic API service for the app using Django REST Framework and GraphQL.
                      </p>
                      <p>
                      Integrating the app with AWS and Firebase Analytics.
                      </p>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </Card.Body>
            </Card>
            </div>
          </div>
        </div>
      </Fade>
  </Styles>
)
