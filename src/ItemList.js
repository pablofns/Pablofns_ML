
import './App.css';
import Item from './Item';
import React, { useState, useEffect } from 'react';
import {useRouteMatch} from 'react-router-dom';

//Listado de resultados, limitado en 4 Items
function ItemList(){
const [data, setData] = useState({});
let routeMatch = useRouteMatch();//captura la url de la búsqueda

useEffect(() => {
    let search = routeMatch.params['search'];
    
    function fetchSearch (){
        fetch('/api/items:' + search,{
            method : 'GET',
            headers: {
              "Accept": "application/json"
            }
          }).then(response => {
            if(!response.ok) throw Error(response.status);
            return response;
          }).then(res => res.json())
            .then(data => setData(data))
            .catch(error => alert("OCURRIÓ UN PROBLEMA, EXPRESS PUEDE NO ESTAR ACTIVO"));
    }
    fetchSearch();
},[routeMatch]);

// Se arma un listado con los datos obtenidos y se mapea y devuelve en Items
let listado =  typeof data.items !==  "undefined" ? data.items.map((item =>
    <Item item={item}  key={item.id}/>)) : <></>
 
    return(
        <div className="container resultado">
        {listado}
        </div>
    )
}
export default ItemList;