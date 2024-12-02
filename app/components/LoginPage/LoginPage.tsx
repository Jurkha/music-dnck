import Image from 'next/image';
import styles from './LoginPage.module.scss'
import LoginComponents from '../LoginComponents/LoginComponents';

const LoginPage = () => {
    return (
        <div className={styles.section}>
            <div className={styles.content}>
                <div className={styles.logo}>
                    <span>LOGO</span>
                </div>
                <div className={styles.main}>
                        <div className={styles.photo}>

                        </div>
                    <div className={styles.login}>
                        <span className={styles.page}>Log in <span className={styles.dnck}>DNCK.</span></span>
                        <LoginComponents/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginPage;
