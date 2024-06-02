import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #f0f0f0;
  padding: 20px;
  text-align: center;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <p>&copy; 2024 Todos los derechos reservados - Realizado por: Jhon Jairo Reyes Garcia</p>
    </FooterContainer>
  );
};

export default Footer;
