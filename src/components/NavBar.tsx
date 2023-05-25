import { Box, Flex, Image, useColorModeValue } from '@chakra-ui/react';
import logoLight from '../assets/logo-no-background.png';
import logoDark from '../assets/logo-black.png';
import ColorModeSwitch from './ColorModeSwitch';

const NavBar = () => {
  const logo = useColorModeValue(logoDark, logoLight);

  return (
    <Flex justifyContent='space-between' padding='10px'>
      <Image src={logo} width='200px' height='100px' objectFit='contain' />
      <Box>
        <ColorModeSwitch />
      </Box>
    </Flex>
  );
};

export default NavBar;
