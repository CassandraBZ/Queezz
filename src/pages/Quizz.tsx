import { useState } from "react";
import { createRoom, findRoom, updateRoomTime } from "../api";
import { RoomDocument } from "../models";
import { randomizeString } from "../util";

function Quizz() {
  const [room, setRoom] = useState<RoomDocument>();

  const handleClick = () => {
    createRoom(randomizeString(10)).then((res) => {
      console.log("🚀 ~ file: Quizz.tsx:6 ~ createRoom ~ res:", res);
    });
  };

  const findARoom = () => {
    findRoom("test").then((res: void | RoomDocument) => {
      console.log("🚀 ~ file: Quizz.tsx:13 ~ f ~ res:", res);
      if (res) {
        setRoom(res);
      }
    });
  };

  const updateARoom = () => {
    if (room)
      updateRoomTime(room).then((res: void | RoomDocument) => {
        console.log("🚀 ~ file: Quizz.tsx:13 ~ f ~ res:", res);
      });
  };

  return (
    <div>
      <button onClick={handleClick}>Créer une ruche</button>
      <button onClick={findARoom}>Rechercher une ruche</button>
      <button onClick={updateARoom}>Update une ruche</button>
    </div>
  );
}

export default Quizz;
