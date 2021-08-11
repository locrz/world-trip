import { Flex, FlexProps } from "@chakra-ui/react";
import { ReactNode } from "react";

interface ContainerProps extends FlexProps {
  children: ReactNode;
}

export function Container({ children, ...rest }: ContainerProps) {
  return (
    <Flex h="100vh">
      <Flex
        w="100%"
        maxWidth="1480"
        mx="auto"
        px="6"
        direction="column"
        {...rest}
      >
        {children}
      </Flex>
    </Flex>
  );
}
