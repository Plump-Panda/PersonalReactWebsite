import React, {Component} from 'react';
import { Card } from 'react-bootstrap';
import {CardDeck} from 'react-bootstrap';
import {Image} from 'react-bootstrap';
import shipImage from '../images/ship.jpg';
import reactImage from '../images/react.png';
import mywebsiteImage from '../images/mywebsite.jpg';
import githubImage from '../images/github.png';
import courseViewerImage from '../images/courseViewer.jpg';

export default class Experience extends Component{

        //TODO make a card renderer which will take info from a db or json file and populate the experience section with experience/projcets


    render(){
        return(
            <div id="experienceSection" className="sectionPositioning" >
                <h2 id="coursesHeader"> Work + Fun</h2>
                <CardDeck className="experienceCardDeck">
                    <Card className="experienceCard">
                        <Card.Header>Technical Co-op</Card.Header>
                        <Card.Img variant="top" as={Image} src={shipImage} fluid={true} alt="Card image" />
                        <Card.Body>
                        <Card.Title>Lockheed Martin, CA</Card.Title>
                        <Card.Text style={{textAlign:"center"}}>
                        Used a Data Distribution Service network based on a publish/subscribe architecture to send topics from a Java based simulator to a C++ backend.
                        Also implemented quality of life changes to our existing simulator in Java.
                        I worked in agile and used an agile project management system to organize and schedule stories. Additionally performed code reviews for teammates

                        </Card.Text>
                        <section className="codeType">
                            <p className="codeTag">Java</p><p className="codeTag">C++</p><p className="codeTag" id="green">Jenkins</p><p className="codeTag" id="green">SVN</p>
                        </section>
                        </Card.Body>
                        <Card.Footer>
                        <small className="text-muted">May 2020 - Aug 2020</small>
                        </Card.Footer>
                    </Card>
                    <Card className="experienceCard">
                        <Card.Header>Web Developer</Card.Header>
                        <Card.Img variant="top" as={Image} src={reactImage} fluid={true} alt="Card image" />
                        <Card.Body>
                        <Card.Title>Okeanos</Card.Title>
                        <Card.Text style={{textAlign:"center"}}>
                            Worked in a team of 5 to develop a webpage from scratch using HTML5, CSS3, and Javascript.
                            Communicated effectively between app dev team and supervisor to ensure consistency across platforms.
                        </Card.Text>
                        <section className="codeType" style={{marginTop: '75px'}}>
                            <p className="codeTag">HTML</p><p className="codeTag">CSS</p><p className="codeTag">Javascript</p><p className="codeTag" id="green">Git</p>
                        </section>
                        </Card.Body>
                        <Card.Footer>
                        <small className="text-muted">Sept 2019 - Nov 2019</small>
                        </Card.Footer>
                    </Card>
                </CardDeck>
                <CardDeck className="experienceCardDeck">
                     <Card className="experienceCard">
                        <Card.Header>Fun Project!~</Card.Header>
                        <Card.Img variant="top" as={Image} src={mywebsiteImage} fluid={true} alt="Card image" />
                        <Card.Body>
                        <Card.Title>Personal Website</Card.Title>
                        <Card.Text style={{textAlign:"center"}}>
                            You're on it right now! Created using React and deployed with Google's Firebase

                        </Card.Text>
                        <section className="codeType" style={{marginTop: '40px'}}>
                            <p className="codeTag">HTML</p><p className="codeTag">CSS</p><p className="codeTag">Javascript</p><p className="codeTag" id="green">Git</p><p className="codeTag" id="green">Firebase</p>
                            <p className="codeTag" id="green">React</p><p className="codeTag" id="green">Bootstrap</p>
                        </section>
                        </Card.Body>
                        <Card.Footer>
                        <small className="text-muted">Created Sept 2020</small>
                        </Card.Footer>
                    </Card>
                    <Card className="experienceCard">
                        <Card.Header>Fun Project!~</Card.Header>
                        <Card.Img  variant="top" as={Image} src={courseViewerImage} fluid={true} alt="Card image" />
                        <Card.Body>
                        <Card.Title><a href="https://dal-cs-course-viewer.web.app/">Dalhousie University Computer Science Viewer</a></Card.Title>
                        <Card.Text style={{textAlign:"center"}}>
                            The official university website looked ugly and didn't have everything easily accessible. So I made my own version! Scrapped the official websites using python, used React to display
                            everything, and deployed it to the web using Google's Firebase

                        </Card.Text>
                        <section className="codeType">
                            <p className="codeTag">HTML</p><p className="codeTag">CSS</p><p className="codeTag">Javascript</p><p className="codeTag">Python</p><p className="codeTag" id="green">Git</p><p className="codeTag" id="green">Firebase</p>
                            <p className="codeTag" id="green">React</p><p className="codeTag" id="green">Bootstrap</p>
                        </section>
                        </Card.Body>
                        <Card.Footer>
                        <small className="text-muted">Created Sept 2020</small>
                        </Card.Footer>
                    </Card>
                </CardDeck>
                <Card id="githubCard">
                    <Card.Header><strong>Other Fun Projects</strong></Card.Header>
                    <Card.Body>
                        <h4><a href="https://github.com/Plump-Panda">My Github</a></h4>
                        <br/>
                        <Card.Img variant="top" as={Image} src={githubImage} fluid={true} alt="Card image" />
                        <Card.Text style={{textAlign:"center"}}>
                            There's a bunch of other uncompleted projects here so feel free to take a look at the code!
                            I only have my properly deployed projects on display here.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}