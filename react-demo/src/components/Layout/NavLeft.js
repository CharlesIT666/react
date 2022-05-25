// import { Component, useEffect, useState } from "react";
import {  useEffect, useState } from "react";
import { Menu, Button } from 'antd';
import { useLocation } from 'react-router-dom'
//  import logo from '../../../src/logo.svg';
import { Link } from "react-router-dom";
import "antd/dist/antd.css";
import {
    AppstoreOutlined,
    MenuFoldOutlined,

    MenuUnfoldOutlined,
    DesktopOutlined,
    ContainerOutlined,
    MailOutlined,
    RobotOutlined,
    SettingOutlined 
} from '@ant-design/icons';

const { SubMenu } = Menu;





// useEffect(()=>{
//     setSelectedKeys([location.pathname])
// },[location])

// 类组件

// class NavLeft extends Component {

//     state = {
//         collapsed: false,
//         title: '后台管理系统',

//     };

//     toggleCollapse = () => {

//         this.setState({ collapsed: !this.state.collapsed });
//         console.log(this.state.collapsed);
//     };



//     componentDidMount () {

//     }

//     render() {
//         // const goPage = ({key})=>{
//         //     history.push(key)
//         //     }



//          const GetActive = () => {
//          //    let pathname='/admin'
//         //    const {pathname} = useLocation();
//          // 使用 hook
//          const location = useLocation();
//              let pathname = location.pathname;
//         //      let path= [pathname];
//              console.log(pathname);

//            return pathname
//         }

//         return (
//             <div  style={{
//                 width: this.state.collapsed ? 85 : 256,
//             }}>
//                 {/* <img src={logo} style={{width:32,height:32}} alt=""/> */}
//                 <span style={{fontSize:20,color:"white",paddingLeft:5}} >{this.state.collapsed ? <RobotOutlined />:this.state.title }</span>
//                 <Button
//                     icon={  this.state.collapsed ?  <MenuUnfoldOutlined /> :<MenuFoldOutlined />}
//                     type="primary"
//                     onClick={this.toggleCollapse}
//                     style={{
//                         marginBottom: 16,
//                         float:'right'
//                     }}
//                 >

//                 </Button>
//                 <Menu
//                     mode="inline"
//                     theme="dark"
//                     inlineCollapsed={this.state.collapsed}
//                     defaultSelectedKeys={GetActive}
//                     defaultOpenKeys={['/']}

//                 >

//                     <SubMenu
//                         key="/"
//                         icon={<AppstoreOutlined />}
//                         title='主页'
//                     >
//                         <Menu.Item key="/admin" icon={<  ContainerOutlined/>}><Link to={'/admin'}>面板</Link></Menu.Item>
//                         <Menu.Item key="/admin/goodList" icon={<MailOutlined />}><Link to={'/admin/goodList'}>表格</Link></Menu.Item>
//                         <Menu.Item key="/admin/goodInfo" icon={<DesktopOutlined />}><Link to={'/admin/goodInfo'}>测试</Link></Menu.Item>
//                     </SubMenu>

//                     <SubMenu
//                         key="2"
//                         icon={<AppstoreOutlined />}
//                         title='学习'
//                     >
//                         <Menu.Item key="6" icon={<  ContainerOutlined/>}><Link to={'/admin'}>面板</Link></Menu.Item>
//                         <Menu.Item key="7" icon={<MailOutlined />}><Link to={'/admin/goodList'}>表格</Link></Menu.Item>
//                         <Menu.Item key="8" icon={<DesktopOutlined />}><Link to={'/admin/goodInfo'}>测试</Link></Menu.Item>
//                     </SubMenu>


//                 </Menu>
//             </div>
//         )
//     }
// }

// 函数组件 hooks

function NavLeft() {

    const [title, ] = useState('后台管理系统');
    const [collapsed, setCollapsed] = useState(false);
    const {pathname} = useLocation();

//componentDidMount
    useEffect(()=>{

    })

    const toggleCollapse = (e) => {
        setCollapsed(!collapsed);

    };

    // const getactive = () => {
    //     console.log(pathname)
    // }

    
    const menuClick = (item) => {
            console.log(item)
    }

    return (
        <div style={{
            width: collapsed ? 85 : 256,
        }}>
            {/* <img src={logo} style={{width:32,height:32}} alt=""/> */}
            <span style={{ fontSize: 20, color: "white", paddingLeft: 5 }} >{collapsed ? <RobotOutlined /> : title}</span>
            <Button
                icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                type="primary"
                onClick={toggleCollapse}
                style={{
                    marginBottom: 16,
                    float: 'right'
                }}
            >

            </Button>
            <Menu
                mode="inline"
                theme="dark"
                inlineCollapsed={collapsed}
                defaultSelectedKeys={pathname}
                defaultOpenKeys={['/','2']}
                onClick={menuClick}

            >

                <SubMenu
                    key="/"
                    icon={<AppstoreOutlined />}
                    title='主页'
                >
                    <Menu.Item key="/admin" icon={<  ContainerOutlined />}><Link to={'/admin'}>面板</Link></Menu.Item>
                    <Menu.Item key="/admin/goodList" icon={<MailOutlined />}><Link to={'/admin/goodList'}>表格</Link></Menu.Item>
                    <Menu.Item key="/admin/goodInfo" icon={<DesktopOutlined />}><Link to={'/admin/goodInfo'}>测试</Link></Menu.Item>
                </SubMenu>

                <SubMenu
                    key="2"
                    icon={<SettingOutlined  />}
                    title='学习'
                >
                    <Menu.Item key="/admin/frontEnd" icon={<  ContainerOutlined />}><Link to={'/admin/frontEnd'}>前端</Link></Menu.Item>
                    <Menu.Item key="/admin/backEnd" icon={<MailOutlined />}><Link to={'/admin/backEnd'}>后端</Link></Menu.Item>
                    <Menu.Item key="/admin/dataBase" icon={<DesktopOutlined />}><Link to={'/admin/dataBase'}>数据库</Link></Menu.Item>
                </SubMenu>


            </Menu>
        </div>
    )

}

export default NavLeft