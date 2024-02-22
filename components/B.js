import React, { Component } from "react";
import { mycontext } from "./A";

export class B extends Component {
  render() {
    return (
      <div>
        <h1>Component B</h1>
        <Consumer>
          {({ data, handlecheck }) => (
            <div>
              <h3>
                {data.roll},{data.name}
              </h3>
              '<button onClick={handlecheck}>Change roll number</button>
            </div>
          )}
        </Consumer>
      </div>
    );
  }
}

export default B;
