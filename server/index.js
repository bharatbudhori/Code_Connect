const express = require("express");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const {
  setUser,
  checkEmail,
  getProblems,
  setAllProblemsInFirebase,
  checkUser,
} = require("./firebase.js");
const path = require("path");
const axios = require("axios");
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
    createdAt: new Date().toISOString(),
    codingScore: 0,
    solved: [
      // {
      //   id: 1,
      //   status: "solved",
      //   date: new Date().toISOString(),
      //   language: "python",
      //   code: "print('Hello World')",
      //   input: "",
      //   output: "Hello World",
      // },

    ],
 

    
  };
  // Check if email already exist
  checkEmail(user.email)
    .then(([exists]) => {
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
  // if(true){ 
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
  try {
    getProblems().then((snapshot) => {
      const problems = [];
      snapshot.forEach((doc) => {
        problems.push({ id: doc.id, ...doc.data() });
      });
      problems.sort((a, b) => a.id - b.id);
      res.json(problems);
      console.log("Problems sent", Date(Date.now()));
    });
  } catch (error) {
    console.error("Error getting problems:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/setAllProblems", (req, res) => {
  try {
    setAllProblemsInFirebase();
    res.json({ success: true });
  } catch (error) {
    console.error("Error setting problems:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/getUserProfile", (req, res) => {
  const user = req.query?.user;
  console.log("Received get user profile request:", user);
  // console.log(req)
  checkUser(user).then((data) => {
    if (!data) {
      return res.status(400).json({ error: "User not found" });
    }
    res.json(data);
  });
});

app.post("/api/run-submit", (req, res) => {
  console.log("Received run-submit request:", req.body);
  const { code, input, language, reqType } = req.body;
  if (!code || !input || !language || !reqType) {
    return res
      .status(400)
      .json({ error: "Code, input, language and reqType are required" });
  }
  // console.log(code, input, language, reqType);
  const lang = language === "python" ? "python3" : language;
  const options = {
    method: "POST",
    url: "https://online-code-compiler.p.rapidapi.com/v1/",
    headers: {
      "content-type": "application/json",
      "X-RapidAPI-Key": "3516332cffmshc0d34525892c996p1f3d4bjsn8c894003db61",
      "X-RapidAPI-Host": "online-code-compiler.p.rapidapi.com",
    },
    data: {
      language: lang,
      version: "latest",
      code: code,
      input: input,
    },
  };
  try {
    axios(options)
      .then((response) => {
        console.log("API response:", response.data);
        if (reqType === "run") {
          return res.json(response.data);
        } else if (reqType === "submit") {

          // update the data in firebase
          

          return res.json(response.data);
        }
      })
      .catch((error) => {
        console.error("Error running code:", error);
        return res.status(500).json({ error: "Internal Server Error from rapid api" });
      });
  } catch (error) {
    console.error("Error running code:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
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
