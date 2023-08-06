import "./style.css";

const Header = () => {
  return (
    <header>
      <ul className="navbar">
        <li>Sobre</li>
        <li>Depoimentos</li>
        <li>
          {" "}
          <a
            href="https://wa.me/+5561999227170"
            target="_blank"
            rel="noopener noreferrer"
            className="logo"
          >
            <img src="./src/assets/logo.png" alt="" />
          </a>
        </li>
        <li>Serviços</li>
      </ul>

      <a
        href="https://wa.me/+5561999227170"
        target="_blank"
        rel="noopener noreferrer"
        className="contact"
      >
        Fale conosco!
      </a>
    </header>
  );
};

export default Header;
