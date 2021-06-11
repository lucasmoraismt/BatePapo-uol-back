import express from "express";
import cors from "cors";
import dayjs from "dayjs";
import postParticipants from "./postParticipants.js";
import postMessages from "./postMessages.js";
import getMessages from "./getMessages.js";
import postStatus from "./postStatus.js";

let users = [];
const messages = [];

const app = express();
app.use(cors());
app.use(express.json());

app.post("/participants", (req, res) => {
  postParticipants(req, res, users, messages);
});

app.get("/participants", (req, res) => {
  res.send(users);
});

app.post("/messages", (req, res) => {
  postMessages(req, res, users, messages);
});

app.get("/messages", (req, res) => {
  getMessages(req, res, messages);
});

app.post("/status", (req, res) => {
  postStatus(req, res, users);
});

setInterval(() => {
  const newUsers = users.filter((u) => {
    let counter = 0;
    if (Date.now() - u.lastStatus > 10000) {
      const newMessage = {
        from: u.name,
        to: "Todos",
        text: "sai da sala...",
        type: "status",
        time: dayjs().format("HH:mm:ss"),
      };
      messages.push(newMessage);
      counter = 1;
    }
    return counter === 0 ? true : false;
  });

  users = newUsers;
}, 15000);

app.listen(4000);
