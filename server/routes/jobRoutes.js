const express = require("express");

const router = express.Router();

const jobs = [
  {
    id: "1",
    title: "window repair",
    location: "New York",
  },
  {
    id: "2",
    title: "wall painting",
    location: "Queens",
  },
];

router.get("/", async (req, res) => {
  res.send(jobs);
});
router.post("/", async (req, res) => {
  const job = req.body;
  await jobs.push({ ...job });
  await res.send("added");
});

export default router;
