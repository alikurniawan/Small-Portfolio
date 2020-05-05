import React from "react";
import { Container } from "reactstrap";
import Header from "./components/nHeader";
import CardReactForm from "./components/cardReactForm";

function App() {
  return (
    <div>
      <Header />
      <Container>
        <input
          // style={{ width: "500px" }}
          class="form-control mr-sm-2"
          type="text"
          placeholder="Search"
        />
      </Container>
      <div className="row mt-3 ml-3 mr-3">
        <div className="col">
          <CardReactForm />
        </div>
        <div className="col">
          <CardReactForm />
        </div>
        <div className="col">
          <CardReactForm />>
        </div>
        <div className="col">
          <CardReactForm />>
        </div>
      </div>
    </div>
  );
}

export default App;
