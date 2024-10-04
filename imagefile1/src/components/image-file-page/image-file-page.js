import Heading from "../heading/heading.js";
import ImageFile1 from "../image-files/image-file-1.js";

class ImageFilePage {
  render() {
    const heading = new Heading();
    heading.render("image file 1 page");

    const imageFile1 = new ImageFile1();
    imageFile1.render();
  }
}

export default ImageFilePage;