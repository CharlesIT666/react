import { Component } from "react";
import {Row,Col } from 'antd'
import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";
import NavLeft from "../components/Layout/NavLeft";
//import Home from "../components/Layout/Home";

import '../style/common.css';
import { Outlet } from "react-router-dom";
class Admin extends Component {
    render() {
        return(
            <Row className="container">
                <Col  className="nav-left">

                    <NavLeft></NavLeft>
                </Col>


                <Col  className="main">
                    <Header></Header>
                    <Row className="content">
                        {/* {this.props.children} */}
                        <Outlet />

                        {/* <Home></Home> */}
                    </Row>
                    <Footer></Footer>

                </Col>
            </Row>
        );
    }

}


export default Admin;