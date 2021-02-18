import React, { useState, useEffect} from "react";
import {useRouteMatch} from "react-router-dom";

//Vista Detalle del producto:
function Detail() {
  const [data, setData] = useState([{}]); // Estado que almacena los datos devueltos por la api
  const [isBussy, setIsBussy] = useState(true); // Estado booleano que maneja el tiempo de espera de retorno de la api para renderizar el detalle del producto
  let routeMatch = useRouteMatch(); // Obtenemos la ruta y el id del producto

//C onsultamos la api endpoint (express localhost:5000 - server/index.js) para obtener los datos y descripcion del producto
  useEffect(() => {
    const id = routeMatch.params['id'];
    async function fetchProduct () {
      const response = await fetch('/api/items/' + id ,{
        method : 'GET',
        headers: {
          "Accept": "application/json"
        }
      })
      const articles = await response.json();
      console.log(articles);
     return articles;
    }      
      fetchProduct()
      .then(response => {
        if(!response.item) throw Error(response.status);
        return response;      
      })//los datos por alguna razón me llegan luego de que los evalúo y guardo, y tira la excepción..
      .then(res => res.json())
      .then(data => setData(data))
      .then(() => setIsBussy(false))
      .catch(error => alert("NO SE HA PODIDO COMUNICAR CON EL SERVIDOR, VERIFIQUE QUE EXPRESS SE ENCUENTRE ACTIVO"));
      //en consola se pueden ver primero el array vacío, y luego el array lleno
   
  }, [routeMatch]);

console.log(data)
if(typeof data.item !== "undefined"){
    return(
               
        <div className="container product-detail">
            <div className="row">
                <div className="col-md-8">
                    <img src={data.item.picture} alt={data.item.title}/>
                </div>
                
                <div className="col-md-4">
                    <span className="col-md-12"></span>
                    <h6 className="">{data.item.title}</h6>
                    <h5 className="col-md-12">${data.item.price}</h5>
                    <button type="button" className="btn btn-primary">Comprar</button>
                </div>
            </div>
            <div className="row">
            <div className="col-md-8">
                <h5>Descripción del producto</h5>
                <p>{data.item.description}</p>
                </div>
            </div>
        </div>)
}else{
 return <h1>No se encontraron resultados para la busqueda</h1>
}        
  
}
export default Detail;