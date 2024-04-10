import express from "express";
import cors from 'cors';
import facultyrouter from "./routes/facultyroute.js";

const app = express();

// Use CORS middleware with specific configuration
app.use(cors({
    origin: "http://localhost:5175", // Specify the origin without trailing slash
    methods: ['GET', 'POST', 'PUT'], // Specify allowed HTTP methods
    credentials: true // Allow sending cookies in cross-origin requests
}));

app.use(express.json());
app.use('/auth', facultyrouter);

app.listen(3001, () => {
    console.log("Server is running.");
});
