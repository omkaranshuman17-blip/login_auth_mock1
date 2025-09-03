const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors()); // Allow all origins (adjust for production)
app.use(express.json());

const USER = {
  username: 'user1',
  password: 'password123'
};

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  if (username === USER.username && password === USER.password) {
    res.status(200).json({ message: 'Login successful!' });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
