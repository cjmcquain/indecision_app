'use strict';

console.log("App.js is running");

/* const app = {
  title: 'Indecision App',
  subtitle: 'Best app ever',
  options: ['Item one', 'Item two']
};
const template = (
  <div>
    <h1>{app.title}</h1>
    {(app.subtitle) && <p>{app.subtitle}</p>}
    <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
    <ol>
      <li>Item one</li>
      <li>Item two</li>
    </ol>
  </div>
);
*/

var count = 0;
var addOne = function addOne() {
  console.log('addOne');
};
var templateTwo = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    'Count: ',
    count,
    ' '
  ),
  React.createElement(
    'button',
    { onClick: addOne },
    '+1'
  )
);

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
