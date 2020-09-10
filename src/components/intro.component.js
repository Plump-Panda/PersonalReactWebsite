import React, {Component} from 'react';
import { Card } from 'react-bootstrap';

export default class Intro extends Component{
    render(){
        return(
            <div id="introSection" className="sectionPositioning">
                <Card className="cardPositioning">
                    <Card.Header>Hello world! I'm a Software Devloper</Card.Header>
                    <Card.Body>
                        <Card.Text>Info About me</Card.Text>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}