import { Flex, Image, Text, VStack } from "@chakra-ui/react";

export function Banner() {
  return (
    <Flex bg="blue.800" justify="center">
      <Flex w="100%" maxWidth="1480" px="6" justify="space-between">
        <VStack align="flex-start" justify="center">
          <Text color="white" fontSize="3xl">
            5 Continentes, infinitas possibilidades.
          </Text>
          <Text fontSize="lg" fontWeight="thin" color="white">
            Chegou a hora de tirar do papel a viagem que você sempre sonhou.
          </Text>
        </VStack>
        <Image mt="12" src="/airplane.svg" alt="Airplane" />
      </Flex>
    </Flex>
  );
}
