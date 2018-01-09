import React from 'react';

// create a const myName with a string value
const myName = 'Rick Sanchez';

// replace "incomplete" with myName value using JSX braces
const myElement = (
  <div>
    <h1>Hello,</h1>
    <div>
      my name is {myName}
    </div>
  </div>
);

export default myElement;

// ~~~~~ ignore the code below here ~~~~~

/*
eslint
react/prop-types: 0,
no-unused-vars: 0,
react/jsx-filename-extension:"off",
react/prefer-stateless-function: "off",
*/
