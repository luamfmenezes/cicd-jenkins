const { response } = require("express");
const express = require("express");
const app = express();

app.get("/", (request, response) => {
  response.send("Server online");
});

app.listen(3333, () => console.log("Server listening on port 3333"));
