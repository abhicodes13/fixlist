import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import jobRoutes from "./routes/jobRoutes.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

app.use("/jobs", jobRoutes);

app.listen(3000, () => {
  console.log("listening on 3000");
});
