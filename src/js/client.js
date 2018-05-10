import React from "react";
import ReactDOM from "react-dom";
import Router from "react-router";
import { Route, BrowserRouter, Link, Redirect, Switch } from "react-router-dom";
import Start from "./pages/Start";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import AboutMe from "./pages/AboutMe";
import ContactMe from "./pages/ContactMe";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Music from "./pages/protected/Music";
import { logout } from "./pages/helpers/auth";
import { firebaseAuth } from "./pages/config/constants";

function PrivateRoute ({component: Component, authed, ...rest}) {
  return (
    <Route
      {...rest}
      render={(props) => authed === true
        ? <Component {...props} />
        : <Redirect to={{pathname: '/login', state: {from: props.location}}} />}
    />
  )
}

function PublicRoute ({component: Component, authed, ...rest}) {
  return (
    <Route
      {...rest}
      render={(props) => authed === false
        ? <Component {...props} />
        : <Redirect to='/music' />}
    />
  )
}

class App extends React.Component {
  state = {
    authed: false,
    loading: true,
  }
  componentDidMount () {
    this.removeListener = firebaseAuth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          authed: true,
          loading: false,
        })
      } else {
        this.setState({
          authed: false,
          loading: false
        })
      }
    })
  }
  componentWillUnmount () {
    this.removeListener()
  }
  render() {
    return this.state.loading === true ? <h1>Loading</h1> : (
      <BrowserRouter>
        <div class="header container">
      			<ul>
      				<div class="row">
      						<div class="col-sm-12 headername">
      								<Link to="/"><li><h2>Caden Lawrence</h2></li></Link>
      						</div>
      				</div>
      				<div class="row">
        					<div id="Home" class="col-sm-3">
        						<li><Link to="/home">Home</Link></li>
        					</div>
        					<div id="AboutMe" class="col-sm-3">
        						<li><Link to="/aboutme">About Me</Link></li>
        					</div>
        					<div id="Projects" class="col-sm-3">
        						<li><Link to="/projects">Projects</Link></li>
        					</div>
        					<div id="ContactMe" class="col-sm-3">
        						<li><Link to="/contactme">Contact Me</Link></li>
        					</div>
              </div>
      					<li><Link id="Music" to="/music">??</Link></li>
            </ul>
          <div name="container">
            <ul>
              <li>
                {this.state.authed
                  ? <button
                      style={{border: 'none', background: 'transparent'}}
                      onClick={() => {
                        logout()
                        }}>Logout</button>
                  : <span>
                      {/*<Link to="/login" >Login</Link>
                      <Link to="/register" >Register</Link>*/}
                    </span>}
              </li>
            </ul>
        </div>
          <div class="container">
            <div class="row">
              <Switch>
                <Route path='/' exact component={Start} />
                <Route path="/home" component={Home}/>
				        <Route path="/aboutme" component={AboutMe}/>
				        <Route path="/projects" component={Projects}/>
				        <Route path="/contactme" component={ContactMe}/>
                <PublicRoute authed={this.state.authed} path='/login' component={Login} />
                <PublicRoute authed={this.state.authed} path='/register' component={Register} />
                <PrivateRoute authed={this.state.authed} path='/music' component={Music} />
                <Route render={() => <h3>No Match</h3>} />
              </Switch>
            </div>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
const div = document.createElement('app');
ReactDOM.render(<App />, app);