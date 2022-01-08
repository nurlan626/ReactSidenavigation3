import React from 'react';
import styles from "./CenterMiddleBox.module.scss";
import img01 from "./01.png";
import img02 from "./02.png";

const CenterMiddleBox = () => {
    return (
        <div>
            <h3 className={styles.h3}>Hello,</h3>
            <h2 className={styles.h2}>Ahonk Greelish</h2>

            <div className={styles.blocks}>
                <div  className={styles.blockLeft} >
                      <img src={img01} alt="wew" />
                </div>
                <div className={styles.blockRight}>
                    <img src={img02} alt="wew" />
                    <img src={img02} alt="wew" />
                    <img src={img02} alt="wew" />
                </div>
            </div>
        </div>
    )
}

export default CenterMiddleBox
