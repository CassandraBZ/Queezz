import logo from "../assets/Logo-queezz.svg";
import AvatarCarousel from "../components/AvatarCarousel";

function Home() {
  const description =
    "Queezz est une application de quiz en ligne. Elle permet de créer des quiz et de les partager avec ses amis. Les quiz sont composés de 20 questions et durent 5 minutes. Les questions sont de type QCM (Question à Choix Multiples) ou à remplir. Êtes-vous prêt à devenir la reine des abeilles ? Alors, c'est parti !";
  return (
    <div>
      <div>
        <img src={logo} alt="Logo queezz" />
        <p>{description}</p>
      </div>
      <div>
        <input placeholder="Entrez votre pseudo" />
        <AvatarCarousel />
      </div>
    </div>
  );
}

export default Home;
