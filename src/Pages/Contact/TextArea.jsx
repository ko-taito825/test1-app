import React from "react";
import styles from "../../Styles/TextArea.module.css";
export default function TextArea({ form, setForm, errors }) {
  return (
    <div className={styles.textAreaRow}>
      <label htmlFor="form">本文</label>
      <textarea
        name="form"
        id="form"
        value={form}
        rows={5}
        className={styles.textArea}
        onChange={(e) => setForm(e.target.value)}
      />
      {errors.form && <p className={styles.errorMessage}>{errors.form}</p>}
    </div>
  );
}
