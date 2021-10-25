const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(require("./routes/index"));

const port = 4000;
app.listen(port);
console.log(`Server on port ${port}`);
