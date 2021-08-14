import { Box, Flex, Text, Image, HStack, SimpleGrid } from "@chakra-ui/react";
import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import { Banner } from "../../components/Banner";
import { Card } from "../../components/Card";
import { Carousel } from "../../components/Carousel";
import { Container } from "../../components/Container";
import { Header } from "../../components/Header";
import { TravelTypes } from "../../components/TravelTypes";

interface ContinentProps {
  continent: string;
  image: string;
}

export default function Continent({ continent, image }: ContinentProps) {
  return (
    <>
      <Header />
      <Flex height="500px" justify="center" position="relative">
        <Image w="100%" fit="cover" src={image} alt={continent} />
        <Flex
          bg="#1D1D1DBB"
          w="100%"
          justify="center"
          h="100%"
          position="absolute"
        >
          <Flex w="100%" maxWidth="1480px" align="flex-end" p="12">
            <Text fontSize="5xl" color="white">
              {continent.toUpperCase()}
            </Text>
          </Flex>
        </Flex>
      </Flex>
      <Container my="24">
        <Flex direction="row" mb="24">
          <Text flex="1" fontSize="lg">
            A Europa é, por convenção, um dos seis continentes do mundo.
            Compreendendo a península ocidental da Eurásia, a Europa geralmente
            divide-se da Ásia a leste pela divisória de águas dos montes Urais,
            o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
          </Text>
          <HStack spacing="4" flex="1" justify="center">
            <Box justify="center" align="center" textAlign="center" w="120px">
              <Text color="yellow.500" fontSize="3xl">
                50
              </Text>
              <Text>países</Text>
            </Box>
            <Box justify="center" align="center" textAlign="center" w="120px">
              <Text color="yellow.500" fontSize="3xl">
                60
              </Text>
              <Text>línguas</Text>
            </Box>
            <Box justify="center" align="center" textAlign="center" w="120px">
              <Text color="yellow.500" fontSize="3xl">
                27
              </Text>
              <Text>cidades +100</Text>
            </Box>
          </HStack>
        </Flex>
        <Text fontSize="3xl">Cidades +100</Text>
        <SimpleGrid columns={4} spacing={10}>
          <Card city="Londres" country="Reino Unido" flag="" image={image} />
          <Card city="Paris" country="França" flag="" image={image} />
          <Card city="Roma" country="Itália" flag="" image={image} />
          <Card city="Praga" country="República Tcheca" flag="" image={image} />
          <Card city="Amsterdã" country="Holanda" flag="" image={image} />
        </SimpleGrid>
      </Container>
      {/* <TravelTypes /> */}
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { continent } = params;

  return {
    props: {
      continent,
      image: `/${continent}.png`,
    },
  };
};
