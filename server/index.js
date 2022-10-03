import { Server } from "socket.io";

const io = new Server({
  cors: {
    origin: "http://localhost:3001",
  },
});

io.on("connection", (socket) => {
  // ...
});

io.listen(3000);
