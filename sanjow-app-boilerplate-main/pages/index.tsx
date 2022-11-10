import { InfoOutlineIcon } from '@chakra-ui/icons';
import {
  Flex,
  IconButton, Text,
  useDisclosure,
  useToast,
} from '@chakra-ui/react';
import { NextPage } from 'next';

const Home: NextPage = () => {
  const { isOpen, onToggle } = useDisclosure();
  const toast = useToast({
    title: 'Error',
    description: 'No more info available',
    status: 'error',
    duration: 5000,
    isClosable: true,
    position: 'bottom',
  });
  // State

  // Hooks

  // Handlers
  const messageHandler = () => {
    onToggle();
    if (!isOpen) {
      toast({
        title: 'Cool',
        description: 'You clicked info button!',
        status: 'success',
      });
    }
  };
  // Template
  return (
    <div>
      <Flex
        alignItems="center"
        justifyContent="center"
      >
        <Flex direction="column" mt={100}>
          <h1>MY SANJOW APP</h1>
          <Text align="center">
            {isOpen
              ? 'Info button was clicked'
              : 'Click me...'
            }
          </Text>
          <IconButton
            aria-label="Login"
            icon={<InfoOutlineIcon color="sanjow.100" w={6} h={6}/>}
            variant="ghost"
            onClick={messageHandler}
            size="lg"
            textAlign="center"
            margin="auto"
          />

        </Flex>
      </Flex>
    </div>
  );
};

export default Home;
