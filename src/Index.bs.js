'use strict';

var React = require("react");
var ReactDom = require("react-dom");
var Styles$MyReasonReactApp = require("./Styles.bs.js");
var HelloWorld$MyReasonReactApp = require("./HelloWorld/HelloWorld.bs.js");

var style = document.createElement("style");

document.head.appendChild(style);

style.innerHTML = Styles$MyReasonReactApp.style;

function makeContainer(param) {
  var container = document.createElement("div");
  document.body.appendChild(container);
  return container;
}

ReactDom.render(React.createElement(HelloWorld$MyReasonReactApp.make, {}), makeContainer(undefined));

exports.style = style;
exports.makeContainer = makeContainer;
/* style Not a pure module */
