import logo from "../assets/Logo-queezz.svg";
import AvatarCarousel from "../components/AvatarCarousel";

function Home() {
  const description =
    "Queezz vous permet de créer des quiz et de les partager avec vos amis. Les quiz sont composés de 20 questions et durent 5 minutes. Êtes-vous prêt à devenir la reine des abeilles ? Alors, c'est parti !";
  return (
    <div className="home-page">
      <div className="home-header">
        <img src={logo} alt="Logo queezz" className="logo" />
        <p>{description}</p>
      </div>
      <div className="chooser">
        <input placeholder="Entrez votre pseudo" />
        <AvatarCarousel />
        <button type="button">Créer une ruche</button>
      </div>
    </div>
  );
}

export default Home;
