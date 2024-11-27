import styles from './Button.module.scss'

type Props= {
    name:string,
}
const Button= (props:Props)=> {
    return(
            <button className={styles.button}>{props.name}</button>
    )
}

export default Button