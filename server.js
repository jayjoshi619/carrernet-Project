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
  const page = parseInt(req.query.page) || 1;
  const perPage = parseInt(req.query.perPage) || 10;

  const startIndex = (page - 1) * perPage;
  const endIndex = startIndex + perPage;

  const paginatedJobs = jobs.slice(startIndex, endIndex);

  res.json({
    page,
    perPage,
    totalJobs: jobs.length,
    totalPages: Math.ceil(jobs.length / perPage),
    data: paginatedJobs
  });
});

app.get("/jobs/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const job = jobs.find(j => j.id === id);

  if (!job) {
    return res.status(404).json({ error: "Job not found" });
  }

  res.json(job);
});

app.get("/search", (req, res) => {
  const keyword = (req.query.keyword || "").toLowerCase();

  if (!keyword) {
    return res.status(400).json({
      error: "Please provide a keyword."
    });
  }

  const results = jobs.filter(job =>
    (job.title && job.title.toLowerCase().includes(keyword)) ||
    (job.company?.name &&
      job.company.name.toLowerCase().includes(keyword)) ||
    (job.location?.city &&
      job.location.city.toLowerCase().includes(keyword))
  );

  res.json({
    keyword,
    totalResults: results.length,
    data: results
  });
});

app.get("/health", (req, res) => {
  res.json({
    status: "Healthy",
    project: "CareerNet",
    team: [
      "Jay Joshi",
      "Ashish Anisetti",
      "Trung Hieu"
    ]
  });
});

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found"
  });
});

app.listen(PORT, () => {
  console.log(`CareerNet server running at http://localhost:${PORT}`);
});