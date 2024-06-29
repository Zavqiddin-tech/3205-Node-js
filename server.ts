import express, { Express, Request, Response } from "express";
const cors = require("cors");
const app: Express = express();

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

app.use("/api", require("./routes/index"));

const PORT: number = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
