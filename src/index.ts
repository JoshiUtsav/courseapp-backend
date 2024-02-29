import express, { Request, Response } from "express";
import http from "http";
import Router from "./routes/routes";

const app = express();
const server = http.createServer(app);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", Router);

app.use(
  (err: Error, req: Request, res: Response, next: (err?: Error) => void) => {
    console.error(err.stack);
    res.status(500).send("Something went wrong!");
  }
);

app.use(express.static("public"));

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log("listening on port " + PORT);
});
