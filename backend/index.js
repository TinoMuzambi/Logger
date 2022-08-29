const express = require("express");
require("dotenv").config();
const feasibilityRoutes = require("./routes/feasibilityRoutes");

const app = express();
app.use(express.json());
const PORT = process.env.PORT || 5000;

app.use("/api/feasibilities", feasibilityRoutes);

app.get("/", (req, res) => {
    res.send("API Running")
})

app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});
