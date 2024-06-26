import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

import "./styles.scss";

const Testimonials = () => {
  return (
    <section className="testimonials">
      <Container>
        <Typography variant="h5" align="center" gutterBottom>
          Testimonios
        </Typography>
        <div className="testimonial-grid">
          <div className="testimonial">
            <Typography variant="body1" gutterBottom>
              "¡Adoptar a mi perro fue la mejor decisión que he tomado! ¡Es
              increíble!"
            </Typography>
            <Typography variant="subtitle1" className="author">
              - Juan Pérez
            </Typography>
          </div>
          <div className="testimonial">
            <Typography variant="body1" gutterBottom>
              "Estoy muy feliz con mi nuevo gato. ¡Es adorable y me hace muy
              feliz!"
            </Typography>
            <Typography variant="subtitle1" className="author">
              - María Gutiérrez
            </Typography>
          </div>
          {/* Puedes agregar más testimonios según sea necesario */}
        </div>
      </Container>
    </section>
  );
};

export default Testimonials;
