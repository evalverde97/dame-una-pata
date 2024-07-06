// server.js
require("ignore-styles");
const express = require("express");
const configureServer = require("./server/config");
const configureRoutes = require("./server/routes");

const app = express();

// Configuración de middlewares
configureServer(app);

// Configuración de rutas
configureRoutes(app);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
