import React from 'react';
import  assestapi  from '../api/assest'
class assest extends React.Component {
    constructor(props) {
        super(props);

    }
    componentDidMount(){
        
        assestapi.getAssestList()
    }
    render() {
        return <h1>Hello, {this.props.name}</h1>;
    }
}
export default assest