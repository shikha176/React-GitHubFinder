import React,{ Fragment} from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Users from './components/users/Users';
import User from './components/users/User';
import Search from './components/search/Search'
import About from './components/pages/About';
import GitHubState from './components/context/github/GitHubState';

/* function App() {
  return <div className='App'>Hello React!</div>;
} */

const App = () => {  

  /* async componentDidMount(){
   // console.log(process.env.REACT_APP_GITHUB_CLIENT_ID);
    this.setState({loading:true});
    const users = await axios.get(`https://api.github.com/users?client_id=
    ${process.env.REACT_APP_GITHUB_CLIENT_ID}
    &client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

    //console.log(users.data);
    this.setState({loading:false, users: users.data});

  }; */  

  return (
    <GitHubState>
      <Router>
        <div className="App">
          <Header/>          
          <div className='container pt-3'>
          <Switch>
              <Route exact path='/' render={ props =>(
                  <Fragment>
                      <Search/>
                <Users/>
                  </Fragment>
                )}/>
              <Route exact path='/about' component={About}/>
              <Route exact path ='/user/:login' component={User}/>
              )}/>
          </Switch>                
          </div>         
        </div>
      </Router>   
    </GitHubState>
  );
  
}

export default App;
