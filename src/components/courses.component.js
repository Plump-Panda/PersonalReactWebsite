import React, {Component} from 'react';
import { Card } from 'react-bootstrap';

export default class Courses extends Component{

    //TODO make a card renderer which will take info from a db or json file and populate the course section with the courses ive taken
    render(){
        return(
            <div id="coursesSection" className="sectionPositioning" >
                <h2 id="coursesHeader">Education</h2>
                <Card id="courseCardPositioning">
                    <Card.Header><strong>Dalhousie University</strong><p>Computer Science B.S</p></Card.Header>
                    <Card.Body>
                        <h4>Relavent Course Work</h4>
                        <br/>
                        <section id="coursesTextSection">
                            <Card.Text>> Intro to Computer Programming</Card.Text>
                            <Card.Text>> Intro to Computer Systems</Card.Text>
                            <Card.Text>> Intro to Web Design & Development</Card.Text>
                            <Card.Text>> Intro to Computer Science</Card.Text>
                            <Card.Text>> Data Structures & Algorithms</Card.Text>
                            <Card.Text>> Discrete Structures I</Card.Text>
                            <Card.Text>> Systems Programming</Card.Text>
                            <Card.Text>> Software Development</Card.Text>
                            <Card.Text>> Intro to Database Systems</Card.Text>
                            <Card.Text>> Intro to Server Side Scripting</Card.Text>
                            <Card.Text>> Introduction to Info Security</Card.Text>
                            <Card.Text>> Social/Ethical/Proffesional Issuse in Computer Science</Card.Text>
                            <Card.Text>> Operating Systems</Card.Text>
                            <Card.Text>> Designing User Interfaces</Card.Text>
                            <Card.Text>> Network Computing</Card.Text>
                        </section>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}