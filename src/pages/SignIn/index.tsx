import React from 'react';
import {Image, ImageBackground, StyleSheet} from 'react-native';
import {Container} from './styles';
import logoImg from '../../assets/logo.png';
import Input from '../../components/Input';
import Button from '../../components/Button';
import ButtonTransparent from '../../components/ButtonTransparent';
import paraisopolis from '../../assets/paraisopolis.png';

const SignIn: React.FC = () => {
  return (
    <ImageBackground source={paraisopolis} style={styles.image}>
      <Container>
        <Image source={logoImg} />

        <Input name="email" placeholder="E-mail" />
        <Input name="password" placeholder="Senha" />

        <Button>Cadastrar</Button>

        <ButtonTransparent>Entrar</ButtonTransparent>
      </Container>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    zIndex: 99,
  },
});

export default SignIn;
