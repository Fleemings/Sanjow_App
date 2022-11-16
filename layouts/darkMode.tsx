/* eslint-disable linebreak-style */
import { SunIcon, MoonIcon } from '@chakra-ui/icons';
import { useColorMode, IconButton } from '@chakra-ui/react';

const ModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const iconColor = {
    light: 'black',
    dark: 'white',
  };
  return (
    <IconButton
    aria-label='Toggle dark mode'
    icon={colorMode === 'dark' ? <SunIcon /> : <MoonIcon />}
    onclick={toggleColorMode}
    color={iconColor[colorMode]}
    />
  );
};

export default ModeSwitch;
