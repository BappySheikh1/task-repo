import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const ProductDetails = () => {
  const productDetails= useLoaderData()
 console.log(productDetails);

    return (
        <div className='container'>
     <Card>
      <Card.Img variant="top" src={productDetails.image.original} style={{height:"60vh"}}/>
      <Card.Body>
        <Card.Title>{productDetails.name}</Card.Title>
        <Card.Text>
          {productDetails.summary ? productDetails.summary : "No Description"}
        </Card.Text>
        <div className='d-flex justify-content-between justify-items-center'>
            <p className='fw-semibold'>AverageRuntime: {productDetails.averageRuntime}</p>
            <p className='fw-semibold'>Language: {productDetails.language}</p>
        </div>
        <Button variant="primary">Book</Button>
      </Card.Body>
    </Card>
        </div>
    );
};

export default ProductDetails;