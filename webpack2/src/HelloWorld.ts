import styles from './app.module.scss';
import "./app.scss";

const HelloWorld = () => {
  const h1 = document.createElement('h1');
  const body = document.querySelector('body'); // Select the body element

  // Check if the body is null before proceeding
  if (body) {
    h1.innerHTML = 'Webpack Hello World. This is a page. 1'; // Set the h1 content
    h1.classList.add("heading");
    body.appendChild(h1); // Append the h1 to the body
  } else {
    console.error('Error: <body> element not found.');
  }
};

export default HelloWorld;