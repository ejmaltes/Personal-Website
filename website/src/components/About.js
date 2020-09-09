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
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed posuere lectus, interdum molestie magna. Morbi a laoreet turpis. Sed auctor felis a libero pretium, in porta lectus sodales. Ut ut leo vitae orci imperdiet consequat. Pellentesque pellentesque elementum libero, a feugiat tellus tempus at. Pellentesque malesuada diam sed tempus convallis. Etiam cursus libero id justo pellentesque sagittis. Mauris eu ipsum tristique, interdum leo at, scelerisque dolor. Maecenas tristique pharetra sem non tempus. Aliquam erat volutpat. Mauris varius sapien sapien, quis vulputate lorem hendrerit non. Duis et mauris cursus, vehicula turpis eu, ullamcorper quam. In gravida consequat tortor, eu egestas ipsum laoreet sagittis. Donec vel congue est. Donec quis quam ut ante volutpat fringilla id in justo.
        </p>
        <p>
        Morbi dapibus, nulla vitae sodales iaculis, justo nibh volutpat nisl, non rhoncus nisl tortor at dolor. Nam ullamcorper ex massa, vel ultricies quam feugiat id. Donec libero nisl, venenatis eu nunc vel, ornare viverra felis. Vivamus ac nulla purus. Vestibulum velit enim, placerat eget faucibus id, consectetur a mi. Sed sem purus, pharetra quis erat vel, ullamcorper consequat dui. Sed faucibus, metus vitae dapibus pharetra, odio eros viverra ipsum, ut gravida est risus non dolor. Nam vel ligula eu arcu consequat egestas nec vitae risus. Mauris fermentum est rhoncus, gravida sapien vel, accumsan elit. Sed hendrerit sit amet sem ac consequat.
        </p>
      </div>
    </div>
  </Styles>
)
