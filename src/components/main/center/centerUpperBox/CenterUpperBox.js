import React from 'react'
import styles from "./CenterUpperBox.module.scss"
import {MdOutlineCircleNotifications} from "react-icons/md"
import {FiSearch} from "react-icons/fi"
import logo from './01.png'



const CenterUpperBox = () => {
    return (
        <div className={styles.container}>
            <div>
                <div className={styles.inputBox}>
                     <FiSearch  className={styles.inputIcon} />
                     <input className={styles.input} placeholder="Search plant here" />
                </div>
               
            </div>
            <div  className={styles.icons}>
                <span><MdOutlineCircleNotifications className={styles.icon} /></span>
                <span><img src={logo} alt='wewe' className={styles.img}/></span>
            </div>
        </div>
    )
}

export default CenterUpperBox
