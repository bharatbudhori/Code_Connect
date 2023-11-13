const io = require("socket.io")(3001, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"],
    },
});

io.on("connection", (socket) => {
    console.log("New client connected");
    socket.on("message", (message) => {
        // console.log(message);
        socket.broadcast.emit("message", message);
    });
});
