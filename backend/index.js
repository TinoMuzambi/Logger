const express = require("express");
const cors = require("cors");
require("dotenv").config();
const feasibilityRoutes = require("./routes/feasibilityRoutes");

// Initialise app.
const app = express();

// Middleware

// Allow express to parse JSON objects.
app.use(express.json());

// For allowing cross origin requests.
app.use(cors());

// For parsing url parameters.
app.use(express.urlencoded({ extended: false }));

// Port server runs on.
const PORT = process.env.PORT || 5000;

// All requests that start with /api/feasibilities will be handled by feasibility routes.
app.use("/api/feasibilities", feasibilityRoutes);

// Health check route.
app.get("/", (req, res) => {
  res.send("API Running");
});

// Run server on specified port.
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
