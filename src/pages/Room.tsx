import { useBeforeUnload, useParams } from "react-router-dom";
import { useBoolean, useCopyToClipboard } from "usehooks-ts";

import { findRoom } from "@/api";

function Room() {
  const { id } = useParams();
  const [_, copy] = useCopyToClipboard();
  const { value: isRoomExist, setValue } = useBoolean(false);

  if (id) {
    findRoom(id).then((res) => {
      setValue(res !== undefined);
    });
  }

  // When the tab is close
  useBeforeUnload((e: BeforeUnloadEvent) => {
    const leaveMsg = "Quittez-vous la ruche?";
    e.returnValue = leaveMsg; //Gecko + IE
    return leaveMsg; //Webkit, Safari, Chrome
  });

  const inviteLink = () => {
    copy(`${import.meta.env.VITE_BASE_JOIN_LINK}/${id}`);
    // TODO: Replace with a toast
    console.info("Lien copié !");
  };

  return (
    <div>
      {isRoomExist && (
        <>
          <h1>Bienvenue dans la ruche 🐝</h1>
          <button type="button" onClick={inviteLink}>
            Invite une abeille
          </button>
        </>
      )}

      {!isRoomExist && <h1>Désolé, cette ruche n'existe pas.</h1>}
    </div>
  );
}

export default Room;
