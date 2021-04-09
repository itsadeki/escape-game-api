import express, { Application, json } from "express";
import cors from "cors";
import Context from "./config/Context";
import KittenRouter from "./router/kitten.router";
import GameRouter from "./router/game.router";

const { PORT, NODE_ENV } = Context.getInstance();
const app: Application = express();

app.use(cors());
app.use(json());

app.use("/kittens", KittenRouter);
app.use("/games", GameRouter);

app.get("/", (req, res) => {
  res.status(200).send("response");
});

app.listen(PORT, () => {
  console.log(`Server running in ${NODE_ENV}`);
  if (NODE_ENV === "development") {
    console.log(`http://localhost:${PORT}`);
  }
});
