import React from "react";
import ReactDOM from "react-dom";

import {store} from "./store.js";

class Component1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: store.state
    };

    // binders
    this.changeMsg = this.changeMsg.bind(this);
    this.changeStore = this.changeStore.bind(this);
  }

  // lifecycle hooks
  componentWillReceiveProps() {
    // toggled from external
    console.log("componentWillReceiveProps");
    this.changeMsg();
  }

  changeStore() {
    // load json then inject
    store.state = "changed from inside";
    this.changeMsg();
  }

  changeMsg() {
    this.setState(prevState => ({
      msg: store.state
    }));
  }

  render() {
    return (
      <div>
        <button onClick={this.changeStore}>
          internal
        </button>

        <p>{this.state.msg}</p>
      </div>
    );
  }
};

export default Component1;