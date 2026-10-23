const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

// Test route to confirm the server works
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", app: "AgriMboa API" });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`AgriMboa API running on http://localhost:${PORT}`);
});