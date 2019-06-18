const express = require("express");
const connectDB = require("./config/db");
const search = require("./routes/api/search");
const app = express();

// Connect Database

connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

app.get("/", (req, res) => res.send("API Running"));

// Define Routes
app.use("/api/search", search);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}!!!`));
