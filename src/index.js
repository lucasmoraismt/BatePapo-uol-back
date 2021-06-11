import express from "express";
import cors from "cors";
import dayjs from "dayjs";
import postParticipants from "./postParticipants.js";
import postMessages from "./postMessages.js";
import getMessages from "./getMessages.js";

const users = [];
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
  getMessages(req, res, users, messages);
});

app.post("/status", (req, res) => {});

app.listen(4000);
