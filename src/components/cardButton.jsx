import React, { Component } from "react";

class cardButton extends Component {
  state = {};
  render() {
    return (
      <div>
        <div class="card border-info" style={{ maxWidth: "20rem" }}>
          <div class="card-header">PortFolio 2</div>
          <div class="card-body">
            <h4 class="card-title">Button Search</h4>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default cardButton;
