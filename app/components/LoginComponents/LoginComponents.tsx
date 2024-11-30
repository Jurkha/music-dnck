import Button from '../Button/Button';
import styles from './LoginComponents.module.scss'

const LoginComponents = () => {
    return (

        <div className={styles.container}>
            <span className={styles.email}>Email</span>
            <input type="text" className={styles.input} placeholder='Enter your E-mail' />
            <span className={styles.password}>Password</span>
            <input type="text" className={styles.input} placeholder='Enter Your Password'/>
            <Button />
        </div>
    )
}
export default LoginComponents;