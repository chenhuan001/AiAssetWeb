import { Modal, Button } from 'antd';
import React from 'react';

import store from '../../store/store';
import FbxModel from '../../components/fbxmodel/model'
class assestModal extends React.Component {
  state = { visible: store.getState().visable,data: store.getState().modalData};
  componentDidMount() {
    // 3.subscribe()：监听状态的改变
    store.subscribe(() => {
      // 将修改后的数据重新存储到state中
      console.log(store.getState())
      this.setState({
        visible: store.getState().visable,
        data:store.getState().modalData
      })
    })
  }
  componentWillUnmount() {
    // 4.unsubscribe()：移除监听状态的改变事件
    store.unsubscribe();
  }
  showModal = () => {
    store.dispatch({visable:true,type:'visable'})
  };

  handleOk = e => {
    console.log(e);
    
    store.dispatch({visable:false,type:'visable'})
    
    store.dispatch({modalData:{},type:'modal'})
  };

  handleCancel = e => {
    console.log(e);
    store.dispatch({visable:false,type:'visable'})
    store.dispatch({modalData:{},type:'modal'})
  };

  render() {
    return (
      <div>
        <Modal
          title=""
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <FbxModel> </FbxModel>
        </Modal>
      </div>
    );
  }
}

export default assestModal