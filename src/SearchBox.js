import logo from './logo.svg';
import ico from './img/search.svg';
import './App.css';
import React, {useState} from 'react';
import {withRouter,useHistory} from 'react-router';

function SearchBox() {

    const [query, setQuery] = useState('');
    const history = useHistory();

    function handleInputChange(e){
        setQuery(e.target.value);
    }

    function handleSubmitForm(e){
        e.preventDefault();
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