import React from 'react';
import { Header } from '../components/Header/Header';
import { Footer } from '../components/Footer/Footer';

export const Layout = ({ children, gameOver, handleReset }) => {
  return (
    <>
      { gameOver && <button id="reset" onClick={ handleReset }>Reiniciar</button> }
      <Header />
      <section id="main">
        { children }
      </section>
      <Footer />
    </>
  );
};
