const Express = require("express")();
const Http = require("http").Server(Express);
const Socketio = require("socket.io")(Http);
const port = process.env.PORT || 3000;

var msg = "jd";

Socketio.on("connection", (socket) => {
  socket.emit("msg", msg);
});

Http.listen(port, () => {
  console.log("listening...");
});
