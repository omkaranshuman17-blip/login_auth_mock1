const express = require('express');
const app = express();

// This line allows us to read JSON data sent from the client
app.use(express.json());

// Let's pretend this is our "user database" with one user
const exampleUser  = {
  username: 'user1',
  password: 'password123'
};

// This is the login route where users send their username and password
app.post('/login', (request, response) => {
  // Extract username and password from the request body
  const enteredUsername = request.body.username;
  const enteredPassword = request.body.password;

  // Check if the entered username and password match our example user
  if (enteredUsername === exampleUser .username && enteredPassword === exampleUser .password) {
    // If they match, send back a success message
    response.status(200).json({ message: 'Login successful!' });
  } else {
    // If they don't match, send back an error message
    response.status(401).json({ message: 'Oops! Invalid username or password.' });
  }
});

// Start the server and listen on port 3000
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
