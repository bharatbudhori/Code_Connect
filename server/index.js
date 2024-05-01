const express = require("express");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const { setUser, checkEmail } = require("./firebase.js");
const path = require("path");
const SECRET_KEY = "random-string";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static(path.resolve(__dirname, "build")));

app.post("/signup", (req, res) => {
  console.log("Received signup request:", req.body);
  const { email, password } = req.body;
  let error = {};
  // Check if email and password are provided
  if (!email || !password) {
    error.email = "Email is required";
    error.password = "Password is required";

    return res.status(400).json({ error });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    error.email = "Invalid email format";
    return res.status(400).json({ error });
  }

  // Check if password is at least 6 characters long
  if (password.length < 6) {
    error.password = "Password must be at least 6 characters long";
    return res.status(400).json({ error });
  }

  const user = {
    email: req.body.email,
    password: req.body.password,
    name: req.body.email.split("@")[0],
  };
  // Check if email already exist
  checkEmail(user.email)
    .then((exists) => {
      if (exists) {
        error.email = "Email already exists";
        return res.status(400).json({ error });
      }
      // Add new user to firebase
      setUser(user)
        .then((success) => {
          if (success) {
            const token = jwt.sign({ email }, SECRET_KEY, {
              expiresIn: "1h",
            });

            // Return token
            res.json({ token });
          }
        })
        .catch((err) => {
          console.log("Error adding user:", err);
          error.email = "Error adding user";
          return res.status(400).json({ error });
        });
    })
    .catch((error) => {
      console.error("Error checking email:", error);
      return res.status(500).json({ error: "Internal Server Error" });
    });
});

app.post("/login", (req, res) => {
  console.log("Received login request:", req.body);
  const { email, password } = req.body;
  let error = {};
  // Check if email and password are provided
  if (!email || !password) {
    error.email = "Email is required";
    error.password = "Password is required";

    return res.status(400).json({ error });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    error.email = "Invalid email format";
    return res.status(400).json({ error });
  }

  // Check if password is at least 6 characters long
  if (password.length < 6) {
    error.password = "Password must be at least 6 characters long";
    return res.status(400).json({ error });
  }

  // Check if user exist
  checkEmail(email)
    .then(([exists, password]) => {
      if (!exists) {
        error.email = "Email does not exist";
        return res.status(400).json({ error });
      }
      if (password !== req.body.password) {
        error.password = "Password is incorrect";
        return res.status(400).json({ error });
      }
      // Return token
      const token = jwt.sign({ email }, SECRET_KEY, { expiresIn: "1h" });
      res.json({ token });
    })
    .catch((error) => {
      console.error("Error checking email:", error);
      return res.status(500).json({ error: "Internal Server Error" });
    });
});

app.get("/getProblems", (req, res) => {
  const problems = [
    {
      id: 1,
      name: "Two Sum",
      difficulty: "Easy",
      description:
        "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.",
    },
  ];

  res.json(problems);

});

function verifyToken(req, res, next) {
  if (req.method === "OPTIONS") {
    return next();
  }

  if (!req.headers.authorization) {
    return res.status(401).json({ error: "Unauthorized" });
  }
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (!token) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  jwt.verify(token, SECRET_KEY, (err, user) => {
    if (err) {
      return res.status(403).json({ error: "Forbidden" });
    }
    req.user = user;
    next();
  });
}

const port = process.env.PORT || 5000;
const server = app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

let io = require("socket.io")(server, {
  cors: {
    origin: "*",
  },
  methods: ["GET", "POST"],
});

io.on("connection", function (socket) {
  console.log("a user connected");

  // Handle joining a room
  socket.on("joinRoom", (room) => {
    const { roomId, displayName } = room;
    socket.join(roomId);
    console.log(`User joined room: ${roomId} as ${displayName}`);
  });

  // Handle sending messages to the room
  socket.on("sendMessageToRoom", (data) => {
    const { room, message, displayName } = data;
    console.log(
      `Sending message to room ${room} by ${displayName} : ${message}`
    );
    io.to(room).emit("message", { displayName, message });
  });

  // Handle language change
  socket.on("changeLanguage", (data) => {
    const { room, language, displayName } = data;
    console.log(
      `Changing language to ${language} by ${displayName} in room ${room}`
    );
    io.to(room).emit("language", { displayName, language });
  });

  // Handle disconnection
  socket.on("disconnect", () => {
    console.log("User disconnected");
  });
});
