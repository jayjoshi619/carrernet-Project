const express = require("express");
const path = require("path");
const jobs = require("./data/jobs.json");

const app = express();
const PORT = 5500;

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views/index.html"));
});

app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "views/about.html"));
});

app.get("/jobs", (req, res) => {
  res.json(jobs);
});

app.get("/jobs/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const job = jobs.find(j => j.id === id);

  if (!job) {
    return res.status(404).json({ error: "Job not found" });
  }

  res.json(job);
});

app.get("/health", (req, res) => {
  res.json({
    status: "OK",
    project: "CareerNet",
    team: ["Jay Joshi", "Ashish Anisetti", "Trung Hieu"]
  });
});

app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

app.listen(PORT, () => {
  console.log(`CareerNet server running at http://localhost:${PORT}`);
});