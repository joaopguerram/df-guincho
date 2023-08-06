import "./style.css";

const Home = () => {
  return (
    <div className="home">
      <h1>Guincho 24 horas em todo DF e Brasil!</h1>
      <p>
        Serviços de auto socorro 24 horas em todo o territorio brasileiro.
        Guincho especializado em resgate e transporte de veículos de todos os
        portes, guincho de máquinas em geral. Empresa com pátio para mais de 200
        veiculos, pátio com monitoramento de câmeras e totalmente cercado.
        Serviço de troca de pneu, carga de bateria e pane seca.
      </p>
      <a
        href="https://wa.me/+5561999227170"
        target="_blank"
        rel="noopener noreferrer"
        className="contact-2"
      >
        Fale conosco!
      </a>
    </div>
  );
};

export default Home;
