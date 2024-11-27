import Image from "next/image";
import styles from "./page.module.css";
import Button from "./components/Button/Button";
import LoginComponents from "./components/LoginComponents/LoginComponents";


export default function Home() {
  return (
    <>
    <div className={styles.input}>
      <LoginComponents/>
    </div>
    <div className={styles.page}>
      <Button name={"Login in"} />
    </div>
    </>
  
  );
}
