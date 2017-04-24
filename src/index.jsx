import React from "react";
import ReactDOM from "react-dom";

import {store} from "./js/store.js";
import Component1 from "./js/component1.jsx"

const render = function render() {
  ReactDOM.render( <Component1 /> ,
    document.getElementById('root')
  );
};

const changer = function changer() {
  // load json then inject
  store.state = "changed from outside";

  // force
  render();
};

render();

(function () {
  let documentReady = function documentReady() {
    document.getElementById("test").onclick = changer;
  };
  if (document.readyState !== "loading") documentReady();
  else if (document.addEventListener) document.addEventListener("DOMContentLoaded", documentReady);
  else document.attachEvent("onreadystatechange", function () {
    if (document.readyState === "complete") documentReady();
  });
})();