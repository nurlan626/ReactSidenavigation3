import React from 'react'
import styles from "./CenterUpperBox.module.scss"
import {IoIosNotificationsOutline} from "react-icons/io"

const CenterUpperBox = () => {
    return (
        <div className={styles.container}>
            <div>
                <input className={styles.input} />
            </div>
            <div  className={styles.icons}>
                <span><IoIosNotificationsOutline className={styles.icon} /></span>
                <span><img src='https://pngset.com/images/default-profile-picture-circle-symbol-logo-trademark-number-transparent-png-890174.png' alt='wewe' className={styles.img}/></span>
            </div>
        </div>
    )
}

export default CenterUpperBox
