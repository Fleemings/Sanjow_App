/* eslint-disable linebreak-style */
import {
  Flex,
  Box,
  useColorMode,
} from '@chakra-ui/react';
import styled from '@emotion/styled';
import { NextPage } from 'next';
import Link from 'next/link';

import ModeSwitch from './darkMode';

type NavbarProps = {
    title?: string;
  }

const Navbar: NextPage<NavbarProps> = ({ children }) => {
  const { colorMode } = useColorMode();
  const background = {
    light: 'white',
    dark: '#171717',
  };
  //   const hover = {
  //     light: 'gray.600',
  //     dark: 'gray.300',
  //   };

  const Position = styled(Flex)`
        position: sticky;
        z-index: 10;
        top: 0;
        backdrop-filter: saturate(100%) blur(20px);
        trasition: height .5s, line-height .5s;
    `;
  const color = {
    light: 'white',
    dark: 'black',
  };

  return (
        <>
            <Position >
                <Box>
                    <Link href='/'>Home</Link>
                    <Link href='/signin'>Sign in</Link>
                    <Link href='/signup'>Sign up</Link>
                    <Link href='/user'>User</Link>
                </Box>
                <ModeSwitch />
            </Position>
            <Flex
                bg={background[colorMode]}
                color={color[colorMode]}>
                {children}
            </Flex>
        </>
  );
};

export default Navbar;
