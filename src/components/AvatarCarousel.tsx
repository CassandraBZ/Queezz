import json from "../json/avatars.json";

function AvatarCarousel() {
  const { avatars } = json;

  return (
    <div className="carousel">
      {avatars.map((avatar) => (
        <button key={avatar.id} className="avatar">
          <img src={avatar.url} />
        </button>
      ))}
    </div>
  );
}

export default AvatarCarousel;
