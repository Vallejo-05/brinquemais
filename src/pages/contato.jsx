import ColorSchemesExample from "./Navbar";
import WithHeaderExample from "./footer";
import BasicExample from "./contatocont";
import '../pages/xhome.css'

function Contato(){
    return(
        <div>
          <ColorSchemesExample/> <br></br>
          <div className="nomecontato">
          <h1>Cadastrar sua conta</h1> <br/>
          </div>
          <p>
          <BasicExample/>
          </p> 
            <br></br>
          <div>
          <WithHeaderExample/>
          </div>
        </div>
    )
}
export default Contato;