import { useState } from "react";

import json from "../json/avatars.json";
import dice from "../assets/icons/lucide_dices.svg";

function AvatarCarousel() {
  const { avatars } = json;

  const [avatar, setAvatar] = useState(
    avatars[Math.floor(Math.random() * avatars.length)]
  );

  const randomAvatar = () => {
    const index = Math.floor(Math.random() * avatars.length);
    setAvatar(avatars[index]);
  };

  return (
    <div className="avatar-container">
      <div className="avatar">
        <img src={avatar.url} />
      </div>
      <button type="button" className="random-btn" onClick={randomAvatar}>
        <img src={dice} />
      </button>
    </div>
  );
}

export default AvatarCarousel;
