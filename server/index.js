const express = require("express");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const {
  setUser,
  checkEmail,
  getProblems,
  setAllProblemsInFirebase,
  checkUser,
  addQuestionSolvedInFirebase,
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
    userDescription: "I am a coder",
    designation: "Software Engineer",
    location: "India",
    problemsSolved: [
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
    heatmapData: {},
  };
  // Check if email already exist `checkEmail` function returns a promise`
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
      // simulate delay
      // setTimeout(() => {
      //   res.json(problems);
      //   console.log("Problems sent", Date(Date.now()));
      // }, 3000);
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

app.get("/api/getUserProfile/:username", (req, res) => {
  // const user = req.query?.user;
  const user = req.params.username;
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
  // console.log("Received run-submit request:", req.body);
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
  console.log("API call lang : " + language);
  try {
    axios(options)
      .then((response) => {
        console.log("Aya API ki nahi");
        console.log("API response:", response.data);
        if (reqType === "run") {
          return res.json(response.data);
        } else if (reqType === "submit") {
          const arr1 = req.body.problem.submitOutput.split("\n");
          const totalTestCases = arr1.length;
          const SubmitTestCasesChecking = () => {
            let totalSuccessfulTestCases = 0;
            if (!response?.data?.output?.includes("\n")) return 0;
            const arr2 = response.data.output.split("\n");
            for (let i = 0; i < arr1.length; i++) {
              let str1 = arr1[i],
                str2 = arr2[i],
                str3,
                str4;
              if (str1 && str1.includes(" ")) {
                str3 = str1.replaceAll(" ", "");
              }
              if (str2 && str2.includes(" ")) {
                str4 = str2.replaceAll(" ", "");
              }
              if (str3 === str4) {
                totalSuccessfulTestCases++;
              }
            }
            return totalSuccessfulTestCases;
          };
          const totalSuccessfulTestCases = SubmitTestCasesChecking();

          // update the data in firebase
          addQuestionSolvedInFirebase(
            req.body.username,
            req.body.problem,
            req.body.language,
            totalTestCases,
            totalSuccessfulTestCases
          );
          console.log("Submit request");

          return res.json(response.data);
        }
      })
      .catch((error) => {
        console.error("Error running code:", error);
        return res
          .status(500)
          .json({ error: "Internal Server Error from rapid api" });
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

const roomUsersCount = new Map();
const roomAdminMap = new Map();
const roomQuestionMap = new Map();
const roomModeMap = new Map();

io.on("connection", function (socket) {
  console.log("a user connected");

  // Handle joining a room
  socket.on("joinRoom", (room) => {
    try {
      const { roomId, username, mode } = room;
      socket.join(roomId);
      console.log(`User joined room: ${roomId} as ${username} in mode ${mode}`);

      // Set the room mode for the joined room
      roomModeMap.set(roomId, mode);


      // Increment the user count for the joined room
      if (roomUsersCount.has(roomId)) {
        if (!roomUsersCount.get(roomId).includes(username)) {
          roomUsersCount.set(roomId, [...roomUsersCount.get(roomId), username]);
          io.to(roomId).emit("roomAdmin", roomAdminMap.get(roomId));
        }
        if (roomQuestionMap.has(roomId)) {
          setTimeout(() => {
            io.to(roomId).emit("questionSelected", roomQuestionMap.get(roomId));
          }, 100);
          // io.to(room).emit("questionSelected", roomQuestionMap.get(roomId));
        }
      } else {
        roomUsersCount.set(roomId, [username]);
        roomAdminMap.set(roomId, username);
        io.to(roomId).emit("roomAdmin", roomAdminMap.get(roomId));
      }

      // Broadcast the updated user count to all users in the room
      io.to(roomId).emit("userCount", roomUsersCount.get(roomId));
      console.log(roomUsersCount.get(roomId));
    } catch (error) {
      console.log("Error from server side: ", error);
    }
  });

  // Handle redirect to specific question in a room
  socket.on("selectedQuestion", (data) => {
    const { room, questionId } = data;
    console.log(`Selected question in room ${room} is ${questionId}`);
    roomQuestionMap.set(room, questionId);
    var roomMode = roomModeMap.get(room) ?? "GSMode";
    io.to(room).emit("questionSelected", {questionId, roomMode});
  });

  // Handle sending messages to the room
  socket.on("sendMessageToRoom", (data) => {
    const { room, message, from, to } = data;
    console.log(
      `Sending message to room ${room} by ${from} to ${to} : ${message}`
    );
    io.to(room).emit("message", { to, message });
  });

  // Handle language change
  socket.on("changeLanguage", (data) => {
    const { room, language, username } = data;
    console.log(
      `Changing language to ${language} by ${username} in room ${room}`
    );
    io.to(room).emit("language", { username, language });
  });

  // Handle disconnection
  socket.on("disconnectUser", (data) => {
    const { room, displayName } = data;
    console.log("User disconnected");

    if (roomUsersCount.has(room)) {
      // roomUsersCount.set(room, roomUsersCount.get(room) - 1);
      // io.to(room).emit("userCount", roomUsersCount.get(room));
      const index = roomUsersCount.get(room).indexOf(displayName);
      console.log(index);
      if (index > -1) {
        roomUsersCount.get(room).splice(index, 1);
        io.to(room).emit("userCount", roomUsersCount.get(room));
        console.log(roomUsersCount.get(room));
      }
    }
  });
});
