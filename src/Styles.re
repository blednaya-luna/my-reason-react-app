// The {j|...|j} feature is just string interpolation, from
// bucklescript.github.io/docs/en/interop-cheatsheet#string-unicode-interpolation
// This allows us to conveniently write CSS, together with variables, by
// constructing a string
let style = {j|
  html {
    height: 100%;
  }
  body {
    margin: 0;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
|j};
