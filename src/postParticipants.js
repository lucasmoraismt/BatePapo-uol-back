import dayjs from "dayjs";

export default function postParticipants(req, res, users) {
  const { name } = req.body;
  const usedName = users.find((p) => p.name === name);
  if (name.trim().length === 0) {
    res.status(400).send();
  } else if (usedName) {
    res.status(401).send();
  } else {
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
    res.status(200).send();
  }
}
