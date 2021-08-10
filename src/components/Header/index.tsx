import { Flex, Image } from "@chakra-ui/react";

export function Header() {
  return (
    <Flex
      as="header"
      w="100%"
      maxW={1480}
      h="100"
      mx="auto"
      px="6"
      align="center"
      justify="center"
    >
      <Image src="/logo.svg" />
    </Flex>
  );
}
