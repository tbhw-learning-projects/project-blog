import styles from "./not-found.module.css";

export default function FourOhFour() {

  return (
    <>
      <h1 className={styles["error-name"]}>404 Not Found</h1>

      <p className={styles["error-message"]}>
        This page does not exist. Please check the URL and try again.
      </p>
    </>
  );
}
