const express = require("express");
const { json } = require("body-parse");
const cores = require("cors");

const app = express();

app.use(json());
app.use(cores);

const port = 3001;
app.listen(port, () => {
  console.log(`Server now listening in port ${port}`);
});
