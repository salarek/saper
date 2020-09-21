// const Express = require("express")();
// const Http = require("http").Server(Express);
// const Socketio = require("socket.io")(Http);
// const port = process.env.PORT || 3000;

// var msg = "jd";

// Socketio.on("connection", (socket) => {
//   socket.emit("msg", msg);
// });

// Http.listen(port, () => {
//   console.log("listening...");
// });
const PORT = process.env.PORT || 3000;
const INDEX = "/index.html";
const express = require("express");
const socketIO = require("socket.io");
const server = express()
  .use((req, res) => res.sendFile(INDEX, { root: __dirname }))
  .listen(PORT, () => console.log(`Listening on ${PORT}`));

const io = socketIO(server);
io.on("connection", (socket) => {
  console.log("Client connected");
  socket.on("disconnect", () => console.log("Client disconnected"));
});
