import React, {Component} from 'react';
import './Wizard.css';
import axios from 'axios'
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
    }

  
    handleChange(e) {
      this.setState({[e.target.name]: e.target.value})
    }
    
  
    render() {
      return (
        <div className="wrapper">
        <form>
          <h3>Name:</h3>
          <input value={this.state.name} name="name" placeholder="Enter Name" onChange={e => this.handleChange(e)} />
          <h3>Address:</h3>
          <input value={this.state.address} name="address" placeholder="Enter Address" onChange={e => this.handleChange(e)} />
          <h3>City  :</h3>
          <input value={this.state.city}name="city" placeholder="Enter City" onChange={e => this.handleChange(e)} />
          <h3>State:</h3>
          <input value={this.state.state} name="state" placeholder="Enter State" onChange={e => this.handleChange(e)} />
          <h3>Zipcode:</h3>
          <input value={this.state.zipcode} name="zipcode" placeholder="Enter Zipcode" onChange={e => this.handleChange(e)} />
          <div className="buttons">
          <Link to='/'><button>Cancel</button></Link>
            <Link to='/Step2'><button>Next</button></Link>
            {/* <button onClick={() => this.postNewHouse()}>Add to Inventory</button> */}
          </div>
        </form>
        </div>
      )
    }
  }

  export default Wizard;
