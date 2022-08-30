const express = require("express");
const cors = require("cors")
require("dotenv").config();
const feasibilityRoutes = require("./routes/feasibilityRoutes");

const app = express();
app.use(express.json());
app.use(cors())
app.use(express.urlencoded({extended: false}))
const PORT = process.env.PORT || 5000;

app.use("/api/feasibilities", feasibilityRoutes);

app.get("/", (req, res) => {
    res.send("API Running")
})

app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});
