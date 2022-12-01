import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image'
import { Link } from 'react-router-dom';

function ProductCards({product}) {
   
    // console.log(product.show);
    const {image,name,id}=product
   
    return (
        <Card >
        <Image variant="top" style={{height:'300px'}} src={image.original} className='fluid ' />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <div className='d-flex mt-1 justify-content-end'>
         <Link to={`/details/${id}`}> <Button variant="primary">View Details</Button></Link>
          </div>
        </Card.Body>
      </Card>
  );
}

export default ProductCards;