import { Banner } from "../../components/Banner";
import { Carousel } from "../../components/Carousel";
import { Container } from "../../components/Container";
import { Header } from "../../components/Header";
import { TravelTypes } from "../../components/TravelTypes";

export default function Continent() {
  return (
    <Container>
      <Header />
      <Banner />
      <TravelTypes />

      <Carousel />
    </Container>
  );
}
