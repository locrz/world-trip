import { Flex, HStack, Image, Text, VStack } from "@chakra-ui/react";

export function Banner() {
  return (
    <Flex bg="blue.800" justify="center">
      <Flex>
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
