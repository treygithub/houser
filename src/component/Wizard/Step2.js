import React, {Component} from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';

class Step2 extends Component  {
    constructor(props) {
      super(props);
      this.state = {
        image_url: ''
      }
  
    }

    handleImage(val) {
      this.setState({image_url : val})
      //console.log(this.state.image_url)
    }

    postNewImage = () => {
    let {image_url} = this.state
    axios.post("api/addimageurl", {image_url} )
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
            <button onClick={() => this.postNewImage()}>Add Image</button>
            <Link to='/Step3'><button>Step3</button></Link>
        </form>
        </div>
      )
    }
  }

  export default Step2;