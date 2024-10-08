import styles from "./page.module.scss";

export default function HelloWorldFramework() {
  console.log("HelloWorldFramework");
  return (
    <div className={styles.page}>
      <h1>Hello World Framework - 3</h1>
    </div>
  );
}
