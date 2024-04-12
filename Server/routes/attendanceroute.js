import express from "express";
import cors from "cors"; // Import CORS middleware
import con from '../utils/db.js'; // Assuming you have a db.js file for database connection

const router = express.Router();

// Use CORS middleware with specific configuration
router.use(cors({
  methods: ['GET'], // Allow only GET requests
}));

// Get all attendance data
router.get("/", (req, res) => {
  con.query("SELECT * FROM attendance_table", (err, result) => {
    if (err) {
      res.status(500).send("An error occurred while fetching attendance data");
    } else {
      res.json(result);
    }
  });
});

export default router;
