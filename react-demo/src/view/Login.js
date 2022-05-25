import { Component } from "react";
import '../style/main.scss';
import { Form, Input, Button, Checkbox } from 'antd';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
// import BIRDS from 'vanta/dist/vanta.birds.min'
import picture from '../assets/globe.jpeg';

class Login extends Component {

    state = {


    };

    initMap() {
        let camera, scene, renderer, mesh, orbitcontrols;
        init();
        animate();
        //初始化
        function init() {
            //  创建场景对象Scene
            scene = new THREE.Scene();

            //网格模型添加到场景中
            let texture = new THREE.TextureLoader().load(picture);
            let geometry = new THREE.SphereGeometry(15, 32, 16);
            let material = new THREE.MeshBasicMaterial(
                {
                   // color: 0x00ff00,
                   // flatShading: false
                  // map: texture,
                }
            );
            //  material.color=0x00ff00;
           material.map = texture;

            mesh = new THREE.Mesh(geometry, material);
            scene.add(mesh);

            /**
             * 相机设置
             */
            let container = document.getElementById("loginDemo");
            camera = new THREE.PerspectiveCamera(
                75,
                container.clientWidth / container.clientHeight,
                0.1,
                1000
            );
            camera.position.z = 30;

            /**
             * 创建渲染器对象
             */
            renderer = new THREE.WebGLRenderer({ antialias: true });
            renderer.setSize(container.clientWidth, container.clientHeight);
            container.appendChild(renderer.domElement);

            //创建控件对象
            orbitcontrols = new OrbitControls(camera, renderer.domElement);
            console.log(orbitcontrols);
        };

        // 动画 
        function animate() {
            requestAnimationFrame(animate);
            mesh.rotation.x += 0.01;
            mesh.rotation.y += 0.01;
            mesh.rotation.z += 0.01;
            renderer.render(scene, camera);
        };

    }




    componentDidMount() {
        this.initMap();
        //   this.animate();
        // this.effect = BIRDS({
        //     el: "#loginDemo",
        //     THREE:THREE
        // })
    }
    // componentWillUnmount() {
    //     if (this.effect) {
    //         this.effect.destroy()
    //     }

    // }
    onFinish = (values) => {
        console.log('Success:', values);
        if (values.username === 'charles') {
            window.location.href = '/admin';
        }
    };

    onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    render() {
        return (

            <div className="login" id="loginDemo">
                <div className="form">
              {/* <img src={picture}   alt=""/> */}
                    <Form
                        name="basic"
                        labelCol={{ span: 8 }}
                        wrapperCol={{ span: 16 }}
                        initialValues={{ remember: true }}
                        onFinish={this.onFinish}
                        onFinishFailed={this.onFinishFailed}
                        autoComplete="off"
                    >
                        <Form.Item
                            label="用户名"
                            name="username"
                            rules={[{ required: true, message: 'Please input your username!' }]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="密码"
                            name="password"
                            rules={[{ required: true, message: 'Please input your password!' }]}
                        >
                            <Input.Password />
                        </Form.Item>

                        <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
                            <Checkbox>记住密码</Checkbox>
                        </Form.Item>

                        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                            <Button type="primary" htmlType="submit" >
                                登录
                            </Button>
                        </Form.Item>
                    </Form>

                    {/* <ul>
                    <li><a href="/admin">User</a></li>
                    <li><a href="/admin">Password</a></li>
                </ul> */}

                </div>
            </div>
        );
    }
}



export default Login