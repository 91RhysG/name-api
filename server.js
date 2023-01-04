const express = require("express");
const app = express();
const PORT = 8000;

const people = {
  "21 savage": {
    name: "21 Savage",
    age: 29,
    birthLocation: "London, England",
  },
  "chance the rapper": {
    name: "Chance the Rapper",
    age: 29,
    birthLocation: "Chicago, Illinois",
  },
  unknown: {
    name: "Unknown",
    age: 0,
    birthLocation: "Unknown",
  },
};

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/content/index.html");
});

app.get("/api", (req, res) => {
  res.json(people);
});

app.get("/api/:name", (req, res) => {
  const nameRequested = req.params.name.toLowerCase();
  if (people[nameRequested]) {
    res.json(people[nameRequested]);
  } else {
    res.json(people["unknown"]);
  }
});

app.listen(PORT, () => {
  console.log(`The server is now running on Port: ${PORT}`);
});
