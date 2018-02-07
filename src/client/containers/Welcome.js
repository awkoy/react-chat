import React, { Component } from 'react';
import {connect} from 'react-redux';
import Title from './../components/title';

class Welcome extends Component {
  render() {

    const {
      title
    } = this.props;

    return (
      <div>
        <Title val={title} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    title: state.message
  }
}

export default connect(mapStateToProps)(Welcome);
