const url = window.location.pathname;

console.log(url);

if(url === '/hello-world-app') {
  console.log('INSIDE IF Hello World App');
  import ('HelloWorldApp/HelloWorldPage').then(HelloWorldPageModule => {
    const HelloWorldApp = HelloWorldPageModule.default;
    const helloWorldApp = new HelloWorldApp();
    helloWorldApp.render();
  });
} else if(url === '/image-file-app') {
  import ('ImageFileApp/ImageFilePage').then(ImageFilePageModule => {
    const ImageFileApp = ImageFilePageModule.default;
    const imageFileApp = new ImageFileApp();
    imageFileApp.render();
  });
}
