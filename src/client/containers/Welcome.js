import React, { Component } from "react";
import { connect } from "react-redux";
import Title from "./../components/title";
import Form from "./../components/form";

import { loginUser } from './../api';

class Welcome extends Component {

  sendSubmitData = (data) => loginUser(data);

  render() {
    const { title } = this.props;

    return (
      <div className="app__container">
        <Title val={title} />
        <Form submit={this.sendSubmitData}/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    title: state.message
  };
};

export default connect(mapStateToProps)(Welcome);
