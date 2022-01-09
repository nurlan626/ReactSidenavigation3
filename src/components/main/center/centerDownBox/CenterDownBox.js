import React from 'react'
import styles from './CenterDownBox.module.scss'
import img01 from "./01.png"
import img02 from "./02.png"

const centerDownBox = () => {
    return (
        <div className={styles.container}>
            <div className={styles.leftBox}>
                <h3 className={styles.h3}>Production Details,</h3>
                <div><img src={img01} alt="wew" className={styles.leftBoxIMG} /></div>
            </div>
            <div className={styles.rightBox}>
                <div className={styles.rightBoxInner}>
                <img src={img02} alt="wew" className={styles.image} />
                <div>Total count</div>
                <div className={styles.rightBoxTitle} >Financial Statistics</div>
                <div className={styles.rightBoxText}>Ask a question of the support question, Mange request</div>


                </div>
              
                
            </div>
            
        </div>
    )
}

export default centerDownBox
