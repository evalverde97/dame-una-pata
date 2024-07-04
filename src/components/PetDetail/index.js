import React from 'react';
import { Card, CardContent, Typography, Button, Chip, Box } from '@mui/material';
import { Pets, Male, Female } from '@mui/icons-material';
import './index.scss';
import capitalizeFirstLetter from '../../utils/formatter';

const PetCard = ({ pet }) => {
    const getPawIcons = (size) => {
        const totalIcons = 4;
        let filledIcons = 0;
      
        switch (size) {
          case 'bebe':
            filledIcons = 1;
            break;
          case 'pequeno':
            filledIcons = 2;
            break;
          case 'mediano':
            filledIcons = 3;
            break;
          case 'grande':
            filledIcons = 4;
            break;
          default:
            filledIcons = 0;
        }
      
        const icons = [];
        for (let i = 0; i < totalIcons; i++) {
          icons.push(
            <Pets key={i} fontSize="xsmall" style={{ color: i < filledIcons ? '#000' : '#ccc' }} />
          );
        }
      
        return icons;
      };
      const GenderIcon = ({ gender }) => {
        return (
            <>
                {gender === 'macho' ? (
                    <Male sx={{ fontSize: 32, color: 'blue' }} />
                ) : gender === 'hembra' ? (
                    <Female sx={{ fontSize: 32, color: 'pink' }} />
                ) : null}
            </>
        );
    };
  return (
    <Card className="pet-card">
        <Box className="pet-header">
          <Typography variant="h5" component="div" className="pet-name">
            {capitalizeFirstLetter(pet.nombre)}
          </Typography>
          <GenderIcon gender={pet.genero} />
        </Box>
        <Typography variant="body2" className="pet-size">
          Tamaño: {getPawIcons(pet.tamano)}
        </Typography>
        <Typography variant="body2" className="pet-personality">
          Personalidad: {pet.personalidad}
        </Typography>
        <Typography variant="body2" className="pet-interest">
          {pet.interesados} personas están interesadas
        </Typography>
        <Box className="pet-details">
          <Typography variant="body2">Peso: {pet.peso} Kg</Typography>
          <Typography variant="body2">Años: {pet.edad}</Typography>
          <Typography variant="body2">En: {pet.ubicaion}</Typography>
        </Box>
        <Button variant="contained" className="pet-button">
          PREGUNTAR POR MI
        </Button>
        <Box className="pet-actions">
          <Button size="small">Compartir</Button>
          <Button size="small">Más Información</Button>
        </Box>
    </Card>
  );
};

export default PetCard;