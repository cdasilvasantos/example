// components/Header.js
import React from 'react';
import { Stack, Text, Button, Box } from '@chakra-ui/react';

const Header = () => (
  <Box bg="#331B1B" padding="5px"> {/* Set your desired background color and padding */}
    <Stack justify="flex-start" align="flex-start" spacing="10px">
      <Stack direction="row" justify="space-between" align="center" spacing="250px">
        <Stack direction="row" justify="center" align="center" spacing="10px">
          <Text
            fontFamily="Ephesis"
            fontWeight="regular"
            fontSize="80px"
            letterSpacing="0.12em"
            color="#FFFFFF"
          >
            LuxCore
          </Text>
        </Stack>
        <Stack direction="row" align="center" >
          <Text
            fontFamily="Ruluko"
            fontWeight="regular"
            fontSize="22px"
            textTransform="uppercase"
            color="#FFFFFF"
            justify="flex-end"
          >
            About{' '}
          </Text>
        </Stack>
        <Stack direction="row" align="center" spacing="5px">
          <Text
            fontFamily="Ruluko"
            fontWeight="regular"
            fontSize="22px"
            textTransform="uppercase"
            color="#FFFFFF"
            justify="flex-end"
          >
            Menu{' '}
          </Text>
        </Stack>
        <Stack
          padding="10px"
          justify="flex-end"
          align="flex-end"
          spacing="5px"
        >
          <Button
            fontFamily="Ruluko"
            fontWeight="regular"
            fontSize="22px"
            textTransform="uppercase"
            endIcon={false}
            startIcon={false}
            size="sm"
            variant="ghost"
            color="#FFFFFF"
            isIconOnly={false}
            width="164px"
            height="51px"
          >
            Reservations
          </Button>
        </Stack>
      </Stack>
    </Stack>
  </Box>
);

export default Header;
