import styles from './LoginComponents.module.scss'

const LoginComponents = () => {
    return (

        <div className={styles.container}>
            <span>Email</span>
            <input type="text" className={styles.input} placeholder='Enter your E-mail' />
            <span>Pasword</span>
            <input type="text" className={styles.input} placeholder='Enter Your Password'/>
        </div>
    )
}
export default LoginComponents