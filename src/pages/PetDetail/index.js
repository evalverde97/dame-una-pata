import React, { useEffect, useState } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { useParams } from 'react-router-dom';
import { db } from '../../db/firebase';
import { Container, Grid, Paper, Typography, Box, Button } from '@mui/material';
import CarouselRecomendation from '../../components/CarouselRecomendation';
import PetCard from '../../components/PetDetail';
import { usePetContext } from '../../context/PetContext';

const PetDetail = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const { petsData } = usePetContext();
  const mascota = petsData.find(pet => pet.id === id);

  if (error) {
    return <p>Error: {error.message}</p>;
  }
  // TODO - hacer validaciones generales para que si existe cada propiedad se muestre, sino no
  return (
    <Container maxWidth="lg">
      <Paper elevation={2} sx={{ padding: 2, marginTop: 3 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={8}>
            <Box sx={{ textAlign: 'center' }}>
              <img src={imageUrl} alt={mascota.nombre} style={{ width: '80%', maxHeight: '400px', objectFit: 'contain' }} />
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box sx={{ textAlign: 'center' }}>
              <PetCard pet={mascota} />
            </Box>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={8}>
            <Box sx={{ textAlign: 'center' }}>
              {mascota.imageUrl && <img src={mascota.imageUrl} alt={mascota.nombre} style={{ width: '100%', maxHeight: '400px', objectFit: 'cover' }} />}
            </Box>
          </Grid>
        </Grid>
      </Paper>
      <Grid>
            <Box sx={{ textAlign: 'center' }}>
              <CarouselRecomendation />
            </Box>
      </Grid>
    </Container>
  );
};

export default PetDetail;
