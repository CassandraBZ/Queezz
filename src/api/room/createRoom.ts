import { Now, TimeAdd } from "faunadb";
import { client, q } from "../../configs/db";

const ROOM_TIME = Number(import.meta.env.VITE_ROOM_TIME);

const createRoom = async (link: string) =>
  await client
    .query(
      q.Create(q.Collection("rooms"), {
        data: {
          link,
        },
        ttl: TimeAdd(Now(), ROOM_TIME, "hours"),
      })
    )
    .then((ret) => ret)
    .catch((err) => console.warn(err));

export default createRoom;
