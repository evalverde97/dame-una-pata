const path = require("path");
const fs = require("fs").promises;
const React = require("react");
const ReactDOMServer = require("react-dom/server");
const {
  App,
  AboutUs,
  Contact,
  Home,
  LogIn,
  MyAccount,
  PetDetail,
  AdoptionForm,
} = require("../src/App");

const renderComponent = (Component) => {
  return ReactDOMServer.renderToString(React.createElement(Component));
};

const configureRoutes = (app) => {
  app.get("*", async (req, res) => {
    let Component = Home;

    switch (req.path) {
      case "/login":
        Component = LogIn;
        break;
      case "/":
        Component = Home;
        break;
      case "/detalle/:id":
        Component = PetDetail;
        break;
      case "/about":
        Component = AboutUs;
        break;
      case "/contact":
        Component = Contact;
        break;
      case "/account":
        Component = MyAccount;
        break;
      case "/formulario":
        Component = AdoptionForm;
        break;
      default:
        Component = Home; // Ruta por defecto
        break;
    }

    try {
      const appString = renderComponent(Component);
      const indexFile = await fs.readFile(
        path.resolve(__dirname, "../build", "index.html"),
        "utf8"
      );

      const html = indexFile.replace(
        '<div id="root"></div>',
        `<div id="root">${appString}</div>`
      );
      res.send(html);
    } catch (err) {
      console.error("Error reading index.html:", err);
      res.status(500).send("Server error");
    }
  });

  return app;
};

module.exports = configureRoutes;
