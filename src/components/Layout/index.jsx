import React from 'react';
import { Footer } from '../Footer';
import { Menu } from '../Menu';
import { ContentBody } from '../ContentBody';

// import { Container } from './styles';

export function Layout() {
  return (
      <>
        <Menu/>      
        <ContentBody>
        <h1>Bem vindo</h1>
        <h1>Bem vindo</h1>
        <h1>Bem vindo</h1>
        <h1>Bem vindo</h1>
        </ContentBody>
        <Footer />
      </>
  );
}

