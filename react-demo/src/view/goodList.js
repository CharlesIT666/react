import { Component } from "react";
import {Table,Button, Popconfirm,message} from "antd";
import "antd/dist/antd.css";
import '../style/goodList.css';
import axios from "axios";
import AddProduct from "../components/addProduct";
//import {API} from '../config';

class GoodList extends Component {
  
    state={
        dataSource:[],
        total:0,//,
        showDialog:false,

    };
    loadData=()=>{
        // axios.get("http://localhost:5050/home").then((res)=>{
        //     console.log(res);
        //     this.setState({dataSource:res.data})
        // })

        axios.get("/home/pachong").then((res)=>{
          console.log("222",res);
          
      })
    };
    changePage=(page,pageSize)=>{
      console.log("page",page);
      console.log("pageSize",pageSize);

      const params={
        pageNumber:page,
        pageSize:pageSize
      }
      this.loadData(params);
    }
    handleDelete=(pid)=>{
        axios.delete('/goods/delete',{params:{id:pid}}).then(res=>{
          if(res.data.code==='ok') {
            message.info("删除成功");
            this.loadData();

          }
          else {
            message.info('失败')
          }
        });
    };

    handleAdd=()=>{
        this.setState({showDialog:true});
    };
    closeAdd=()=>{
      this.setState({showDialog:false});
  };
    componentDidMount() {
        //this.loadData();
        const dataSource = [
            {
              key: '1',
              name: '胡彦斌',
              age: 32,
              address: '西湖区湖底公园1号',
              id:'603453'
            },
            {
              key: '2',
              name: '胡彦祖',
              age: 42,
              address: '西湖区湖底公园1号',
              id:'88888'
            },
            {
              key: '1',
              name: '胡彦斌',
              age: 32,
              address: '西湖区湖底公园1号',
              id:'1111'
            },
            {
              key: '2',
              name: '胡彦祖',
              age: 42,
              address: '西湖区湖底公园1号',
              id:'22222'
            },
            {
              key: '1',
              name: '胡彦斌',
              age: 32,
              address: '西湖区湖底公园1号',
              id:'3333'
            },
            {
              key: '2',
              name: '胡彦祖',
              age: 42,
              address: '西湖区湖底公园1号',
              id:'4444'
            },
            {
              key: '1',
              name: '胡彦斌',
              age: 32,
              address: '西湖区湖底公园1号',
              id:'55555'
            },
            {
              key: '2',
              name: '胡彦祖',
              age: 42,
              address: '西湖区湖底公园1号',
              id:'6666'
            },
          ];
          this.setState({dataSource});
    }
    render() {
        const columns = [
            {
              title: '姓名',
              dataIndex: 'name',
              key: 'name',
            },
            {
              title: 'id',
              dataIndex: 'key',
              key: 'key',
            },
            {
              title: '住址',
              dataIndex: 'address',
              key: 'address',
            },
            {
              title: '图片',
              dataIndex: 'picture',
              key: 'picture',
              render:(record)=><img  width="200px" height="200px" alt=""></img>
            },
            {
              title: '操作',
              dataIndex: 'id',
              key: 'id',
              render:(record)=> <span>
                <Popconfirm okText="确认" cancelText="取消" title="你确定要删除吗?" onConfirm={
                  ()=>{
                    //message.info(record);
                    console.log("id",record)
                    this.handleDelete(record);
                  }
                }>
                <Button type="primary">编辑</Button></Popconfirm>
                 <Button type="primary" style={{marginLeft:20}}>删除</Button></span>
            },
          ];
          
        return (
        <div className="goodList">
        <Button type="primary" onClick={this.handleAdd} style={{width:200}}>添加商品</Button>
        <Table dataSource={this.state.dataSource} columns={columns} rowKey="id" pagination={{

          pageSize:3,
          defaultCurrent:1,
          total:this.state.total,
          onChange:this.changePage,
        }}/>

        <AddProduct visible={this.state.showDialog} close={this.closeAdd}></AddProduct>
        
        
        
        
        
        
        </div>
        
        );
        
        
        
    }
}

export default GoodList;