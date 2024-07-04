import { Container, Grid, Paper, Typography, Box, Button } from '@mui/material';
import CarouselRecomendation from '../../components/CarouselRecomendation';
import PetCard from '../../components/PetDetail';
import { usePetContext } from '../../context/PetContext';

const PetDetail = () => {
  const { petsData, imageUrl, loading, error } = usePetContext();

  if (loading) {
    return <p>Cargando...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  if (!petsData) {
    return <p>No se encontró la mascota.</p>;
  }
  // TODO - hacer validaciones generales para que si existe cada propiedad se muestre, sino no
  return (
    <Container maxWidth="lg">
      {petsData.map((pet) => (
      <Paper elevation={2} sx={{ padding: 2, marginTop: 3 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={8}>
            <Box sx={{ textAlign: 'center' }}>
              <img src={imageUrl} alt={pet.nombre} style={{ width: '80%', maxHeight: '400px', objectFit: 'contain' }} />
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box sx={{ textAlign: 'center' }}>
              <PetCard pet={pet} />
            </Box>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={8}>
            <Box sx={{ textAlign: 'center' }}>
              {pet.imageUrl && <img src={pet.imageUrl} alt={pet.nombre} style={{ width: '100%', maxHeight: '400px', objectFit: 'cover' }} />}
            </Box>
          </Grid>
        </Grid>
      </Paper>
            ))}
      <Grid>
            <Box sx={{ textAlign: 'center' }}>
              <CarouselRecomendation />
            </Box>
      </Grid>
    </Container>
    );
};

export default PetDetail;
