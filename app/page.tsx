'use client'
import Image from "next/image";
import styles from "./page.module.css";
import LoginPage from "./components/LoginPage/LoginPage";

export default function Home() {
  return (
    <div className={styles.page}>
      <LoginPage />
    </div>
  );
}
