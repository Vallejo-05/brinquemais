import Card from 'react-bootstrap/Card';
import '../pages/xhome.css'

function BasicExample() {
  return (
    <div className='produtos'>
      <div className='carrinhos'>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://superlegalbrinquedos.vteximg.com.br/arquivos/ids/220110-800-800/Carrinhos-Hot-Wheels---Pacote-com-5-Carros---Sortido---Mattel-7.jpg?v=638254792508270000" />
      <Card.Body className='body'>
        <Card.Title> 5 Carrinhos HotWheels </Card.Title>
        <div className='preco'>
        <Card.Text>R$:79,90</Card.Text>
        </div>
        <Card.Text>
        Pacote com 5 Carrinhos Carrinhos Hot Wheels. A BrinqueMais produz a muitos anos o Hot Wheels que vem trazendo felicidade e muita brincadeira para todas as idades!
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
      <div className='nerf'>
     <Card style={{ width: '18rem' }}>
     <Card.Img variant="top" src="https://superlegalbrinquedos.vteximg.com.br/arquivos/ids/186858-800-800/E9953_Lancador_de_Dardos_Nerf_Elite_2.0_Volt_SD-1_Hasbro_2.jpg?v=637496198419400000" />
     <Card.Body className='body'>
       <Card.Title>Lançador de dardos Nerf</Card.Title>
       <div className='preco'>
        <Card.Text>R$:99,90</Card.Text>
        </div>
       <Card.Text>
       A diversão sobe de nível com o lançador Nerf que apresenta recursos de personalização integrados para que se possa utilizar acessórios e sair na frente na aventura Nerf.  
       </Card.Text>
     </Card.Body>
   </Card>
   </div>
   <div className='aviao'>
   <Card style={{ width: '18rem' }}>
     <Card.Img variant="top" src="https://superlegalbrinquedos.vteximg.com.br/arquivos/ids/224303-1000-1000/YES251291---Aviao-Cargueiro-com-Luz-e-Som---City---Police-Garage---Six-Six-Zero---22-cm---Yes-Toys-7.jpg?v=638310718251900000" />
     <Card.Body className='body'>
       <Card.Title>Avião Cargueiro</Card.Title>
       <div className='preco'>
        <Card.Text>R$:179,90</Card.Text>
        </div>
       <Card.Text>
       Começando a Voar com o Novo Avião com Luz e Som. O jogo Six-Six-Zero Spray Airplane é criado para os amantes de voos altos e aviões de propósito especial. 
       </Card.Text>
     </Card.Body>
   </Card>
   </div>
   <div className='boneca'>
   <Card style={{ width: '18rem' }}>
     <Card.Img variant="top" src="https://superlegalbrinquedos.vteximg.com.br/arquivos/ids/180972-1000-1000/1040_PRE-VENDA_Boneca_Articulada_Maria_Clara_21_cm_Novabrink_1.jpg?v=637335425673300000" />
     <Card.Body className='body'>
       <Card.Title>Boneca Articulada</Card.Title>
       <div className='preco'>
        <Card.Text>R$:150,00</Card.Text>
        </div>
       <Card.Text>
       Boneca Maria Clara com 21 cm de altura, igualzinha à Youtuber preferida da criançada da dupla Maria Clara e JP.
       </Card.Text>
     </Card.Body>
   </Card>
   </div>
   </div>
  );
}

export default BasicExample;