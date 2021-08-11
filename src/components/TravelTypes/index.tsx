import { HStack } from "@chakra-ui/react";
import { FaCocktail } from "react-icons/fa";
import {
  RiBankLine,
  RiBuilding4Line,
  RiEarthLine,
  RiLifebuoyFill,
} from "react-icons/ri";
import { Item } from "./Item";

export function TravelTypes() {
  return (
    <HStack
      w="100%"
      maxWidth="1480"
      py="84"
      mx="auto"
      px="6"
      justify="space-between"
    >
      <Item icon={FaCocktail}>vida noturna</Item>
      <Item icon={RiLifebuoyFill}>praia</Item>
      <Item icon={RiBuilding4Line}>moderno</Item>
      <Item icon={RiBankLine}>clássico</Item>
      <Item icon={RiEarthLine}>e mais...</Item>
    </HStack>
  );
}
