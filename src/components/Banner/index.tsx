import { Flex, Image, Text, VStack } from "@chakra-ui/react";

export function Banner() {
  return (
    <Flex bg="blue.900" justify="center">
      <Flex w="100%" maxWidth="1480" px="6" position="relative" height="350px">
        <VStack align="flex-start" justify="center">
          <Text color="white" fontSize="3xl">
            5 Continentes, infinitas possibilidades.
          </Text>
          <Text fontSize="lg" fontWeight="thin" color="white">
            Chegou a hora de tirar do papel a viagem que você sempre sonhou.
          </Text>
        </VStack>
        <Image
          right="0"
          bottom="-50px"
          src="/airplane.svg"
          alt="Airplane"
          position="absolute"
        />
      </Flex>
    </Flex>
  );
}
