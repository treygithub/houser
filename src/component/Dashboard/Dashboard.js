import React, { Component } from 'react';
import House from '../House/House';
import { Link } from 'react-router-dom';
import axios from 'axios'
import  '../House/House.css'

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listing:[],
      name: '',
      address:'',
      city:'',
      state:'',
      zipcode:0
    }
    this.handleDeleteProduct=this.handleDeleteProduct.bind(this)
  }    
    //Life-cycle
    componentDidMount(){
      this.getProducts();
    }
    //Get
    getProducts(){
      axios.get('/api/fetchListings').then(res => {
        this.setState({
          listing: res.data
        })
      })
    }
    //Delete
    handleDeleteProduct(id) {
      axios
        .delete(`/api/deleteListing/${id}`)
        .then(() => this.getProducts())
    }
    //map over state and pass props to child
    render() {
      let {handleDeleteProduct} = this.props
      let {listing} = this.state
      let instanceLoop  = listing.map((e,i) => {
        return (
          <House 
            key={i}
            id={e.houseid}
            name={e.name}
            address={e.address}
            city={e.city}
            state={e.state}
            zipcode={e.zipcode}
            delete1={this.handleDeleteProduct}
            />
            
         )})

         //Render iteam to screen + link button to form field
         return (
        <div>
         <div className="dashboard">
         <Link to='/Wizard'><button>Add New Property</button></Link>
        </div>
         <div className="theSuck">
         {instanceLoop}
         </div>
         </div>)
    }
  }

  export default Dashboard;