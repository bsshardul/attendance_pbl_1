import express from "express";
import cors from "cors"; // Import CORS middleware
import con from '../utils/db.js';

const router = express.Router();
router.use(cors({
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Specify allowed methods
}));

// Get all students
router.get("/", (req, res) => {
  con.query("SELECT * FROM students", (err, result) => {
    if (err) {
      res.status(500).send("An error occurred while fetching students");
    } else {
      res.json(result);
    }
  });
});
router.options("/:id", (req, res) => {
  res.setHeader('Access-Control-Allow-Methods', 'DELETE');
  res.status(200).end();
});


// Add a new student
router.post("/", (req, res) => {
  const { name } = req.body;
  con.query("INSERT INTO students (name) VALUES (?)", [name], (err, result) => {
    if (err) {
      res.status(500).send("An error occurred while adding a new student");
    } else {
      res.json({ message: "Student added successfully" });
    }
  });
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  con.query("DELETE FROM students WHERE id = ?", [id], (err, result) => {
    if (err) {
      res.status(500).send("An error occurred while deleting the student");
    } else {
      res.json({ message: "Student deleted successfully" });
    }
  });
});
  

export default router;
