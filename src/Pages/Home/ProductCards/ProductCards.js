import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image'

function ProductCards({product}) {
   
    console.log(product.show);
    const {image,language,name,schedule,status}=product.show
   
    return (
        <Card >
        <Image variant="top" src={image.original} className='fluid' />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
  );
}

export default ProductCards;