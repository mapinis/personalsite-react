import React from "react";
import { Nav, NavItem, NavLink } from 'reactstrap';

import "./index.css";
import 'bootstrap/dist/css/bootstrap.css';
import logo from "./logo.jpg";

const Index = ({ children }) => (
    <div id="App">
        <div id="App_Nav">
            <img height="auto" width="200px" id="App_Nav_Image" src={logo} alt="mapinis logo" />
            <p id="App_Nav_Title">mapinis</p>
            <p id="App_Nav_Subtitle">Mark Apinis's Personal Site</p>
            <a id="App_Nav_Email" href="mailto:mapinis2019@gmail.com">mapinis2019@gmail.com</a>
            <Nav vertical>
                <NavItem>
                    <NavLink href="/">Home</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/about">About</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/programming">Programming</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/photography">Photography</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/blog">Blog</NavLink>
                </NavItem>
            </Nav>
        </div>
        <div id="content">
            {children()}
        </div>
    </div>
);

export default Index;