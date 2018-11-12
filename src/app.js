console.log("App.js is running");

var template = (
  <div>
    <h1>Indecision App</h1>
    <p>This is some info.</p>
    <ol>
      <li>Item one</li>
      <li>Item two</li>
    </ol>
  </div>
);

var templateTwo = (
  <div>
    <h1>Charles McQuain</h1>
    <p>Age: 31</p>
    <p>Location: Los Angeles</p>
  </div>
);

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);