import { Now, TimeAdd } from "faunadb";
import { client, q } from "../../configs/db";
import { RoomDocument } from "../../models";

const ROOM_TIME = Number(import.meta.env.VITE_ROOM_TIME);

const updateRoomTime = (doc: RoomDocument) =>
  client
    .query<RoomDocument>(
      q.Replace(q.Ref(q.Collection("rooms"), doc.ref.id), {
        data: {
          ...doc.data,
        },
        ttl: TimeAdd(Now(), ROOM_TIME, "hours"),
      })
    )
    .then((ret) => ret)
    .catch((err) => console.warn(err));

export default updateRoomTime;
