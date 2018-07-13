import React, {Component} from 'react';
import './Wizard.css';
import axios from 'axios'
import Dashboard from '../Dashboard/Dashboard' 
import { Link } from 'react-router-dom';



class Wizard extends Component  {
    constructor(props) {
      super(props);
      this.state = {
        name: '',
        address:'',
        city:'',
        state:'',
        zipcode:0
      }
  
      this.handleChange = this.handleChange.bind(this);
      this.handleCancel = this.handleCancel.bind(this);
      this.postNewHouse = this.postNewHouse.bind(this);
      //this.getProducts = this.getProducts.bind(this);
    }
  
    // handleChange(event) { we ass handler
    //   this.setState({value: event.target.value});
    // }

    handleChange(e) {
      //console.log(e.target.name) 
      this.setState({[e.target.name]: e.target.value})
    }
  
    // handleSubmit(event) {
    //   alert('A name was submitted: ' + this.state.value);
    //   event.preventDefault();
    // }
    
  postNewHouse = () => {
    let {name, address,city, state, zipcode} = this.state
    axios.post("api/addListing", {name, address,city, state, zipcode} ).then( res => {
      this.getProducts();
      
    })
  }

  handleCancel() {
        this.setState({
          name: "",
          price: 0,
          img: ""
        });
    
    }
  
    render() {
      return (
        <div className="wrapper">
        <form>
          <h3>Name:</h3>
          <input name="name" placeholder="Enter Name" onChange={e => this.handleChange(e)} />
          <h3>Address:</h3>
          <input name="address" placeholder="Enter Address" onChange={e => this.handleChange(e)} />
          <h3>City  :</h3>
          <input name="city" placeholder="Enter City" onChange={e => this.handleChange(e)} />
          <h3>State:</h3>
          <input name="state" placeholder="Enter State" onChange={e => this.handleChange(e)} />
          <h3>Zipcode:</h3>
          <input name="zipcode" placeholder="Enter Zipcode" onChange={e => this.handleChange(e)} />
          <div className="buttons">
          <Link to='/'><button>Cancel</button></Link>
            <button onClick={() => this.postNewHouse()}>Add to Inventory</button>
          </div>
        </form>
        </div>
      )
    }
  }

  export default Wizard;
