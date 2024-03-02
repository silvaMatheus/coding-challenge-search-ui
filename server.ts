import express, { Request, Response } from "express";
import { readFile } from "fs";
import Fuse from "fuse.js";
import { join } from "path";

const app = express();
const PORT = 3001;

app.get("/api/data", (req: Request, res: Response) => {
  readFile(join(__dirname, "data.json"), "utf8", (err, data) => {
    if (err) {
      return res.status(500).send("Error reading data");
    }

    const products = JSON.parse(data);
    let results = products;

    const searchString =
      typeof req.query.search === "string" ? req.query.search : "";

    if (searchString) {
      const options = {
        keys: ["title", "description"],
        threshold: 0.4, //
      };
      const fuse = new Fuse(products, options);
      results = fuse.search(searchString).map(({ item }) => item);
    }

    setTimeout(() => res.json(results), 2000);
  });
});

app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});

export default app;
