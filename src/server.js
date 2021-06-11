import express from "express";
import cors from "cors";
import dayjs from "dayjs";

const users = [];
const messages = [];

const app = express();
app.use(cors());
app.use(express.json());

app.post("http://localhost:4000/participants", (req, res) => {
  const body = req.body;
  const usedName = users.find((p) => p.name === body.name);
  if (body.name.trim().length === 0) {
    res.status(400);
  } else if (usedName) {
    res.status(401);
  } else {
    const name = body.name;
    const newUser = {
      name,
      lastStatus: Date.now(),
    };
    const newMessage = {
      from: name,
      to: "Todos",
      text: "entra na sala...",
      type: "status",
      time: dayjs().format("HH:mm:ss"),
    };
    users.push(newUser);
    messages.push(newMessage);
    res.status(200);
  }
});

app.get("http://localhost:4000/participants", (req, res) => {
  res.send(users);
});

app.listen(4000);
