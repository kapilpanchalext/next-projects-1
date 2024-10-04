class HelloWorldPage {
  render() {
    const h1 = document.createElement('h1');
    const body = document.querySelector('body');
    h1.innerHTML = 'Webpack Hello World - MicroFrontend. This is a page.';
    body.appendChild(h1);
  }
}

export default HelloWorldPage;