import React from "react";
import styles from "./Header.module.css";
export default function Header() {
  return (
    <header className={styles.header}>
      <ul className={styles.headerMenu}>
        <li>
          <a href="">Blog</a>
        </li>
        <li>
          <a href="">お問い合わせ</a>
        </li>
      </ul>
    </header>
  );
}
