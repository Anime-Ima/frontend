import { HStack, Image, useColorModeValue } from '@chakra-ui/react';
import logoLight from '../assets/logo-no-background.png';
import logoDark from '../assets/logo-black.png';
import ColorModeSwitch from './ColorModeSwitch';

const NavBar = () => {
  const logo = useColorModeValue(logoDark, logoLight);

  return (
    <HStack justifyContent='space-between'>
      <Image src={logo} width='200px' height='100px' objectFit='contain' />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
