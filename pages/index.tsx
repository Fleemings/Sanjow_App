/* eslint-disable arrow-body-style */
import {
  Flex,
} from '@chakra-ui/react';
import { NextPage } from 'next';

import Navbar from '../layouts/navbar';

const Home: NextPage = () => {
  return (
    <>
    <Navbar/>
      <Flex
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        mt={[4, 8, 8]}
        px={[0, 4, 4]}
      >
      <Flex>
        <h1>Welcome to Sanjow App</h1>
      </Flex>
      </Flex>
    </>
  );
};

export default Home;
