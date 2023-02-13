const io = require("socket.io")(8900, {
	cors: {
		origin: "http://localhost:3000",
	},
});

io.on("connection", (socket) => {
	console.log("a user connected");
	io.emit("welcome", "Hello from server");
});
