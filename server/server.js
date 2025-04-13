import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import jobRoutes from "./routes/jobRoutes.js";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const app = express();
const PORT = process.env.PORT || 3000;
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
app.use(express.static(path.join(__dirname, "client/build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build", "index.html"));
});

app.use("/jobs", jobRoutes);

app.listen(PORT, () => {
  console.log(`running on ${PORT}`);
});
