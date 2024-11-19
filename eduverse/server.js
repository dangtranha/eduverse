import express from 'express';
import pkg from 'pg';
const { Pool } = pkg;
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';  // Thêm bcrypt nếu cần

const app = express();
app.use(express.json());

// Kết nối PostgreSQL
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'db22133039',
    password: '0000',
    port: 5432,
});

// Kiểm tra kết nối khi server khởi động
pool.connect()
    .then(() => {
        console.log('Connected to PostgreSQL successfully');
    })
    .catch(err => {
        console.error('Error connecting to PostgreSQL:', err);
    });
app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        // Sửa "email" thành "username" trong truy vấn
        const result = await pool.query('SELECT * FROM "UserApp" WHERE "username" = $1', [email]);

        if (result.rows.length === 0) {
            return res.status(400).json({ message: 'User not found' });
        }

        const user = result.rows[0];

        // Kiểm tra mật khẩu
        if (user.password !== password) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        // Tạo JWT token
        const token = jwt.sign({ id: user.username }, 'your_jwt_secret', { expiresIn: '1h' });

        return res.json({ message: 'Login successful', token });
    } catch (error) {
        console.error('Error during login:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
});
