import React, { Component } from "react";
import { connect } from "react-redux";
import { Button } from "semantic-ui-react";
import { incrementCounter, decrementCounter } from "./testActions";
const mapStatetoProps = (state) => ({
  data: state.test.data ,
});

const actions = {
  incrementCounter,
  decrementCounter,
};

class testcomponent extends Component {
  render() {
    const { data, incrementCounter, decrementCounter } = this.props;
    return (
      <div>
        <h1>Test Component</h1>
        <h3>This answer is : {data} </h3>
        <Button
          onClick={incrementCounter}
          positive
          content="Increment"
        ></Button>
        <Button
          onClick={decrementCounter}
          negative
          content="Decrement"
        ></Button>
      </div>
    );
  }
}

export default connect(mapStatetoProps, actions)(testcomponent);
