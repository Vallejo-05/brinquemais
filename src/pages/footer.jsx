import './Footer.css';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section about">
            <img src="/src/assets/Logo.png" alt="" width={'300px'}/>
            <h1>
                EletroTop
            </h1>
            <div className="footer-bottom">
          <p>
            &copy; {new Date().getFullYear()} BrinqueMais. Todos os direitos reservados.
          </p>
        </div>
          </div>
          <div className="footer-section links">
            <h3>Links</h3>
            <ul>
              <li><a href="/">Início</a></li>
              <li><a href="/contato">Entrar</a></li>
            </ul>
          </div>
          <div className="footer-section contact">
            <h3>Contato</h3>
            <p>
              <i className="fa fa-phone"></i> (11) 97398-9086
            </p>
            <p>
              <i className="fa fa-envelope"></i> suporte@brinquemais.com.br
            </p>
            <p>
              <i className="fa fa-map-marker"></i> Av Lins de Vasconcelos, 1264 - São Paulo - SP
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;