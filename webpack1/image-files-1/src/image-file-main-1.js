import Heading from "./components/heading/heading.js";
import ImageFile1 from "./components/image-files/image-file-1.js";

const heading = new Heading();
heading.render("image file 1 page");

const imageFile1 = new ImageFile1();
imageFile1.render();

// import("HelloWorldApp/HelloWorldButton").then(HelloWorldButtonModule => {
//   const HelloWorldButton = HelloWorldButtonModule.default;
//   const helloWorldButton = new HelloWorldButton();
//     helloWorldButton.render();
// });