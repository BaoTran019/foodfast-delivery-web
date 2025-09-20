import './Product_Card.css'
import { Card } from 'react-bootstrap'
import './My_Product_Card.css'

function My_Product_Card({ food }) {
    return (
        <Card className='customed-card' style={{ width: "18rem", height: "23rem" }}>
            <div className='image-wrapper'>
                <Card.Img variant='top' src={food.image} alt={food.name} />
            </div>
            <div className='body-wrapper'>
                <Card.Body>
                    <Card.Title className='card-title'>{food.name}</Card.Title>
                    <Card.Text className='card-text'>{food.price}</Card.Text>
                </Card.Body>
            </div>
        </Card>
    )
}

export default My_Product_Card
