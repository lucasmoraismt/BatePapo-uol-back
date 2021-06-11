export default function postStatus(req, res, users) {
  const user = users.find((u) => u.name === JSON.stringify(req.headers.user));
  const index = users.findIndex(
    (u) => u.name === JSON.stringify(req.headers.user)
  );

  if (!user) {
    res.status(400).send();
  } else {
    const updatedUser = {
      name: user.name,
      lastStatus: Date.now(),
    };
    users[index] = { updatedUser };
    res.status(200).send();
  }
}
