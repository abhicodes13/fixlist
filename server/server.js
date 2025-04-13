const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const jobRoutes = require("./routes/jobRoutes");
const path = require("path");
const rateLimit = require("express-rate-limit");
const app = express();
const PORT = process.env.PORT || 3000;
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: "Too many requests, please try again later.",
  headers: true, // Send the rate limit info in the response headers
});
app.use(limiter);

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
