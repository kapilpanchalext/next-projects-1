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

    import('ImageCaptionApp/ImageCaption').then(ImageCaptionModule => {
      const ImageCaption = ImageCaptionModule.default;
      const imageCaption = new ImageCaption();
      imageCaption.render("ImageFile1 caption - Microfrontend App");
    });
  }
};

export default ImageFile1;