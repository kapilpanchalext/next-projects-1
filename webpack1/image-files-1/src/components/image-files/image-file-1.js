import ImageFile1JPG from "./image.jpg";
import "./image-file-1.scss";

class ImageFile1 {
  render () {
    const img = document.createElement('img');
    img.src = ImageFile1JPG;
    img.alt = 'ImageFile1';
    img.classList.add('image-file-1');
    const bodyDomElement = document.querySelector('body');
    bodyDomElement.appendChild(img);
  }
}

export default ImageFile1;