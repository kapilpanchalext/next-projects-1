import HelloWorldButton from "./components/hello-world-button/hello-world-button.js";
import Heading from "./components/heading/heading.js";
import _ from "lodash";

// import addImage from "./add-image.js";

const heading = new Heading();
heading.render(_.upperFirst("hello world page"));

const button = new HelloWorldButton();
button.render();
// addImage();

if(process.env.NODE_ENV === 'production') {
  console.log('Production Mode');
} else if(process.env.NODE_ENV === 'development'){
  console.log('Development Mode');
}

button.methodThatDoesNotExist();