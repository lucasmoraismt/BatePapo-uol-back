import dayjs from "dayjs";

export default function updateUser(users, messages) {
  let counter;

  const newUsers = users.filter((u) => {
    counter = 0;
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
}
