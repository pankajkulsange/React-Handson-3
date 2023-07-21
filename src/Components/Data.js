import React, { Component } from "react";

export class Data extends Component {
  render() {
    return (
      <div>
        <h2>EMPLOYEE FEEDBACK DATA</h2>
        <br />
        <div className="center">
          <div className="container">
            <div className="wrapper">
              {this.props.EmpData.map((item, index) => {
                return (
                  <span className="txt-wrapper" key={index}>
                    {item.name} : {item.dept}: {item.rating}
                  </span>
                );
              })}
            </div>
          </div>
        </div>

        <br />
        <button onClick={this.props.handleIsFrom}>Go Back</button>
      </div>
    );
  }
}

export default Data;
