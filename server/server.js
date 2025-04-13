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

app.get("/", async (req, res) => {
  res.send("Hello");
});
// API routes for job listings
app.use("/jobs", jobRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
