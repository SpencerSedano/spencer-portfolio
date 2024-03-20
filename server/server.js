const express = require("express");
const app = express();

app.use(express.static("public"));

const path = require("path");
app.use(express.static(path.join(__dirname)));

const port = process.env.PORT || 3001; // Use the provided PORT or default to 3000

app.listen(port, () => {
  console.log(`Server is running at ${port}`);
});
