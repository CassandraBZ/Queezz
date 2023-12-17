import { client, q } from "../configs/db";

const findRoom = (link: string) =>
  client
    .query(q.Get(q.Match(q.Index("room_by_link"), link)))
    .then((ret) => ret)
    .catch((err) => console.warn(err));

export default findRoom;
