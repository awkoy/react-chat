import openSocket from "socket.io-client";
const socket = openSocket("http://localhost:8000");

const connectUser = () => {
  socket.on("connect", () => console.log("online"));
};

const loginUser = username => socket.emit("loggined", username);

export { connectUser, loginUser };
