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
  }    
    
    componentDidMount(){
      this.getProducts();
    }
    getProducts(){
      axios.get('/api/fetchListings').then(res => {
        this.setState({
          listing: res.data
        })
        //console.log(res);
      })
    }
    
    render() {
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
            />
            
         )})
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