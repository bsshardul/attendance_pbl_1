import express from "express";
import cors from 'cors';
import facultyRouter from "./routes/facultyroute.js";
import studentRouter from "./routes/studentroute.js"; // Import student router

const app = express();

// Use CORS middleware with specific configuration
app.use(cors({
    origin: "http://localhost:5173",
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Corrected method name
    credentials: true
}));

app.use(express.json());

// Define routes
app.use('/auth', facultyRouter);
app.use('/students', studentRouter); // Use student router

app.listen(3001, () => {
    console.log("Server is running on port 3001");
});
