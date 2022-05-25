import { Component } from "react";
import {Row,Col } from 'antd';
import '../../style/header.css';
import { useLocation } from 'react-router-dom'
class Header extends Component {
    state={
    
        userName:'Charles',

    };


    render() {
        const PageTitle = () => {
            //使用 hook
            const location = useLocation();
            const {  pathname } = location
        
            //var name=pathname;
          //  name.slice(-1)
            console.log(pathname.slice(1))
        
            return pathname.slice(1)
        }

        return <div>

            <Row className="header">

            <Col span={4} className="header-left">
                    <span><PageTitle/></span>

                </Col>
                <Col span={20} className="header-right">
                    <span className="header-left-span">欢迎：{this.state.userName}登录系统</span>
                    <span>2022-05-01</span>

                </Col>

            </Row>
            

            {/* <Row >


                <Col span={4}>
                    <span>首页</span>

                </Col>
                <Col span={20}>
                    <span>2022-05-01</span>

                </Col>

            </Row> */}

        </div>;
    }
}



export default Header