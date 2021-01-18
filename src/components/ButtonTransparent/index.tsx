import React from 'react';
import {Container, ButtonText} from './styles';

const ButtonTransparent: React.FC = ({children}) => (
  <Container>
    <ButtonText>{children}</ButtonText>
  </Container>
);

export default ButtonTransparent;
