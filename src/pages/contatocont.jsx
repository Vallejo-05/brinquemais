import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../pages/xhome.css'

function BasicExample() {
  return (
    <div className='contato'>
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Coloque seu endereço de E-mail:</Form.Label>
        <Form.Control type="email" placeholder="E-mail" />
      </Form.Group>
      <Form.Group>
      <Form.Label>Coloque sua senha:</Form.Label>
      <Form.Control type="password" placeholder="Senha" />
      <br/>
      </Form.Group>
      <Button variant="danger" type="submit">
        Confirmar
      </Button>
    </Form>
    </div>
  );
}

export default BasicExample;

