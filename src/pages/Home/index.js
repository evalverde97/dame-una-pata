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
import { usePetContext } from '../../context/PetContext';

const Home = () => {
  const { petsData } = usePetContext();

  return (
    <div className="home">
      <CarouselComponent />
      <Testimonials />
      <Container>
        <Grid container spacing={3}>
          {petsData.map((pet) => (
            <Grid item xs={12} sm={6} md={4} key={pet.id}>
              <CardComponent pet={pet} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default Home;
