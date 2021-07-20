import express from 'express';
import bodyParser from 'body-parser';

import usersRoutes from './routes/users.js';

const app = express();
const PORT = 5000;

const endpoints = [
    {
    user: "POST: http://localhost:5000/users",
    register: "POST http://localhost:5000/users/register",
    login: "POST: http://localhost:5000/users/login",
    update: "PATCH: http://localhost:5000/users/update/email"
    }
]

app.use(bodyParser.json());

app.use('/users', usersRoutes);

app.get('/', (req, res) => res.send(endpoints));

app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));