import HelloWorldButton from "../hello-world-button/hello-world-button.js";
import Heading from "../heading/heading.js";
// import _ from "lodash";
// import addImage from "./add-image.js";

class HelloWorldPage {
  render() {
    const h1 = document.createElement('h1');
    const body = document.querySelector('body');
    h1.innerHTML = 'Webpack Hello World. This is a page.';
    body.appendChild(h1);
  }
}

export default HelloWorldPage;