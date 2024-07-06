// server/config.js
const express = require("express");
const path = require("path");

const configureServer = (app) => {
  // Configuración de archivos estáticos
  app.use(express.static(path.resolve(__dirname, "../build")));

  // Otros middlewares que quieras usar
  // app.use(otherMiddleware);

  return app;
};

module.exports = configureServer;
