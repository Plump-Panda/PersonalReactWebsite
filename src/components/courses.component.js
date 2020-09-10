import React, {Component} from 'react';
import { Card } from 'react-bootstrap';

export default class Courses extends Component{
    render(){
        return(
            <div id="coursesSection" className="sectionPositioning" >
                <Card className="cardPositioning">
                    <Card.Header>Relevant Coursework</Card.Header>
                    <Card.Body>
                        <Card.Text>List of courses</Card.Text>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}