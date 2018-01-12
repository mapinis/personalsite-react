import React from "react";
//import Link from "gatsby-link";
import { Nav, NavItem, NavLink } from 'reactstrap';

import "./index.css";
import 'bootstrap/dist/css/bootstrap.css';

const Index = ({ children }) => (
    <div className="App">
        <div className="App_Nav">
            <p className="App_Title">mapinis</p>
            <Nav vertical>
                <NavItem>
                    <NavLink href="/">Home</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/">About</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/">Programming</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/">Photography</NavLink>
                </NavItem>
            </Nav>
        </div>
        <div className="content">
            {children()}
        </div>
    </div>
);

export default Index;