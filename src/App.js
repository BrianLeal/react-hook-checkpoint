import React, { useState, useEffect } from "react";
import ProductList from "./Components/ProductList"
// import { AppContext } from "./Context/AppContext";
import logo from './logo.svg';
import './App.css';

export const AppContext = React.createContext();
// export const ResponseContext = React.createContext();

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [responseType, setResponseType] = useState('list')


useEffect(() => {
  fetch(`http://52.26.193.201:3000/products/${responseType}`)
      .then((response) => response.json())
      .then((data) => setSearchResults(data))
      .catch((error) => { 
        console.log(error)
        alert("Search Criteria Not Valid")
      })
      
}, [responseType])

  return (
    <div className="App">
      <AppContext.Provider value={searchResults}>
          
        <main>
          <img src={logo} className="App-logo" alt="logo" />
          
            < ProductList setResponseType={setResponseType}/>
          
        </main>
      
      </AppContext.Provider>
    </div>
  );
}

export default App;
