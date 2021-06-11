import express from "express";
import cors from "cors";
import postParticipants from "./postParticipants.js";
import postMessages from "./postMessages.js";
import getMessages from "./getMessages.js";
import postStatus from "./postStatus.js";
import updateUser from "./updateUsers.js";

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
  updateUser(users, messages);
}, 15000);

app.listen(4000);
