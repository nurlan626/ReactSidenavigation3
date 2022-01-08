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
              
                 <img src={img02} alt="wew" className={styles.image} />
                
            </div>
            
        </div>
    )
}

export default centerDownBox
