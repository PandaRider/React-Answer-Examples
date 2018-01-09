import React from 'react';

function SayHello(props) {
  // Return JSX that uses the firstName and lastName values from the props argument
  // to render "Hello {props.year}, from {props.firstName} {props.lastName}." in a div
  return <h1>Hello {props.year}, from {props.firstName} {props.lastName}.</h1>;
}
// export an example that specifies a year, a firstName and a lastName
// as props to the SayHello component
export const Example = () => <SayHello year={2018} firstName="Rick" lastName="Sanchez" />;

export default Example;

// ~~~~~ ignore the code below here ~~~~~

/*
eslint
react/prop-types: 0,
no-unused-vars: 0,
react/jsx-filename-extension:"off",
react/prefer-stateless-function: "off",
*/
