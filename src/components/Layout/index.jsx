import React from 'react';
import { Footer } from '../Footer';
import { Menu } from '../Menu';
import { ContentBody } from '../ContentBody';

// import { Container } from './styles';

export function Layout() {
  return (
      <>
        <Menu />
        <ContentBody />
        <Footer />
      </>
  );
}

