import "./style.css";

const Header = () => {
  return (
    <header>
      <img
        src="https://static.wixstatic.com/media/174d79_684c2210c5284635b021b9918c79d136~mv2.png/v1/fill/w_316,h_171,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Guincho.png"
        alt=""
      />
      <ul className="navbar">
        <li>Home</li>
        <li>Serviços</li>
        <li>Contato</li>
      </ul>
      <a
        href="https://wa.me/+5561999227170"
        target="_blank"
        rel="noopener noreferrer"
      >
        Fale conosco!
      </a>
    </header>
  );
};

export default Header;
