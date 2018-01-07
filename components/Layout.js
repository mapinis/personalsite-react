import React from "react";
import { Link } from "react-router";
import Head from "react-helmet";

import 'bootstrap/dist/css/bootstrap.css';
import "./Layout.css";
import Navigation from "./Navigation.js";

const Layout = ({ children }) => (
  <div className="App">
    <Head>
      <title>mapinis</title>
    </Head>
    <Navigation />
    <div className="content">{children}</div>
    <footer />
  </div>
);

export default Layout;