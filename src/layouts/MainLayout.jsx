import React from 'react';

import Header from '../components/Header';
import Container from '../components/Container';
import Navbar from '../components/Navbar';

const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      <Container className='mt-3 flex'>
        <Navbar />
        <main className='ml-4 w-full'>qwe</main>
      </Container>
    </>
  );
};

export default MainLayout;
