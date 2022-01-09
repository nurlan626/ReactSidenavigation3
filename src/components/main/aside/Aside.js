import React from 'react'
import img1 from "./01.png"
import img2 from "./02.png"
import styles from "./Aside.module.scss"
import {AiOutlineVideoCamera} from "react-icons/ai"
import {BiTime} from "react-icons/bi"


const Card = () =>{
    return (
        <div className={styles.card2}>
            <div>
                <img src={img2} alt="img" className={styles.img2}/>
            </div>
            <div  className={styles.card2TextBox}>
                <h3 className={styles.card2TextTitle}>Gandum Harvest</h3>
                <div className={styles.card2Text}>
                    <div><AiOutlineVideoCamera />  jan 10, 2022 </div>
                    <div><BiTime />  09 am</div>
                </div>
            </div>

        </div>
    )
}

const Aside = () => {
    return (
        <div className={styles.container}>
            
            <div>
                <img src={img1} alt="img" className={styles.cardImg} />
            </div>

            <div className={styles.card}>
                <div className={styles.title}>Harvest schedule</div>
                <div className={styles.text}>Ask a qustion of the support question, Manage request, report an issues.                
                </div>
           
            
                <Card />
                <hr className={styles.hr}/>
                <Card />
            </div>

        </div>
    )
}

export default Aside
