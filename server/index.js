const axios = require("axios");
const express = require("express");
const path = require("path");

const PUERTO = 5000;
const app = express();

const axiosURL = axios.create({
    baseURL: "https://api.mercadolibre.com",
  header: {Auth: "Simple AUTH"},
  timeout: 5000,
})


