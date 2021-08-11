import { Box, Flex, Text } from "@chakra-ui/react";
import { Banner } from "../components/Banner";
import { Carousel } from "../components/Carousel";
import { Header } from "../components/Header";
import { TravelTypes } from "../components/TravelTypes";

export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <TravelTypes />

      <Flex
        w="100%"
        maxWidth="1480"
        mx="auto"
        px="6"
        align="center"
        direction="column"
        mb="24"
      >
        <Text textAlign="center" fontSize="3xl">
          Vamos nessa?
          <br /> Então escolha seu continente
        </Text>
        <Box w="100%" maxW="1480">
          <Carousel />
        </Box>
      </Flex>
    </>
  );
}
