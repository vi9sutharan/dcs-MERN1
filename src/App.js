import React from "react";
import themeimg from './ai.webp';


function App() {
  const message = 'Hello JSX welcome to react';
  const pragraph = 'This is a pragraph JSX';
  const PI = 3.14159;
  const description = 'The value of PI approximately  $(PI)';
  const theme = <img src={themeimg} alt="theme for website" />
  const welcome =(props) => {
    return <div>{props.children}</div>;
  };

  const element = React.createElement(
    "button",
    {
      className:"btn",
      onClick: () => alert("clicked"),
    },
    "click Me"
  );
  return (
    <welcome>
    <div>
      <ul>
  <li><a href="default.asp">Home</a></li>
  <li><a href="news.asp">News</a></li>
  <li><a href="contact.asp">Contact</a></li>
  <li><a href="about.asp">About</a></li>
</ul>
    <div>
      {theme}
      <h1>{message}</h1>
      <p>{pragraph}</p>
      <div>
        <p>{description}</p>
      </div>
</div>
    </div>
    </welcome>

  );

}

export default App;
