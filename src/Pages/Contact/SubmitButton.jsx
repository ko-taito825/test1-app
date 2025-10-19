import React from "react";
import styles from "../../Styles/SubmitButton.module.css";
export default function SubmitButton() {
  return <input type="submit" value="送信" className={styles.Button} />;
}
