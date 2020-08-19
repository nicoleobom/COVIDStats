import React from 'react';
import { Card, Button } from 'react-bootstrap';

class News extends React.Component {
    render() {
        return(
            <div className="card">
                <Card style={{ width: '18rem', color: 'white' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>
                            
                        </Card.Title>
                        <Card.Text>
                        
                        </Card.Text>
                        <Button variant="primary">Read More</Button>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}

export default News;