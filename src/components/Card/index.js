import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import aguila from "../../assets/animals/aguila.jpg";
import capitalizeFirstLetter from "../../utils/formatter";
import "./index.scss";

const CardComponent = ({ animal }) => {
  const { nombre, especie } = animal;

  return (
    <Card className="card">
      <CardMedia
        className="card-image"
        component="img"
        image={aguila} //hardcoded la url de la imagen
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
          <Button size="small" color="primary" href={`/detalle/${animal.id}`}>
            Ver Más
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default CardComponent;
