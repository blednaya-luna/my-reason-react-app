'use strict';

var React = require("react");
var ReactDom = require("react-dom");
var HelloWorld$MyReasonReactApp = require("./HelloWorld/HelloWorld.bs.js");
var ExampleStyles$MyReasonReactApp = require("./ExampleStyles.bs.js");

var style = document.createElement("style");

document.head.appendChild(style);

style.innerHTML = ExampleStyles$MyReasonReactApp.style;

function makeContainer(text) {
  var container = document.createElement("div");
  container.className = "container";
  var title = document.createElement("div");
  title.className = "containerTitle";
  title.innerText = text;
  var content = document.createElement("div");
  content.className = "containerContent";
  container.appendChild(title);
  container.appendChild(content);
  document.body.appendChild(container);
  return content;
}

ReactDom.render(React.createElement(HelloWorld$MyReasonReactApp.make, {}), makeContainer("My first reason-react component, lol"));

exports.style = style;
exports.makeContainer = makeContainer;
/* style Not a pure module */
