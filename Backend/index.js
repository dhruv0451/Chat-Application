import express from "express";
import dotenv from "dotenv";
import connectDb from "./config/db.js";


dotenv.config(); // ✅ Load .env file

const port = process.env.PORT || 5000;

const app = express();

app.get("/", (req, res) => {
    res.send("hello");
});

app.listen(port, () => {
    connectDb()
    console.log(`Server started on port ${port}`);
});
