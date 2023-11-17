const io = require("socket.io")(3001, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"],
    },
});

// io.on("connection", (socket) => {
//     console.log("New client connected");
//     socket.on("message", (message) => {
//         // console.log(message);
//         socket.broadcast.emit("message", message);
//     });
// });

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
        console.log(`Sending message to room ${room} by ${displayName} : ${message}`);
        io.to(room).emit("message", { displayName, message });
    });

    // Handle disconnection
    socket.on("disconnect", () => {
        console.log("User disconnected");
    });
});
