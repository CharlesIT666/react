import Admin from "../view/Admin";
import Home from "../components/Layout/Home";
import GoodList from "../view/goodList";
import Login from '../view/Login';
import {  useState } from "react"
//import { useLocation } from 'react-router-dom'

const NotFound = () => {
    // 使用 hook


    return <div>404</div>
}

const FrontPage = () => {
    //使用 hook
    //     const location = useLocation();
    //     const { from, pathname } = location

    //     //var name=pathname;
    //   //  name.slice(-1)
    //     console.log(pathname.slice(1))

    return <div>vuex redux</div>
}

const BackPage = () => {
    // 使用 hook


    return <div>
        <ul>

            <li>day1 变量,输入,条件语句</li>
            <li>day2 for循环, while 循环,函数，导入模块</li>
            <li>day3
                交换两个值变量，将摄氏度转化为华氏温度，求数字个位数之和，判断莫数是否为素数，生成随机数，删除列表中的重复项
            </li>
            <li>day4
                反转一个字符串（回文检测）,计算最大公约数，合并两个有序数组，猜数字游戏，计算年龄
            </li>
            <li>day5 栈 队列 字段 元组 树 链表</li>
            <li>day6
                面向对象编程
                对象 类 方法 构造函数，继承
            </li>
            <li>day7
                搜索 （线性和二分查找）
                排序 （冒泡排序、选择排序）
                递归 （阶乘 菲波那契数列）
                时间复杂性（线性 二次和常量）
            </li>
        </ul>


    </div>
}

const DataPage = () => {
    // 使用 hook


    return <div>
        <ul>

            <li>day1 基本SQL查询（创建表 选择 where查询 更新） SQl函数（Avg Max Count） 关系数据库（规范化） 内连接 外连接</li>
            <li>day2 利用一种数据库框架（SQLite 或 panda）连接到数据库 在多个表中创建并插入数据，再从表中读取数据</li>
            <li>day3
                如何调用API 学习Json 微服务 以及表现层app转换app接口（Rest API）
            </li>
            <li>day4
                Numpy熟悉
            </li>
            <li>day5 学习django,使用它构建一个网站 flask</li>
            <li>day6
               学习单元测试 pytest 如何设置和查看日志 和使用断点调试
            </li>
            
        </ul>


    </div>
}


// 子传父通信
const Son = ({ setCount }) => {


    return <button onClick={() => setCount(count => count + 1)}>点击+1</button>
}
const Father = () => {
    const [count, setCount] = useState(0);


    return (
        <>
            <div>计数值:{count}</div>
            <Son setCount={setCount} ></Son>

        </>
    )
}


const routes = [
    {
        path: '/',
        element: <Login />
    },

    {
        path: '/admin',
        element: <Admin />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: '/admin/goodList',
                element: <GoodList />
            },
            {
                path: '/admin/goodInfo',
                element: <Father />
            },
            {
                path: '/admin/frontEnd',
                element: <FrontPage />
            },
            {
                path: '/admin/backEnd',
                element: <BackPage />
            },
            {
                path: '/admin/dataBase',
                element: <DataPage />
            }
        ]
    },

    {
        path: '*',
        element: <NotFound />
    }

]

export default routes