'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");

var containerStyle = {
  marginBottom: "8px"
};

var marginRight = {
  marginRight: "8px"
};

function HelloWorld(Props) {
  var match = React.useState(function () {
        return 0;
      });
  var setCount = match[1];
  var count = match[0];
  React.useEffect((function () {
          console.log("Hellow world!");
          
        }), []);
  var match$1 = React.useState(function () {
        return 0;
      });
  var setTimer = match$1[1];
  React.useEffect((function () {
          var id = setInterval((function (param) {
                  return Curry._1(setTimer, (function (prevTimer) {
                                return prevTimer + 1 | 0;
                              }));
                }), 100);
          return (function (param) {
                    clearInterval(id);
                    
                  });
        }), []);
  return React.createElement("div", undefined, React.createElement("div", {
                  style: containerStyle
                }, "Hello world!"), React.createElement("div", {
                  style: containerStyle
                }, React.createElement("p", undefined, "count: " + String(count)), React.createElement("button", {
                      style: marginRight,
                      onClick: (function (param) {
                          return Curry._1(setCount, (function (param) {
                                        return count + 1 | 0;
                                      }));
                        })
                    }, "Click me!"), React.createElement("button", {
                      onClick: (function (param) {
                          return Curry._1(setCount, (function (param) {
                                        return 0;
                                      }));
                        })
                    }, "Reset counter")), React.createElement("div", {
                  style: containerStyle
                }, React.createElement("p", undefined, "Some timer: " + String(match$1[0])), React.createElement("button", {
                      onClick: (function (param) {
                          return Curry._1(setTimer, (function (param) {
                                        return 0;
                                      }));
                        })
                    }, "Reset timer")));
}

var make = HelloWorld;

exports.containerStyle = containerStyle;
exports.marginRight = marginRight;
exports.make = make;
/* react Not a pure module */
