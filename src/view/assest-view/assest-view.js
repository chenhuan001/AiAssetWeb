import { Divider } from 'antd';
import React from 'react';
import assestapi from '../../api/assest'
import './css/assest.css'
import store from '../../store/store';
class AssestListItem extends React.Component {
    constructor(props) {
        super(props);
        console.log(props,'props')
        this.activateLasers = this.activateLasers.bind(this)
    }
    activateLasers(){
        store.dispatch({visable:true,type:'visable'})
        store.dispatch({modalData:this.props.data,type:'modal'})
    }
    render() {
        return <div className='item' onClick={this.activateLasers}>
                {
                    this.props.data.img? <img src={this.props.data.img?this.props.data.img:''} className='image'></img>:<div className='no-image'>没有缩略图哟~</div>
                }
                <div className='item-name'>{this.props.data.name}</div>
        </div>;
    }
}
class Assest extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dataList: [],
            pageSize: 20,
            pageNum: 1
        }
    }
    componentDidMount() {
        assestapi.getAssestList().then(res => {
            console.log(res.data, 'res')
            this.setState({
                dataList: res.data
            })
        })
    }
    render() {
        const data = this.state.dataList
        const listItems = data.map((item) => {
            return (<AssestListItem key={item.id} data={item}>
            </AssestListItem>)
        }
        );
        return <div className='assest-list'>
            {listItems}
        </div>;
    }
}
export default Assest