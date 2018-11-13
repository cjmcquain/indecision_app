console.log("App.js is running");

var app = {
  title: 'Indecision App',
  subtitle: 'Best app ever',
  options: ['Item one', 'Item two']
};
var template = (
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

var user = {
  name: 'Charles McQuain',
  age: 31,
  location: 'Los Angeles, CA'
};

function getLocation(location) {
  if (location) {
    return <p>Location: {location}</p>;
  }
}

var templateTwo = (
  <div>
    <h1>{user.name ? user.name : 'Anonymous'}</h1>
    {(user.age && user.age >= 18) && < p > Age: {user.age}</p>}
    {getLocation(user.location)}
  </div >
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);