import React from 'react';
import ProductCards from './ProductCards/ProductCards';
import './Home.css'
import { useQuery, } from '@tanstack/react-query'

const Home = () => {
    const {data: Movies = [],isLoading,refetch} = useQuery({ 
        queryKey: ['shows'],
         queryFn: async ()=>{
             const res =await fetch(`https://api.tvmaze.com/shows`)
             const data =await res.json()
             return data
          } 
         })
       if(isLoading){
        return <div className="spinner-border d-flex justify-content-center" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
       }
     console.log(Movies);
    return (
        <div className='container'>
            {/* <h1>Home page component {products.length} </h1> */}
            <div className='home-container my-3'>
                  {
                       Movies.map((product,i) => <ProductCards key={i} product={product} />)
                   }
            </div>
        </div>
    );
};

export default Home;