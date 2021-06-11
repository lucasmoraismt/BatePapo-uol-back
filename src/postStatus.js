export default function postStatus(req, res, users) {
  const user = users.find((u) => u.name === req.headers.user);
  const index = users.findIndex((u) => u.name === req.headers.user);
  if (!user) {
    res.status(400).send();
  } else {
    users[index].lastStatus = Date.now();
    res.status(200).send();
  }
}
