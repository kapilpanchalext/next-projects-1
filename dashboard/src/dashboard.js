import NavigationBar from './components/navigation-bar/navigation-bar.js';

const navigationItems = [
  {
    title: 'Hello World Page',
    url: "/hello-world-page"
  },
  {
    title: 'Image File Page',
    url: "/image-file-page"
  }
];

const navigationBar = new NavigationBar();
navigationBar.render(navigationItems);

const url = window.location.pathname;

if (url === '/hello-world-page') {
  import('HelloWorldApp/HelloWorldPage').then(HelloWorldPageModule => {
    const HelloWorldPage = HelloWorldPageModule.default;
    const helloWorldPage = new HelloWorldPage();
    helloWorldPage.render();
  });
} else if (url === '/image-file-page') {
  import('ImageFileApp/ImageFilePage').then(ImageFilePageModule => {
    const ImageFilePage = ImageFilePageModule.default;
    const imageFilePage = new ImageFilePage();
    imageFilePage.render();
  });
}

console.log('dashboard');