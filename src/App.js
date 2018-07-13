import React, { Component } from 'react';
import './App.css';
import Header from './component/Header/Header';
import { Link } from 'react-router-dom';
import routes from './routes';
import './component/Header/Header.css';
import './component/Dashboard/Dashboard.css';
import './App.css'

// import Dashboard from './component/Dashboard/Dashboard';
// import Wizard from './component/Wizard/Wizard'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title"><Header /></h1>
        </header>
        <nav>
          <ul>
            <li className='dashboard' style={{listStyle:'none'}}><Link to='/'>Dashboard</Link></li>
            {/* <li style={{listStyle:'none'}}><Link to='/Wizard'>Add New Property</Link></li> */}
          </ul>
        </nav>
        { routes }
      </div>
    );
  }
}

export default App;