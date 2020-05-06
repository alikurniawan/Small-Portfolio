import React, { Component } from "react";
import {Label, Input} from 'reactstrap';

class cardButton extends Component {
 constructor(){
   super();
 }
  render() {
    return (
      <div>
        <div class="card border-info" style={{ maxWidth: "20rem" }}>
          <div class="card-header">PortFolio 2</div>
          <div class="card-body">
            <h4 class="card-title">Button Search</h4>
            <div>
              <Label>Username</Label>
              <Input
                type="text"
                class="form-control"
                name="username"
                value=""
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default cardButton;
