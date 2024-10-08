declare module '*.html' {
  const content: string;
  export default content;
}

declare module '*.scss' {
  const content: { [className: string]: string };
  export default content;
}

// global.d.ts
declare module '*.module.scss' {
  const classes: { [key: string]: string };
  export default classes;
}