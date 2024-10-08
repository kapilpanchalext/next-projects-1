import helloworld from './hello-world.html';
import styles from './app.module.scss';
import "./app.scss";
import HelloWorld from "./HelloWorld";

document.body.innerHTML = helloworld;
const h1Element = document.querySelector('h1');

if (h1Element) {
  h1Element.classList.add('heading');
}

document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM fully loaded and parsed'); // Log when DOM is ready
  HelloWorld(); // Call the HelloWorld function
});

const hello: string = "Hello, World Webpack2!";
console.log(hello);
