import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

import "./styles.scss";

const Faqs = () => {
  return (
    <section className="faqs">
      <Container>
        <Typography variant="h4" align="center" gutterBottom>
          FAQS
        </Typography>
        <div className="faq-container_grid">
          <div className="faq-container">
            <Typography variant="body1" gutterBottom>
              "¡Adoptar a mi perro fue la mejor decisión que he tomado! ¡Es
              increíble!"
            </Typography>
            <Typography variant="subtitle1" className="author">
              - Juan Pérez
            </Typography>
          </div>
          <div className="faq-container">
            <Typography variant="subtitle1" className="author">
              ¿Qué es adoptar responsablemente?
            </Typography>
            <Typography variant="body1" gutterBottom>
              lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
            </Typography>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Faqs;
