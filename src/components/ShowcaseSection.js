import React from 'react';
import styled from 'styled-components';
import ReactPlayer from 'react-player';
import img from '../img/legends-and-lore-vr.jpg';

const ShowcaseSection = () => {
  return (
    <ShowcaseSectionS>
      <div>
        <h1>WATCH THE TRAILER!</h1>
        <ReactPlayer url='hhttps://youtu.be/rqLvxOXKk5A' />
        <h2>A VR Role-Playing Game... with a Twist!</h2>
      </div>
    </ShowcaseSectionS>
  );
};

const ShowcaseSectionS = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  height: 83vh;
  font-family: 'Roboto Slab', serif;
  color: white;
  background: black;
  background-image: url(${img});
  background-position: center;
  background-repeat: no-repeat;
  h1 {
    margin-top: 15%;
  }
  img {
    width: 30vw;
  }
  #showcase-name {
    padding: 5rem;
  }
`;

export default ShowcaseSection;
