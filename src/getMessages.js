export default function getMessages(req, res, messages) {
  const { limit } = req.query;
  const user = JSON.stringify(req.headers.user);

  const requestedMessages = messages.filter((m, i) => {
    if (!!limit) {
      while (i < parseInt(limit)) {
        if (
          JSON.stringify(m.to) === user ||
          JSON.stringify(m.from) === user ||
          m.to === "Todos"
        ) {
          return m;
        } else return;
      }
    } else {
      while (i < messages.length) {
        if (
          JSON.stringify(m.to) === user ||
          JSON.stringify(m.from) === user ||
          m.to === "Todos"
        ) {
          return m;
        } else return;
      }
    }
  });

  res.send(requestedMessages);
}
