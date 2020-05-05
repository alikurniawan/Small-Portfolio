import React, { Component } from "react";
import { Label, Input } from "reactstrap";

class cardReacrForm extends Component {
  constructor() {
    super();

    this.state = [{ userName: null }];

    this.handleUsername = this.handleUsername.bind(this);
  }

  handleUsername = (event) =>
    this.setState({
      userName: event.target.value,
    });

  render() {
    return (
      <div>
        <div class="card border-info" style={{ maxWidth: "20rem" }}>
          <div class="card-header">Portfolio 1</div>
          <div class="card-body">
            <h4 class="card-title">React Form</h4>
            <div>
              <Label>Username</Label>
              <Input
                type="text"
                class="form-control"
                name="username"
                value={this.state.userName}
                onChange={this.handleUsername}
              />
              <Label className="mt-3">Answer :</Label>
              <Input value={this.state.userName} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default cardReacrForm;
