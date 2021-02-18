import logo from './logo.svg';
import ico from './img/search.svg';
import './App.css';
import React, {useState} from 'react';
import {withRouter,useHistory} from 'react-router';
//caja de búsqueda
function SearchBox() {

    const [query, setQuery] = useState('');//Valores de las busquedas
    const history = useHistory();// Almacena el historial de busqueda y el estado de los componentes

    function handleInputChange(val){
        setQuery(val.target.value);
    }

    function handleSubmitForm(val){
        val.preventDefault();
        if(query.length > 0){
          history.push("/items:" + query);
        }
    }


  return (
    <div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <form  onSubmit={handleSubmitForm}>
        <input className="search" value={query} onChange={handleInputChange}  placeholder="Nunca dejes de buscar"/>
        <button type="submit" className="btn btn-light search-button">
            <img src={ico} className="s-ico" alt="ico" />
        </button>
        </form>        
      </header>
    </div>
  );
}

export default withRouter(SearchBox);