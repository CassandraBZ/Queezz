import { client, q } from "../../configs/db";
import { RoomDocument } from "../../models";

const deleteRoom = ({ ref }: RoomDocument) => {
  if (ref)
    client
      .query(q.Delete(q.Ref(q.Collection("room"), ref.id)))
      .then((res) => res)
      .catch((err) => console.warn(err.message));
  else console.error(`Room ${ref} not found`);
};

export default deleteRoom;
