import React, {Component} from 'react';
import { Card } from 'react-bootstrap';

export default class Navbar extends Component{
    render(){
        return(
            <div id="introSection">
                <Card id="introCard">
                    <Card.Header>Hello world! I'm a Software Devloper</Card.Header>
                    <Card.Body>
                        <Card.Text>Info About me</Card.Text>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}