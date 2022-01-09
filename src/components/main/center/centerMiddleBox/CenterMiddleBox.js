import React from 'react';
import styles from "./CenterMiddleBox.module.scss";
import img01 from "./01.png";
import img02 from "./02.png";
import img03 from "./03.png";
import img04 from "./04.png";
import img05 from "./05.png";

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
                    <div className={styles.blockRightBox}>
                      <img src={img03} alt="wew" className={styles.blockRightImg}/>
                      <div className={styles.middleBox}>
                          <div className={styles.title}>Height piants</div>
                          <div className={styles.text}>4.3 sm</div>
                        </div>
                        <div>...</div>
                    </div>
                    <div className={styles.blockRightBox}>
                      <img src={img03} alt="wew" className={styles.blockRightImg}/>
                      <div className={styles.middleBox}>
                          <div className={styles.title}>Height piants</div>
                          <div className={styles.text}>4.3 sm</div>
                        </div>
                        <div>...</div>
                    </div>
                    <div className={styles.blockRightBox}>
                      <img src={img03} alt="wew" className={styles.blockRightImg}/>
                      <div className={styles.middleBox}>
                          <div className={styles.title}>Height piants</div>
                          <div className={styles.text}>4.3 sm</div>
                        </div>
                        <div>...</div>
                    </div>
                  

                </div>
            </div>
        </div>
    )
}

export default CenterMiddleBox
