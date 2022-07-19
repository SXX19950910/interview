import styles from './index.module.scss'
export default function SubTitle (props) {
    return (
        <div className={styles['sub-title']}>
            <div>{ props.title }</div>
        </div>
    )
}