
import "../../styles/index.css"
import "../../styles/page-header.css"

interface Props {
    total: Number
}

export default function head(props: Props) {


    return (
        <section id="summary">
          <h2 className="sr-only"> </h2>

          <div className="info">
            <div className="total">
              
             <strong>{props.total} {props.total > 1 ? "Clientes Cadastrados" : "Cliente Cadastrado" }</strong>
            </div>
          </div>
        </section>
    )
}