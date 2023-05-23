import { HStack, Image, Text } from '@chakra-ui/react';
import logo from '../assets/logo-no-background.png';

const NavBar = () => {
  return (
    <HStack>
      <Image
        src={logo}
        width='200px'
        height='100px'
        objectFit='contain'
      ></Image>
      <Text>Nav Bar</Text>
    </HStack>
  );
};

export default NavBar;
