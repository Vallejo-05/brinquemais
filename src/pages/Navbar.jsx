import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./navbar.css"


function ColorSchemesExample() {
  return (
    <>
     <Navbar bg="danger" variant="dark">
        <Container className='container'> 
        <Navbar.Brand href="/">
            <img
              src="https://media.discordapp.net/attachments/1030129015371079690/1171089742234914907/image-removebg-preview.png?ex=655b6950&is=6548f450&hm=e8e73d7ad4b65816db3e524df0263fdf1ac76eae6202bc15dc7ac546dc34c3e9&="
              width="150"
              height="100"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <div className='escrita'>
          <Navbar.Brand href="/" className='nome'>BrinqueMais</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/contato">Entrar</Nav.Link>
            <Nav.Link href="/cadastro" className='cadastro'>Cadastrar Produto</Nav.Link>
          </Nav>
          </div>
        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;