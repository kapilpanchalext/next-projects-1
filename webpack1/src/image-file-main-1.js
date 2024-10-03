import Heading from "./components/heading/heading.js";
import ImageFile1 from "./components/image-files/image-file-1.js";
import _ from "lodash";

const heading = new Heading();
heading.render(_.upperFirst("image file 1 page"));

const imageFile1 = new ImageFile1();
imageFile1.render();