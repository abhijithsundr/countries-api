const express = require("express");
const app = express();
const port = 3000;
const dist = require("countrycitystatejson");

app.get("/", (req, res) => {
  res.send("API is up and running!");
});

// Get all countries
app.get("/countries", (req, res) => {
  const data = dist.getCountries();
  res.send(data);
});

// Get all countries abbreviation
app.get("/countries/abbr", (req, res) => {
  const data = dist.getCountriesShort();
  res.send(data);
});

// Get country by country's abbreviation
app.get("/country/:code", (req, res) => {
  const code = req.params.code;
  const data = dist.getCountryByShort(code);
  res.send(data);
});

// Get country by country's abbreviation shortened
app.get("/country/min/:code", (req, res) => {
  const code = req.params.code;
  const data = dist.getCountryInfoByShort(code);
  res.send(data);
});

// Get all states of a country using country's abbreviation
app.get("/states/:code", (req, res) => {
  const code = req.params.code;
  const data = dist.getStatesByShort(code);
  res.send(data);
});

// Get all cities of a state using country's abbreviation and state name
app.get("/cities/:country/:state", (req, res) => {
  const code = req.params.country;
  const state = req.params.state;
  const data = dist.getCities(code, state);
  res.send(data);
});

app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});
