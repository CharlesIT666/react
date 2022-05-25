//import { Component, useState } from "react"
import { BrowserRouter,  useRoutes } from "react-router-dom";
import routers from "./routes";
// import Login from '../view/Login';
// import App from '../App'
// import Admin from "../view/Admin";
// import Home from "../components/Layout/Home";
// import GoodList from "../view/goodList";
// import { useLocation } from 'react-router-dom'
// import AddProduct from "../components/addProduct";
// class Router extends Component {

//     render() {
//         // const NotFound = () => {
//         //     // 使用 hook
//         //     const location = useLocation();
//         //     const { from, pathname } = location

//         //     return <div>404你当前在 {pathname}，你是从 {from} 跳转过来的</div>
//         // }

//         // const FrontPage = () => {
//         //     // 使用 hook
//         //     const location = useLocation();
//         //     const { from, pathname } = location

//         //     return <div>你当前在 {pathname}，你是从 {from} 跳转过来的</div>
//         // }

//         // const BackPage = () => {
//         //     // 使用 hook
//         //     const location = useLocation();
//         //     const { from, pathname } = location

//         //     return <div>你当前在 {pathname}，你是从 {from} 跳转过来的</div>
//         // }

//         // const DataPage = () => {
//         //     // 使用 hook
//         //     const location = useLocation();
//         //     const { from, pathname } = location

//         //     return <div>你当前在 {pathname}，你是从 {from} 跳转过来的</div>
//         // }


//         // // 父传子通信
//         // // const Son = ({name}) => {


//         // //     return <h1>{name}</h1>
//         // // }
//         // // const Father = () => {
//         // //     const [name,setName] =useState('jack')

//         // //     return <>
//         // //     <div>ddada
//         // //     <Son name={name} ></Son>
//         // //     </div>
//         // //     </>
//         // // }

//         //    // 子传父通信
//         //    const Son = ({setCount}) => {


//         //     return <button onClick={()=>setCount(count=>count+1)}>点击+1</button>
//         // }
//         // const Father = () => {
//         //     const [count,setCount] =useState(0);


//         //     return (
//         //     <>
//         //     <div>计数值:{count}</div>
//         //     <Son setCount={setCount} ></Son>

//         //     </>
//         //     )
//         // }


//         return (
//             <BrowserRouter>
//                 <App>
//                     <Routes>


//                         <Route path="/" element={<Login />}>  </Route>
//                         <Route path="/admin" element={<Admin />}>



//                             <Route index element={<Home />}></Route>
//                             <Route path="/admin/goodList" element={<GoodList />}></Route>
//                             <Route path="/admin/goodInfo" element={<Father />}></Route>

//                             <Route path="/admin/frontEnd" element={<FrontPage />}></Route>
//                             <Route path="/admin/backEnd" element={<BackPage />}></Route>
//                             <Route path="/admin/dataBase" element={<DataPage />}></Route>






//                         </Route>

//                         <Route path="*" element={<NotFound />}></Route>

//                     </Routes>
//                 </App>


//             </BrowserRouter>
//         )
//     }

// }


function Router() {

    const GetRoute = () => useRoutes(routers);

    return (
        <BrowserRouter>
       
        
           
                    <GetRoute/>
                   
             
         
        </BrowserRouter>
    )

}




export default Router