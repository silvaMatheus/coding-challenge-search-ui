import express from "express";
import Fuse from "fuse.js";

const data = require("../data.json");

const app = express();

app.get("/api/data", async (req, res) => {
  console.log("etrnou");
  try {
    const searchString =
      typeof req.query.search === "string" ? req.query.search : "";

    let results = data;

    if (searchString) {
      const options = {
        keys: ["title", "description"],
        threshold: 0.4,
      };
      const fuse = new Fuse(data, options);
      results = fuse.search(searchString).map(({ item }) => item);
    }

    res.json(results);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error processing request");
  }
});

export default app;
