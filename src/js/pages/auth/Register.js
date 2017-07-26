/*import React from "react";
import { auth } from "../helpers/auth";

function setErrorMsg(error) {
  return {
    registerError: error.message
  }
}

export default class Register extends React.Component {
  state = { registerError: null }
  handleSubmit = (e) => {
    e.preventDefault()
    auth(this.email.value, this.pw.value)
      .catch(e => this.setState(setErrorMsg(e)))
  }
  render () {
    return (
      <div class="col-sm-6 col-sm-offset-3">
        <h1>Register</h1>
        <form onSubmit={this.handleSubmit}>
          <div class="form-group">
            <label>Email</label>
            <input class="form-control" ref={(email) => this.email = email} placeholder="Email"/>
          </div>
          <div class="form-group">
            <label>Password</label>
            <input type="password" class="form-control" placeholder="Password" ref={(pw) => this.pw = pw} />
          </div>
          {
            this.state.registerError &&
            <div class="alert alert-danger" role="alert">
              <span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
              <span class="sr-only">Error:</span>
              &nbsp;{this.state.registerError}
            </div>
          }
          <button type="submit" class="btn btn-primary">Register</button>
        </form>
      </div>
    )
  }
}
*/