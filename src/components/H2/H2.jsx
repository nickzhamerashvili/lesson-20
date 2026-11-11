import styles from "./h2.module.css"

function H2({title}) {
    
    return (
        <h2 className={styles.h2}>
            {title}
        </h2>
    )

}

export default H2
