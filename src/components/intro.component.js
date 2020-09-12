import React, {Component} from 'react';
import { Card } from 'react-bootstrap';
import resume from '../resume/Résumé.pdf'

export default class Intro extends Component{
    render(){
        return(
            <div id="introSection" className="sectionPositioning">
                <h2 id="coursesHeader">Hello world!</h2>
                <Card id="introCardPositioning">
                    <Card.Header style={{backgroundColor: 'grey'}}></Card.Header>
                    <Card.Body style={{backgroundColor: '#594f4f'}}>
                        <Card.Text style={{color: '#dbd7d7'}}>
                            <ul id="introduction">
                                <li>> Josh.education</li>
                                    <ul>=> "Dalhousie University"</ul>
                                    <br/>
                                <li>> Josh.major</li>
                                    <ul>=> "Computer Science"</ul>
                                    <br/>
                                <li>> Josh.expectedGraduation</li>
                                    <ul>=> "August 2022"</ul>
                                    <br/>
                                <li>> Josh.interests</li>
                                    <ul>=> ["Code","travelling","music","language","badminton"]</ul>
                                    <br/>
                                <li>> Josh.workExperience.latest</li>
                                    <ul>=> Latest Work Experience</ul>
                                    <ul style={{marginLeft: '50px'}}>company: "Lockheed Martin CA"</ul>
                                    <ul style={{marginLeft: '50px'}}>role: "Technical Co-op"</ul>
                                    <ul style={{marginLeft: '50px'}}>startDate: "May 2020"</ul>
                                    <ul style={{marginLeft: '50px'}}>endDate: "August 2020"</ul>
                                    <br/>
                                <li>> Josh.resume</li>
                                    <ul>=> <a href={resume} className="hrefRecolour">"joshuafung.pdf"</a></ul>
                                    <br/>
                                <li>> Josh.email</li>
                                    <ul>=> <a className="hrefRecolour" href="mailto:js404839@dal.ca">"js404839@dal.ca"</a></ul>
                                    <br/>
                            </ul>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}