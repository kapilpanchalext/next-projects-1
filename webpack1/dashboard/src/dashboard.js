const url = window.location.pathname;

if(url === '/hello-world-page') {
  import ('HelloWorldApp/HelloWorldPage').then(HelloWorldPageModule => {
    const HelloWorldPage = HelloWorldPageModule.default;
    const helloWorldPage = new HelloWorldPage();
    helloWorldPage.render();
  });
} else if(url === '/image-file-page') {
  import ('ImageFileApp/ImageFilePage').then(ImageFilePageModule => {
    const ImageFilePage = ImageFilePageModule.default;
    const imageFilePage = new ImageFilePage();
    imageFilePage.render();
  });
}
