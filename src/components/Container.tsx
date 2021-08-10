import { Flex } from "@chakra-ui/react";
import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
}

export function Container({ children }: ContainerProps) {
  return (
    <Flex h="100vh">
      <Flex w="100%" maxWidth="1480" mx="auto" px="6" direction="column">
        {children}
      </Flex>
    </Flex>
  );
}
