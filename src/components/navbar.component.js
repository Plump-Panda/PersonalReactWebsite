import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css"
import { Dropdown } from 'react-bootstrap';
import DropdownToggle from 'react-bootstrap/esm/DropdownToggle';
import DropdownMenu from 'react-bootstrap/esm/DropdownMenu';
import DropdownItem from 'react-bootstrap/esm/DropdownItem';

export default class Navbar extends Component{
    render(){
        return(
                <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                    <Link to="/" id="header" className="navbar-brand">Joshua Fung</Link>
                

                    {/* <Dropdown>
                        <DropdownToggle varrient="success">
                            ||||||
                        </DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem as={Link} to="/">About</DropdownItem>
                        </DropdownMenu>
                    </Dropdown> */}
                </nav>
        );
    }
}