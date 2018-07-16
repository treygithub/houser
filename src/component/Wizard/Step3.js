import React, {Component} from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import { updateMortgage,updateRent } from '../ducks/reducer';

class Step3 extends Component  {
    constructor(props) {
      super(props);
      this.state = {
          mortgage:'',
          rent:''
      }

    }

    handleMortgage(value) {
      this.setState({mortgage: value})
    }

    handleRent(value) {
      this.setState({rent: value})
    }

    postNewHouse = () => {
      let {mortgage,rent} = this.state
      const {name, address,city, state, zipcode,image_url} = this.props
      axios.post("api/addListing", {name, address, city, state, zipcode, image_url, mortgage, rent} );
      }

    render() {
      return (
        <div className="wrapper">
        <form>
        <h1>step3</h1>
          <h3>Monthly Mortgage Amount: </h3>
          <input value={this.state.mortgage} name="mortgage" type="number" placeholder="Enter Amount" onChange={e => this.handleMortgage(e.target.value)} />
          <h3>Desired Monthly Rent: </h3>
          <input value={this.state.rent} name="rent" type="number" placeholder="Enter Amount" onChange={e => this.handleRent(e.target.value)} />
          <div className="buttons">
            <Link to='/Step2'><button>Go Back</button></Link>
            <Link to='/'><button>Cancel</button></Link>
            <button onClick={() => this.postNewHouse()}>Add to Inventory</button>
          </div>
        </form>
        </div>
      )
    }
  }

  const mapStateToProps = state => state;
  export default connect( mapStateToProps, { updateMortgage, updateRent } ) (Step3);