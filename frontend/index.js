echo 'const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello from the frontend!");
});

app.listen(port, () => {
  console.log(`Frontend running at http://localhost:${port}`);
});' > index.js
