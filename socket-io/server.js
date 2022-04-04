const express = require("express");
const server = require("http").createServer(express());
const io = require("socket.io")(server, { cors: { origin: "*" } });

io.on("connection", (socket) => {
  // A new user has connected.
  // socket.on("disconnect", () => ...);

  socket.on("data-1", (data, cb) => {
    const { a, b } = data;
    cb(a + b);
  });

  socket.on("data", (data) => {
    const { a, b } = data;

    for (let i = 0; i < 10; i++) {
      const progress = `${i}0%`;

      socket.emit("progress", { progress });
    }
  });
});

server.listen(3000, () => {
  console.log("listening on *:3000");
});
