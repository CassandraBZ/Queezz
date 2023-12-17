import { client, q } from "../configs/db";

const createRoom = (link: string) =>
  client
    .query(
      q.Create(q.Collection("rooms"), {
        data: {
          link,
        },
      })
    )
    .then((ret) => ret)
    .catch((err) => console.warn(err));

export default createRoom;
