import './App.css';
import { Route } from 'react-router-dom';
import SearchBox from './SearchBox';
import ItemList from './ItemList';
import Detail from './Detail';

function App() {
  return (
    <div className="App">
     <Route path="/">
       <SearchBox />
     </Route>
     <Route path="/items:search">
     <ItemList />
     </Route> 
     <Route path="/items/:id">
       <Detail />
     </Route>
    </div>
  );
}

export default App;
