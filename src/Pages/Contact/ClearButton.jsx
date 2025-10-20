import React from "react";
import styles from "../../Styles/ClearButton.module.css";
export default function ClearButton({ onClick, disabled }) {
  return (
    <div>
      <input
        type="button"
        value="クリア"
        onClick={onClick}
        className={styles.ClearButton}
        disabled={disabled}
      />
    </div>
  );
}
