import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from "swiper/core";
import { Box, Image, Text } from "@chakra-ui/react";
import { Slide } from "./Slide";

SwiperCore.use([Pagination]);

const continents = [
  {
    image: { src: "/europa.png", alt: "Europa" },
    title: "Europa",
    description: "O continente mais antigo",
  },
  {
    image: { src: "/america.png", alt: "América" },
    title: "América",
    description: "O continente Americano é um dos grandes continentes do mundo",
  },
  {
    image: { src: "/oceania.png", alt: "Oceania" },
    title: "Oceania",
    description: "O continente mais antigo",
  },
  {
    image: { src: "/asia.png", alt: "Ásia" },
    title: "Ásia",
    description: "O continente com maior território",
  },
  {
    image: { src: "/africa.png", alt: "África" },
    title: "África",
    description: "O continente possui a maior quantidade de etnias",
  },
];

export function Carousel() {
  return (
    <Swiper spaceBetween={0} slidesPerView={1} pagination={true}>
      {continents.map((continent) => (
        <SwiperSlide key={continent.title}>
          <Slide
            image={continent.image}
            title={continent.title}
            description={continent.description}
            onSlideClick={() => {}}
          ></Slide>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
