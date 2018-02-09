const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const path = require("path");
const http = require("http").Server(app);
const io = require("socket.io")(http);


app.get('/api', function (req, res) {
    res.send('API is running');
});

io.on("connection", socket => {
    console.log('new connect');
//   io.emit("counter", io.engine.clientsCount);
//   socket.on("chat", function(msg) {
//     if (msg === "exit") {
//       socket.disconnect();
//     }
//     io.emit("chat", msg);
//   });
//   socket.on("disconnect", () => {
//     io.emit("counter", io.engine.clientsCount);
//   });
    socket.on("loggined", username => {
        console.log(username);
    });
});

http.listen(process.env.PORT || 8000, () => {
  console.log("Server start");
});
