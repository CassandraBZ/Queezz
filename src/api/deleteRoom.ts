import { ExprArg } from "faunadb";
import { client, q } from "../configs/db";

const deleteRoom = (roomRef: ExprArg) => {
  if (roomRef)
    client
      .query(q.Delete(q.Ref(q.Collection("room"), roomRef)))
      .then((res) => res)
      .catch((err) => console.warn(err.message));
  else console.error(`Room ${roomRef} not found`);
};

export default deleteRoom;
