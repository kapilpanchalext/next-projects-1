import HelloWorldButton from "./components/hello-world-button/hello-world-button.js";
import Heading from "./components/heading/heading.js";

const heading = new Heading();
heading.render("hello world page");

const button = new HelloWorldButton();
button.render();