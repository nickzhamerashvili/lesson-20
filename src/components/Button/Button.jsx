import Paragraph from "../paragraph/Paragraph.jsx"
import styles from "./button.module.css"

function Button({children}) {

    return (

        <button className={styles.button}>
            <Paragraph>{children}</Paragraph>
        </button>
        
    )

}

export default Button;