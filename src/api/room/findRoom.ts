import { client, q } from "../../configs/db";
import { RoomDocument } from '../../models';

const findRoom = async (link: string) =>
  await client
    .query<RoomDocument>(q.Get(q.Match(q.Index("room_by_link"), link)))
    .then((ret) => ret)
    .catch((err) => console.warn(err));

export default findRoom;
