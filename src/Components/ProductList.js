import React, { useContext } from "react";
import { AppContext } from "../App";

//  Should display a lost of products with text of description
//  Make each product clickable - displays image for that product
//  Only one products image should be visible at a time
//  CLicking image again closes the image

const ProductList = ({setResponseType}) => {
    const searchResults = useContext(AppContext);
    // const setResponseType = useContext(ResponseContext);

    return (
        <div className="results">
           <h1>Product List</h1>
           {/* <button onClick={setResponseType= 'list'}>See all products</button> */}
           <ul>
               {searchResults.map((product) => ( //no longer functions with new responseType (its no longer an array)
                   <li key={product.id}>
                       <button onClick={() => setResponseType(product.id)}>{product.name}</button>
                    </li> //set response type to product id/styles/
               ))}
           </ul>
        </div>
              
    )
}

export default ProductList;