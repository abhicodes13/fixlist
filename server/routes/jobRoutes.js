const express = require("express");

const router = express.Router();

// Mock database of jobs
const jobs = [
  {
    id: "1",
    title: "Window Repair",
    location: "New York",
  },
  {
    id: "2",
    title: "Wall Painting",
    location: "Queens",
  },
];

// Get all jobs
router.get("/", (req, res) => {
  res.json(jobs); // Use res.json instead of res.send for JSON data
});

// Add a new job
router.post("/", (req, res) => {
  const job = req.body;
  jobs.push({ ...job });
  res.send("Job added successfully");
});

module.exports = router;
