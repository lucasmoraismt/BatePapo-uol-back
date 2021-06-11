import dayjs from "dayjs";

export default function updateUser(users, messages) {
  const newDate = Date.now();

  const newUsers = users.filter((u) => {
    if (newDate - u.lastStatus > 10000) {
      const newMessage = {
        from: u.name,
        to: "Todos",
        text: "sai da sala...",
        type: "status",
        time: dayjs().format("HH:mm:ss"),
      };
      messages.push(newMessage);
      return false;
    } else {
      return true;
    }
  });

  users = [...newUsers];
}
