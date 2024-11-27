import Image from 'next/image';
import styles from './LoginPage.module.scss'

const LoginPage = () => {
    return (
        <div className={styles.section}>
            <div className={styles.content}>
                <div className={styles.logo}>
                    <span>LOGO</span>
                </div>
                <div className={styles.main}>
                    <Image
                        src={'./Remove-bg 1.svg'}
                        width={644}
                        height={575}
                        alt='' />
                    <div className={styles.login}>
                        <span className={styles.page}>Log in <span className={styles.dnck}>DNCK.</span></span>
                        <span className={styles.email}>Email</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginPage;
