import React, { useState, useEffect} from "react";
import {useRouteMatch} from "react-router-dom";

//Vista Detalle del producto:
function Detail() {
  const [data, setData] = useState([{}]); // Estado que almacena los datos devueltos por la api
  const [isBussy, setIsBussy] = useState(true); // Estado booleano que maneja el tiempo de espera de retorno de la api para renderizar el detalle del producto
  let routeMatch = useRouteMatch(); // Obtenemos la ruta y el id del producto

//Consultamos la api endpoint para obtener los datos y descripcion del producto
/** A modo de prueba, a causa del problema de recepción de datos dejo planteada una consulta asíncrona, 
 * pero no hubo resultado. El objeto se recibe luego de la evaluación y salta la excepción.
 */
  useEffect(() => {
    fetchProduct();   
  });

  const fetchProduct = async () => {
    const id = routeMatch.params['id'];
    //console.log(routeMatch)
    const response = await fetch('/api/items/' + id ,{
      method : 'GET',
      headers: {
        "Accept": "application/json"
      }
    });
    const data = await response.json();
    setData(data);
}

if(typeof data.item != 'undefined' || data.item != null){
  
    return(               
        <div className="container product-detail">
            <div className="row">
                <div className="col-md-8">
                    <img src={data.item.picture} alt={data.item.title}/>
                </div>
                <div className="col-md-4">
                    <span className="col-md-12">{data.item.condition} - {data.item.sold_quantity} vendidos</span>
                    <h5 className="">{data.item.title}</h5>
                    <h2 className="col-md-12">${data.item.price.price.toLocaleString()}</h2>
                    <button type="button" className="btn btn-primary">Comprar</button>
                </div>
            </div>
            <div className="row">
            <div className="col-md-8">
                <h4>Descripción del producto</h4>
                <p>{data.item.description}</p>
                </div>
            </div>
        </div>);
}else{
 return <h5>..</h5>
}        
  
}
export default Detail;