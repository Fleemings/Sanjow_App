/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
/* eslint-disable arrow-body-style */
import {
  Flex,
  Box,
  Avatar,
  Text,
} from '@chakra-ui/react';
import { NextPage } from 'next';
import useSwr from 'swr';

import type User from '../types/globalTypes';
import handler from './api';

const IndividualUser: NextPage = () => {
  const { data, error } = useSwr<User[]>(handler);

  if (error) return <div>Failed to load API</div>;
  if (!data) return <div>Loading</div>;

  return (
        <>
          <Flex
            justifyContent="center"
            flexDirection="column"
            mt={[4, 8, 8]}
            px={[0, 4, 4]}
            >
            <h1 >Users page</h1>
              <Flex>
                {data.map((user) => (
                  <><Avatar src={user.avatar} /><Box ml='3'>
                    <Text>
                      {user.first_name}{user.last_name}
                    </Text>
                    <Text>
                      {user.email}
                    </Text>
                  </Box></>
                ))}

              </Flex>
        </Flex>
    </>
  );
};

export default IndividualUser;
