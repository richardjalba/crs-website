import React from 'react';
import styled from 'styled-components';

const HomeSection = () => {
  return (
    <HomeSectionS>
      <img
        src='https://assets.stickpng.com/images/580b585b2edbce24c47b244d.png'
        alt=''
      />
      <h2>
        WELCOME TO CINNAMON ROLL STUDIOS,
        <br />
        MAKERS OF <span>‘LEGENDS & LORE’</span> AND VR WORLDS
      </h2>
      <img
        src='https://assets.stickpng.com/images/580b585b2edbce24c47b244d.png'
        alt=''
      />
    </HomeSectionS>
  );
};

const HomeSectionS = styled.div`
  background: #9090fc;
  height: 6em;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  font-family: 'Roboto Slab', serif;
  font-size: 1.3rem;
  span {
    color: yellow;
  }
  img {
    width: 5vw;
  }
`;

export default HomeSection;
