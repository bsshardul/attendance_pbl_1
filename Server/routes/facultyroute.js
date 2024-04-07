import express from 'express';
import con from '../utils/db.js'; // Assuming db.js is in a folder named 'utils'
import jwt from 'jsonwebtoken';

const router = express.Router();

router.post('/facultylogin', (req, res) => {
    const sql = "SELECT * FROM faculty WHERE email = ? AND password = ?";
    con.query(sql, [req.body.email, req.body.password], (err, result) => {
        if (err) {
            console.error("Query error:", err);
            return res.json({ loginStatus: false, error: "Query error" });
        }
        if (result.length > 0) {
            const email = result[0].email;
            const token = jwt.sign(
                { role: "faculty", email: email },
                "jwt_secret_key",
                { expiresIn: '1d' });

            res.cookie('token', token);
            return res.json({ loginStatus: true });
        } else {
            return res.json({ loginStatus: false, error: "Invalid credentials" });
        }
    });
});

export default router;
