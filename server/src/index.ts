import express, { Express } from "express";
import cors from "cors";
import { router } from "./controllers/routes";
export let db = require("diskdb");

const app: Express = express();
const PORT: number = 3000;

app.use(express.json());
app.use(cors());
app.use(router);

db.connect("./src/database", ["todo"]);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
