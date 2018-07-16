import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import { updateImage_Url } from '../ducks/reducer';

class Step2 extends Component  {
    constructor(props) {
      super(props);
      this.state = {
        image_url: ''
      }
    }

    handleImage(val) {
      this.setState({image_url : val})
      console.log(this.state.image_url)
    }

    sendToReducer2() {
      let { updateImage_Url } = this.props;
      updateImage_Url(this.state.image_url);
    }
  
    render() {
      return (
        <div className="wrapper">
        <form>
          <h1>step2</h1>
          <h3>Name:</h3>
          <input name="image_url" placeholder="Enter Image-Url" onChange={e => this.handleImage(e.target.value)}/>
            <Link to='/Wizard'><button>Go Back</button></Link>
            <Link to='/'><button>Cancel</button></Link>
            <button onClick={() => this.sendToReducer2()}>SUBMIT</button>
            <Link to='/Step3'><button>Step3</button></Link>
        </form>
        </div>
      )
    }
  }

  const mapStateToProps = state => state;
  export default connect( mapStateToProps, { updateImage_Url } ) (Step2);