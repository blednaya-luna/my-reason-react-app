let containerStyle = ReactDOMRe.Style.make(~marginBottom="8px", ());
let marginRight = ReactDOMRe.Style.make(~marginRight="8px", ());

[@react.component]
let make = () => {
  let (count, setCount) = React.useState(() => 0);

  let (timer, setTimer) = React.useState(() => 0);
  React.useEffect0(() => {
    let id =
      Js.Global.setInterval(() => setTimer(prevTimer => prevTimer + 1), 100);

    Some(() => Js.Global.clearInterval(id));
  });

  <div>
    <div style=containerStyle> {React.string("Hello world!")} </div>
    <div style=containerStyle>
      <p> {React.string("count: " ++ Belt.Int.toString(count))} </p>
      <button style=marginRight onClick={_ => setCount(_ => count + 1)}>
        {React.string("Click me!")}
      </button>
      <button onClick={_ => setCount(_ => 0)}>
        {React.string("Reset counter")}
      </button>
    </div>
    <div style=containerStyle>
      <p> {React.string("Some timer: " ++ Belt.Int.toString(timer))} </p>
      <button onClick={_ => setTimer(_ => 0)}>
        {React.string("Reset timer")}
      </button>
    </div>
  </div>;
};
