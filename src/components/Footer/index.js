import Container from "@mui/material/Container";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import Typography from "@mui/material/Typography";
import YouTubeIcon from "@mui/icons-material/YouTube";

import "./styles.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <Container className="container">
        <Typography variant="body1" className="rights">
          © {new Date().getFullYear()} Dame una pata. Todos los derechos
          reservados.
        </Typography>
        <div className="links">
          <div className="social-icons">
            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icons"
            >
              <YouTubeIcon className="social-icon" />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="socialIcons"
            >
              <InstagramIcon className="social-icon" />
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icons"
            >
              <TwitterIcon className="social-icon" />
            </a>
          </div>
          <div className="links">
            <a href="/about" className="link">
              Acerca de Nosotros
            </a>
            <a href="/contact" className="link">
              Contacto
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
