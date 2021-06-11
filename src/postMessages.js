import dayjs from "dayjs";

export default function postMessages(req, res, users, messages) {
  const { to, text, type } = req.body;
  function isTypeValid(type) {
    if (type === "message" || type === "private_message") {
      return true;
    } else {
      return false;
    }
  }
  const correctType = isTypeValid(type);
  const from = JSON.stringify(req.headers.user);
  const fromUserIsValid = users.find((u) => JSON.stringify(u.name) === from);
  if (
    to.trim().length === 0 ||
    text.trim().length === 0 ||
    !correctType ||
    !fromUserIsValid
  ) {
    res.status(400).send();
  } else {
    const newMessage = {
      from: req.headers.user,
      to,
      text,
      type,
      time: dayjs().format("HH:mm:ss"),
    };
    messages.push(newMessage);
    res.status(200).send();
  }
}
