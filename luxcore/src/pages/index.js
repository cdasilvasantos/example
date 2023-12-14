import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import Header from '../components/Header';
import HomePage from './Homepage';

function Index() {
 return (
    <ChakraProvider>
      <Header />
      <HomePage />
    </ChakraProvider>
 );
}

export default Index;