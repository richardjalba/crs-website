import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterS>
      <h3>
        <div>&#169; {new Date().getFullYear()} </div> <span /> Cinnamon Roll
        Studios
      </h3>
    </FooterS>
  );
};

const FooterS = styled.div`
  font-family: 'Pacifico', cursive;
  height: 20vh;
  background: #9090fc;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  font-size: 1.3rem;
  span {
    margin: 0.2rem;
  }
  h3 {
    display: flex;
  }
`;

export default Footer;
