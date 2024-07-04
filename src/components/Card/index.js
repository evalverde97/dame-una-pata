import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import capitalizeFirstLetter from "../../utils/formatter";
import "./index.scss";

const CardComponent = ({ pet }) => {
  const { nombre, especie, imageUrl } = pet;

  return (
    <Card className="card">
      <CardMedia
        className="card-image"
        component="img"
        image={imageUrl}
        alt={nombre}
      />
      <CardContent className="card-content">
        <Typography variant="h5" component="h2" className="card-title">
          {capitalizeFirstLetter(nombre)}
        </Typography>
        <Typography variant="body2" component="p" className="card-description">
          {especie}
        </Typography>
        <div className="card-actions">
          <Button size="small" color="primary" href={`/detalle/${pet.id}`}>
            Ver Más
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default CardComponent;
