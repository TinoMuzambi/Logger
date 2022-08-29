import express from "express";
import feasibilityRoutes from "./routes/feasibilityRoutes"

const app = express()
const PORT = process.env.PORT || 5000

app.use("/api/feasibilities/", feasibilityRoutes)

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})