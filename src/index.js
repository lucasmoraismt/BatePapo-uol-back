import express from "express";
import cors from "cors";
import dayjs from "dayjs";
import postParticipants from "./postParticipants.js";
import postMessages from "./postMessages.js";

const users = [];
const messages = [];

const app = express();
app.use(cors());
app.use(express.json());

app.post("/participants", (req, res) => {
  postParticipants(req, res, users);
});

app.get("/participants", (req, res) => {
  res.send(users);
});

app.post("/messages", (req, res) => {
  postMessages(req, res);
});

app.listen(4000);
