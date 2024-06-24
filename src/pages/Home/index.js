import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import Banner from "../../components/Banner";
import CardComponent from "../../components/Card";
import AdoptionModal from "../../components/AdoptionModal";
import Faqs from "../../components/Faqs";
import Testimonials from "../../components/Testimonials";

import aguila from "../../assets/animals/aguila.jpg";

import "./index.scss";

const Home = () => {
  // Ejemplo de datos de animales (pueden ser estáticos o dinámicos)
  const animals = [
    {
      id: 1,
      name: "Rex",
      description: "Perro de raza mixta, juguetón y cariñoso.",
      imageUrl: "../../assets/animals/aguila.jpg",
    },
    {
      id: 2,
      name: "Luna",
      description: "Gata negra, tranquila y sociable con otros gatos.",
      imageUrl: { aguila },
    },
    {
      id: 3,
      name: "Luna",
      description: "Gata negra, tranquila y sociable con otros gatos.",
      imageUrl: { aguila },
    },
    {
      id: 4,
      name: "Luna",
      description: "Gata negra, tranquila y sociable con otros gatos.",
      imageUrl: { aguila },
    },
  ];

  return (
    <div className="home">
      {/* <CarouselComponent /> */}
      <Banner />
      <AdoptionModal className="adoption-modal" />
      <Faqs />
      <Container>
        <Grid container spacing={3} classname="home-container_grid">
          {animals.map((animal) => (
            <Grid item xs={12} sm={6} md={4} key={animal.id}>
              <CardComponent animal={animal} />
            </Grid>
          ))}
        </Grid>
      </Container>
      <Testimonials />
    </div>
  );
};

export default Home;
