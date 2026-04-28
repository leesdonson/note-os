import express, { type Express, type Request, type Response } from "express";

const app: Express = express();

app.listen(3001, () => {
  console.log("Example app listening on port 3001!");
});

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, World!");
});
