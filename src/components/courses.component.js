import React, {Component} from 'react';
import { Card } from 'react-bootstrap';

export default class Courses extends Component{

    //TODO make a card renderer which will take info from a db or json file and populate the course section with the courses ive taken
    render(){
        return(
            <div id="coursesSection" className="sectionPositioning" >
                <Card id="courseCardPositioning">
                    <Card.Header>Relevant Coursework</Card.Header>
                    <Card.Body>
                        <Card.Text>List of courses</Card.Text>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}