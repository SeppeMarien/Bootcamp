import React from 'react';
import './App.css';
import RenderDraggable from './components/MouseCat.js/RenderDraggable';
import Cat from './components/MouseCat.js/Cat';
import Mouse from './components/MouseCat.js/Mouse';
import withLauncher from './components/PaypalLauncher/WithLauncher';
// import withSize from './components/BoxColorAndSizing/WithSize';
// import WithColor from './components/BoxColorAndSizing/WithColor';
// import ButtonBox from './components/BoxColorAndSizing/ButtonBox';
// import withColor from './components/BoxColorAndSizing/WithColor';

// import withDraggable from './components/WithDraggable';
// import Hello from './components/Hello';
// import WithName from './components/WithName';

// const HelloReact = WithName(Hello);

// const DraggableMouse = withDraggable(Mouse);
// const DraggableCat = withDraggable(Cat);

// const redBox = WithColor(ButtonBox, 'red');
// const blueBox = WithColor(ButtonBox, 'blue');

// const diffSize = [
//   {
//   size: 50,
//   color: 'red'
//   },
//   {
//     size: 100,
//     color: 'red',
//   },
//   {
//     size: 200,
//     color: 'red'
//   },
//   {
//     size: 200,
//     color: 'blue'
//   },
//   {
//     size: 100,
//     color: "blue"
//   },
//   {
//     size: 50,
//     color: 'blue'
//   }
// ]


// const ButtonRedFifty = withSize(redBox, 50);
// const ButtonRedHundred = withSize(redBox, 100);
// const ButtonRedTwoHundred = withSize(redBox, 200);
// const ButtonBlueTwoHundred = withSize(blueBox, 200);
// const ButtonBlueHundred = withSize(blueBox, 100);
// const ButtonBlueFifty = withSize(blueBox, 50);

// {diffSize.map((diff) => {
//   const A = withSize(withColor(ButtonBox, diff.color), diff.size);
//   return (<A/>);
// })}

// const buttonText = 'Pay with Paypal!!';
// <PayPalLauncher render={(launchPayPal) => <PayPalButton onClick={launchPayPal} text={buttonText} />} />
// <PayPalLauncher render={(launchPayPal) => <PayPalLink onClick={launchPayPal} text={buttonText} />} />

/* <RenderDraggable render={(x, y) => <Cat x={x} y={y} />}/>
<RenderDraggable render={(x, y) => <Mouse x={x} y={y} />}/> */

import PayPalLauncher from './components/PaypalLauncher/PaypalLauncher';
import PayPalButton from './components/PaypalLauncher/PaypalButton';
import PayPalLink from './components/PaypalLauncher/PaypalLink';

const PaypalButtonWithLauncer = withLauncher(PayPalButton, "heeeey");

function App() {
  return (
    <div className="App">
      <PaypalButtonWithLauncer/>
    </div>
  );
}

export default App;
