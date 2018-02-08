import React, { Component } from "react";
import classnames from "classnames";
import Input from "./input";
import Button from "./button";

export default class Form extends Component {
  constructor(prop) {
    super(prop);
    this.state = {
      username: "",
      errors: {}
    };
  }
  handleChange = e => {
    let errors = { ...this.state.errors };
    delete errors[e.target.name];
    this.setState({
      [e.target.name]: e.target.value,
      errors: errors
    });
  };
  handleSubmit = e => {
    e.preventDefault();

    //validation
    let errors = {};
    if (this.state.username === "") {
      errors.username = "Can't be empty!";
    } else if (this.state.username.length <= 5) {
      errors.username = "This field must be more then 5 symbols!";
    } 
    this.setState({ errors });
    const isValid = Object.keys(errors).length === 0;

    //submit
    if (isValid) {
      const { username } = this.state;
      e.target.reset();
      this.props.submit(username);
      this.setState({ username: "" });
    }
  };

  render() {
    const { username, errors } = this.state;

    return (
      <form
        onSubmit={this.handleSubmit}
        autoComplete="off"
        className="app__form"
      >
        <Input
          classes={classnames({ error: !!errors.username })}
          name={"username"}
          placeholder={"enter login"}
          type={"text"}
          action={this.handleChange}
          value={username}
        />
        <Button value={"join"} />
        <span className="app__form__error">{errors.username}</span>
      </form>
    );
  }
}
