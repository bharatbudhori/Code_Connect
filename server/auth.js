const express = require('express');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const { setUser } = require('./firebase.js');
const SECRET_KEY = 'random-string';

const app = express();

app.use(cors());
app.use(express.json());

app.post('/signup', (req, res) => {
    console.log('Received signup request:', req.body);
    const { email, password } = req.body;
    let error = {};
    // Check if email and password are provided
    if (!email || !password) {
      error.email = 'Email is required';
      error.password = 'Password is required';
  
      return res.status(400).json({ error });
    }
  
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      error.email = 'Invalid email format';
      return res.status(400).json({ error });
    }
  
    // Check if password is at least 6 characters long
    if (password.length < 6) {
      error.password = 'Password must be at least 6 characters long';
      return res.status(400).json({ error });
    }
  
    // Check if email already exist 

  
  
    // Add new user to firebase
    const user = {
     email: req.body.email,
        password: req.body.password,
        name: req.body.email.split('@')[0]
    };
     setUser(user);
     const token = jwt.sign({ email }, SECRET_KEY, { expiresIn: '1h' });

     // Return token
     res.json({ token });

  });



  const port = process.env.PORT || 5000;
    app.listen(port, () => {
        console.log(`Server listening on port ${port}`);
    });