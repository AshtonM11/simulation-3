const express = require("express");
const bodyParser = require("body-parser");
const massive = require("massive");

const controller = require("./controller");
const cors = require("cors");
require("dotenv").config();

const app = express();

const port = process.env.PORT || 3005;
app.listen(port, () => {
  console.log(`Server listening on port ${port}.`);
});
