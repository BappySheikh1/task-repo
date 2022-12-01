import React, { useEffect, useState } from 'react';
import ProductCards from './ProductCards/ProductCards';
import './Home.css'

const Home = () => {
    const [products,setProducts]=useState([])

    useEffect(  () =>{
        fetch(`https://api.tvmaze.com/search/shows?q=al`)
       .then(res => res.json())
       .then(data =>{
        setProducts(data)
       })
       
    },[])
    // console.log(products);
    return (
        <div className='container'>
            <h1>Home page component {products.length} </h1>
            <div className='home-container'>
                  {
                       products.map((product,i) => <ProductCards key={i} product={product} />)
                   }
            </div>
        </div>
    );
};

export default Home;