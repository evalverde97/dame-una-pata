import React from 'react';
import { Container, Typography, Grid, Box } from '@mui/material';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Importa los estilos del carrusel

const images = [
  'https://via.placeholder.com/300x200',
  'https://via.placeholder.com/300x200',
  'https://via.placeholder.com/300x200',
  'https://via.placeholder.com/300x200',
  'https://via.placeholder.com/300x200',
  'https://via.placeholder.com/300x200',
  'https://via.placeholder.com/300x200',
  'https://via.placeholder.com/300x200',
];

const CarouselRecomendation = () => {
  return (
    <Container maxWidth="xl" sx={{ marginTop: 4 }}>
      <Typography variant="h5" component="h2" gutterBottom>
        También puede interesarte
      </Typography>
      <Carousel showArrows={true} showStatus={false} showThumbs={false} infiniteLoop={true} autoPlay={true} interval={3000}>
        {images.map((img, index) => (
          <Box key={index} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%' }}>
            <Grid container spacing={2}>
              {images.slice(index, index + 4).map((img, i) => (
                <Grid item xs={12} sm={6} md={3} key={i}>
                  <Box
                    component="img"
                    src={img}
                    alt={`Imagen ${i}`}
                    sx={{ width: '100%', height: 'auto' }}
                  />
                </Grid>
              ))}
            </Grid>
          </Box>
        ))}
      </Carousel>
    </Container>
  );
};

export default CarouselRecomendation;
