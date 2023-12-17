import { createRoom, findRoom } from "../api";
import { randomizeString } from "../util";

function Quizz() {
  const handleClick = () => {
    createRoom(randomizeString(10)).then((res) => {
      console.log("🚀 ~ file: Quizz.tsx:6 ~ createRoom ~ res:", res);
    });
  };

  const findARoom = () => {
    findRoom("test").then((res) => {
      console.log("🚀 ~ file: Quizz.tsx:13 ~ f ~ res:", res);
    });
  };

  return (
    <div>
      <button onClick={handleClick}>Créer une ruche</button>
      <button onClick={findARoom}>Rechercher une ruche</button>
    </div>
  );
}

export default Quizz;
