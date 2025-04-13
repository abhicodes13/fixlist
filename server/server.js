const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const jobRoutes = require("./routes/jobRoutes");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, "client/build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build", "index.html"));
});

app.use("/jobs", jobRoutes);

app.listen(PORT, () => {
  console.log(`running on ${PORT}`);
});
