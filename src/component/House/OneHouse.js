import React, {Component} from "react"
import axios from 'axios'

class List extends Component {
    constructor(props) {
        super(props);
        this.state={
            product:[]
        }

    }

ComponentDidMount(){
    axios.get('/api/fetchOne').then(res => {
        this.setState({
          product: res.data
        })
      })

}
    
    render() {
        const { product } = this.state
        return (
                <div >
                    {/* <link to={`/product/${product.id}`}><{product.name}</link> */}
                </div>
        );
    }
    }

    export default List;