import './App.css';
import { Link } from 'react-router-dom';

//Elemento de compone el listado de resultados
function Item(props){
    let datos = props.item;
   //Se agregó el componente Link para darle la "navegabilidad" hacia la siguiente pantalla
    return (
            <Link title={datos.title} to={`items/${datos.id}`} >
            <div className="card">
              <div className="row g-0">
                <div className="col-md-3 item-list-img">
                  <img src={datos.picture} alt="Imagen" className="picture-list"/>
                </div>
                <div className="col-md-7">
                  <div className="card-body">
                    <h5 className="card-title">${datos.price['price'].toLocaleString()}</h5>
                    <p className="card-text">{datos.title}</p>
                  
                  </div>
                </div>
                <div className="col-md-2 ubicacion">{datos.state_name}</div>
              </div>
            </div>
            </Link>
    );
}
export default Item;