import {Component} from "react"
import {Modal} from 'antd'

class AddProduct extends Component {

    render() {
        return <Modal visible={this.props.visible}  onCancel={()=>this.props.close()} title="添加商品" okText="添加" cancelText="取消">

            添加商品信息
        </Modal>
    }
}





export default AddProduct;