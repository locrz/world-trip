import { Box, Image, Avatar, Flex } from "@chakra-ui/react";

interface CardProps {
  city: string;
  country: string;
  flag: string;
  image: string;
}

export function Card({ city, country, flag, image }: CardProps) {
  return (
    <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Image src={image} alt={city} />

      <Flex p="6" justify="space-between">
        <Box>
          <Box
            mt="1"
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
            isTruncated
          >
            {city}
          </Box>

          <Box>{country}</Box>
        </Box>
        <Avatar name={city} src={flag} />
      </Flex>
    </Box>
  );
}
