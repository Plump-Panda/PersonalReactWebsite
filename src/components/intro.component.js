import React, {Component} from 'react';
import { Card } from 'react-bootstrap';

export default class Intro extends Component{
    render(){
        return(
            <div id="introSection" className="sectionPositioning">
                <h2 id="coursesHeader">Hello world!</h2>
                <Card id="introCardPositioning" style={{width: '30%'}}>
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
                                <li>> Josh.workExperience.latest</li>
                                    <ul>=> Latest Work Experience</ul>
                                    <ul>company: "Lockheed Martin CA</ul>
                                    <ul>role: "Technical Co-op</ul>
                                    <ul>startDate: "May 2020</ul>
                                    <ul>endDate: "August 2020</ul>
                                    <br/>
                                <li>> Josh.resume</li>
                                    <ul>=> "link my resume here"</ul>
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