import { Box, Icon, Text } from "@chakra-ui/react";
import { ElementType } from "react";
import { FaCocktail } from "react-icons/fa";

interface ItemProps {
  icon: ElementType;
  children: string;
}

export function Item({ icon, children }: ItemProps) {
  return (
    <Box textAlign="center" p="6">
      <Icon as={icon} fontSize="85" color="yellow.500" />
      <Text mt="4">{children}</Text>
    </Box>
  );
}
