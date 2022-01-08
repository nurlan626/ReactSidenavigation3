import React from 'react'
import CenterUpperBox from './centerUpperBox/CenterUpperBox'
import CenterMiddleBox from './centerMiddleBox/CenterMiddleBox'
import CenterDownBox from './centerDownBox/CenterDownBox'
import styles from './Center.module.scss'


const Center = () => {
    return (
        <div  className={styles.container}> 
             <div className={styles.CenterUpperBox}><CenterUpperBox /></div>
             <div className={styles.CenterMiddleBox}><CenterMiddleBox /></div>
             <div className={styles.CenterDownBox}><CenterDownBox /></div>
        </div>
       
    )
}

export default Center
