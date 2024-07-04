import React, {useEffect, useState} from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../db/firebase';
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import CardComponent from "../../components/Card";
import CarouselComponent from "../../components/Carousel";
import Testimonials from "../../components/Testimonials";

import "./index.scss";
import UploadImage from '../../components/UploadImage';

const Home = () => {

  const [animals, setAnimals] = useState([]);
  useEffect(() => {
    const fetchAnimals = async () => {
      const animalsCol = collection(db, 'animales-en-adopcion');
      const animalsSnapshot = await getDocs(animalsCol);
      const animalsList = animalsSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setAnimals(animalsList);
    };

    fetchAnimals();
  }, []);

  return (
    <div className="home">
      <CarouselComponent />
      <Testimonials />
      <Container>
        <UploadImage />
        <Grid container spacing={3}>
          {animals.map((animal) => (
            <Grid item xs={12} sm={6} md={4} key={animal.id}>
              <CardComponent animal={animal} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default Home;
