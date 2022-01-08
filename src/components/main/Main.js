import React from 'react'
import styles from './Main.module.scss'
import Center from "./center/Center.js"
import Aside from "./aside/Aside.js"

const Main = () => {
    return (
        <div className={styles.container}>
            {/* <div className={styles.center}>center</div>
            <div className={styles.aside}>aside</div>  */}
 
            <div className={styles.center} >
                 <Center />
            </div>
            <div  className={styles.aside} >
                   <Aside/>    
            </div> 

 
               
        </div>
    )
}

export default Main
