import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
function Categorycards({cardButton,cardTitle,cardImg}) {
    return (
        <div>
            <Card style={{height:"16rem", width: '14rem',marginTop:"15px",borderRadius:"0px" }}>
                <Card.Img variant="top" src={cardImg} className='rounded-0 overflow-hidden' />
                <Card.Body>
                    <Card.Title className="text-center">{cardTitle}</Card.Title>
                    <Button variant="dark w-100 rounded-0">{cardButton}</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Categorycards