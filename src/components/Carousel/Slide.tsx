import { Box, Image, Text, Wrap, WrapItem, Flex } from "@chakra-ui/react";

interface SlideProps {
  image: {
    src: string;
    alt: string;
  };
  id: string;
  title: string;
  description: string;
  onSlideClick: (continent: string) => void;
}

export function Slide({
  image,
  id,
  title,
  description,
  onSlideClick,
}: SlideProps) {
  return (
    <Box
      height="500px"
      display="flex"
      justifyContent="center"
      alignItems="center"
      position="relative"
      onClick={() => onSlideClick(id)}
      _hover={{ cursor: "pointer" }}
    >
      <Image w="100%" fit="cover" src={image.src} alt={image.alt} />
      <Flex
        position="absolute"
        justify="center"
        align="center"
        w="100%"
        h="100%"
        bg="#1D1D1DBB"
        direction="column"
      >
        <Text fontSize="5xl" color="white">
          {title}
        </Text>
        <Text fontSize="2xl" color="white">
          {description}
        </Text>
      </Flex>
    </Box>
  );
}
