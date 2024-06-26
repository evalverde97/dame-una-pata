import React, { useEffect, useState } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { useParams } from 'react-router-dom';
import { db } from '../../db/firebase';
import { Container, Grid, Paper, Typography, Box, Button } from '@mui/material';
import capitalizeFirstLetter, { formatString } from '../../utils/formatter';
import CarouselRecomendation from '../../components/CarouselRecomendation';
import PetCard from '../../components/PetDetail';
import Suricata from '../../assets/animals/suricata.jpg';

const PetDetail = () => {
  const { id } = useParams();
  const [mascota, setMascota] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMascota = async () => {
      try {
        const docRef = doc(db, 'animales-en-adopcion', id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setMascota(docSnap.data());
        } else {
          console.log('No such document!');
        }
      } catch (e) {
        console.error('Error fetching document: ', e);
        setError(e);
      } finally {
        setLoading(false);
      }
    };

    fetchMascota();
  }, [id]);

  if (loading) {
    return <p>Cargando...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  if (!mascota) {
    return <p>No se encontró la mascota.</p>;
  }
  // TODO - hacer validaciones generales para que si existe cada propiedad se muestre, sino no
  return (
    <Container maxWidth="lg">
      <Paper elevation={2} sx={{ padding: 2, marginTop: 3 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={8}>
            <Box sx={{ textAlign: 'center' }}>
              {Suricata && <img src={Suricata} alt={mascota.nombre} style={{ width: '80%', maxHeight: '400px', objectFit: 'contain' }} />}
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box sx={{ textAlign: 'center' }}>
              <PetCard pet={mascota} />
            </Box>
          </Grid>
          {/* <Grid item xs={12} sm={4}>
            <Typography variant="h4" component="h1" gutterBottom>
              {capitalizeFirstLetter(mascota.nombre)}
            </Typography>
            {Object.entries(mascota).map(([key, value]) => (
              <Typography key={key} variant="body1" paragraph>
                {key.charAt(0).toUpperCase() + key.slice(1)}: {formatString(value)}
              </Typography>
            ))}
            <Button variant="contained" color="primary">
              Preguntar por mi
            </Button>
          </Grid>
          <Grid>
            {mascota.descripcion && 
            <Typography variant="body1" paragraph>
                Descripción:
                {mascota.descripcion}
            </Typography>}
          </Grid> */}
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
