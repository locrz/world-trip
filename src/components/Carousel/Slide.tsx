import { Box, Image, Text } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";

interface SlideProps {
  image: {
    src: string;
    alt: string;
  };

  title: string;
  description: string;
  onSlideClick: () => void;
}

export function Slide({ image, onSlideClick }: SlideProps) {
  return (
    <Box
      height="500px"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Image w="100%" fit="cover" src={image.src} alt={image.alt} />
    </Box>
  );
}
