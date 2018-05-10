import registerServiceWorker from './registerServiceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
import Router from 'react-router';
import { Route, BrowserRouter, Link, Redirect, Switch } from 'react-router-dom';
import Start from './pages/Start';
import $ from 'jquery';
import Home from './pages/Home';
import Projects from './pages/Projects';
import AboutMe from './pages/AboutMe';
import ContactMe from './pages/ContactMe';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Music from './pages/protected/Music';
import { logout } from './pages/helpers/auth';
import { firebaseAuth } from './pages/config/constants';

function PrivateRoute({ component: Component, authed, ...rest }) {
    return ( <
        Route {...rest }
        render = {
            (props) => authed === true ?
            < Component {...props }
            /> :
                < Redirect to = {
                { pathname: '/login', state: { from: props.location } } }
            />} /
            >
        )
    }

    function PublicRoute({ component: Component, authed, ...rest }) {
        return ( <
            Route {...rest }
            render = {
                (props) => authed === false ?
                < Component {...props }
                /> :
                    < Redirect to = '/music' / >
            }
            />
        )
    }
    export default class App extends React.Component {
            handleClick(event) {
                event.preventDefault();
                var node = ReactDOM.findDOMNode(this.refs.el);
                node.classList.toggle('menu-open');
                //Mobile.classList.toggle('menu-open');
            }
            Menuclose(event) {
                var node = ReactDOM.findDOMNode(this.refs.el);
                node.classList.toggle('menu-open');
                //Mobile.classList.toggle('menu-open');
            }
            state = {
                authed: false,
                loading: true,
            }

            componentDidMount() {
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
            componentWillUnmount() {
                this.removeListener()
            }

            render() {
                return this.state.loading === true ? < h1 > Loading </h1> : 
                ( 
                    <BrowserRouter>
                    <div className = "header container" >
                    <ul>
                    <div ref = "el"
                        className = "Mobilemenu row" >
                        <a href = ""
                            onClick = { this.handleClick.bind(this) }
                            className = "menu-switch" >
                                <i className = "bar-icon" > { /*MADE ENTIRELY WITH CSS*/ } <div className = "bar-icon-1" > </div> 
                                    <div className = "bar-icon-2" > </div> 
                                    <div className = "bar-icon-3" > </div> 
                                </i> 
                        </a> 
                    <nav className = "menu" >
                    <ul className = "list-unstyled" >
                    <li > < Link id = "mobileHome"
                    onClick = { this.Menuclose.bind(this) }
                    to = "/home" > Home </Link></li >
                    <
                    li > < Link id = "mobileAbout"
                onClick = { this.Menuclose.bind(this) }
                to = "/aboutme" > About Me </Link></li >
                    <
                    li > < Link id = "mobileProject"
                onClick = { this.Menuclose.bind(this) }
                to = "/projects" > Projects </Link></li >
                    <li> < Link id = "mobileContact"
                onClick = { this.Menuclose.bind(this) }
                to = "/contactme" > Contact Me </Link></li >
                </ul> </nav> </div> <div className = "row" >
                    <nav className = "col-sm-12 headername" >
                    <Link to = "/" > 
                        <h2> Caden Lawrence </h2>
                    </Link >
                    </nav>  </div> 
                    <div className = "Deskmenu row" > {
                        /*<div id="Home" className="col-sm-3">
                                						<li><Link to="/home">Home</Link></li>
                                					</div>
                                					<div id="AboutMe" className="col-sm-3">
                                						<li><Link to="/aboutme">About Me</Link></li>
                                					</div>
                                					<div id="Projects" className="col-sm-3">
                                						<li><Link to="/projects">Projects</Link></li>
                                					</div>
                                					<div id="ContactMe" className="col-sm-3">
                                						<li><Link to="/contactme">Contact Me</Link></li>
                                					</div>*/
                    } 
                    <nav className = "cl-effect-5" >
                    <Link id = "Home"
                        className = "col-sm-3"
                        to = "/home" > 
                            < span data-hover = "Home" > Home </span>
                    </Link >
                    <Link id = "AboutMe"
                            className = "col-sm-3"
                            to = "/aboutme" > 
                            < span data-hover = "About Me" > About Me </span>
                    </Link >
                    <Link id = "Projects"
                        className = "col-sm-3"
                        to = "/projects" > < span data-hover = "Projects" > Projects </span>
                    </Link >
                    <Link id = "ContactMe"
                        className = "col-sm-3"
                        to = "/contactme" > 
                            < span data-hover = "Contact Me" > Contact Me </span>
                    </Link >
                    </nav> </div> 
                    <li> 
                        < Link id = "Music"
                            to = "/music" > ? ? 
                        </Link>
                    </li >
                    </ul> 
                    <div name = "container" >
                    <ul >
                    <li > {
                        this.state.authed ?
                        < button id = "logout"
                        style = {
                            { border: 'none', background: 'transparent' } }
                        onClick = {
                            () => {
                                logout()
                            }
                        } > Logout </button> :
                            < span > {
                                /*<Link to="/login" >Login</Link>
                                                      <Link to="/register" >Register</Link>*/
                            } 
                            </span>} 
                    </li> 
                            </ul> 
                            </div> 
                            <div className = "container" >
                            <div className = "row" >
                            <Switch >
                            <Route path = '/'
                                exact component = { Start }
                            /> 
                            <Route path = "/home"
                                component = { Home }
                            /> 
                            <Route path = "/aboutme"
                                component = { AboutMe }
                            /> 
                            <Route path = "/projects"
                                component = { Projects }
                            /> 
                            <Route path = "/contactme"
                                component = { ContactMe }
                            /> 
                            <PublicRoute authed = { this.state.authed }
                                path = '/login'
                                component = { Login }
                            /> 
                            <PublicRoute authed = { this.state.authed }
                                path = '/register'
                                component = { Register }
                            /> 
                            <PrivateRoute authed = { this.state.authed }
                                path = '/music'
                                component = { Music }
                            /> 
                            <Route render = {
                                () => < h3 > No Match </h3>} / >
                            </Switch> 
                            </div> 
                            </div> 
                            </div> 
                        </BrowserRouter>
                        );
                    }
            }