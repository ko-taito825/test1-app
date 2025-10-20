import { getSpaceUntilMaxLength } from "@testing-library/user-event/dist/utils";
import styles from "../../Styles/inputField.module.css";
export default function InputField({
  name,
  email,
  setName,
  setEmail,
  errors,
  disabled,
}) {
  return (
    <>
      <div className={styles.inputRow}>
        <label htmlFor="name">名前</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          disabled={disabled}
        />
        {errors.name && <p className={styles.errorMessage}>{errors.name}</p>}
      </div>

      <div className={styles.inputRow}>
        <label htmlFor="email">メールアドレス </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={disabled}
        />
        {errors.email && <p className={styles.errorMessage}>{errors.email}</p>}
      </div>
    </>
  );
}
