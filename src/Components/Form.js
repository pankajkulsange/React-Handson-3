import React, { Component } from "react";
import "./From.css";

export class Form extends Component {
  render() {
    return (
      <div className="formElement">
        <br />
        <br />
        <h2>EMPLOYEE FEEDBACK FORM</h2>
        <br />
        <div>
          {/* <form onSubmit={this.props.handleSubmit}> */}
          <span>Name: </span>
          <input
            type="text"
            name="name"
            value={this.props.data.name}
            onChange={this.props.handleChange}
          />
          <br />
          <br />
          <span>Department: </span>
          <input
            type="text"
            name="dept"
            value={this.props.data.dept}
            onChange={this.props.handleChange}
          />
          <br />
          <br />
          <span>Rating: </span>
          <input
            type="text"
            name="rating"
            value={this.props.data.rating}
            onChange={this.props.handleChange}
          />
          <br />
          <br />
          <button
            onClick={() => {
              this.props.handleSubmit();
              this.props.handleIsFrom();
            }}
          >
            Submit
          </button>
        </div>
      </div>
    );
  }
}

export default Form;
