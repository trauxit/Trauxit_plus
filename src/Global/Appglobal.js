import React from 'react'
import styles from '../Styles/global.module.css'
import vector from '../assets/images/Vector (1).png'
import elli1 from '../assets/images/Ellipse 1095.svg'
import up from '../assets/images/mdi_uploads.svg'
import price from '../assets/images/healthicons_money-bag.svg'
import bag from '../assets/images/fluent-mdl2_add-work.svg'
const Appglobal = () => {
    return (
        <>
            <div className={`${styles.booked}`}>
                <div className={`${styles.loads}`}>
                    <div>
                        <h4 className={`${styles.book__title}`}>Booked Loads</h4>
                        <p className={`${styles.book__para}`}>+59</p>
                        <img alt='' src={vector} /><span className={`${styles.book__num}`}> 55.3%</span>
                    </div>
                    <div className={`${styles.business__img}`}>
                        <img alt='' src={elli1} className={`${styles.elli1}`} />
                        <img alt='' src={up} className={`${styles.book__img}`} />
                    </div>
                </div>
                <div className={`${styles.loads}`}>
                    <div>
                        <h4 className={`${styles.book__title}`}>Total Paid</h4>
                        <p className={`${styles.book__para}`}>E£ 23,000</p>
                        <img alt='' src={vector} /><span className={`${styles.book__num}`}> 55.3%</span>
                    </div>
                    <div className={`${styles.business__img}`}>
                        <img alt='' src={elli1} className={`${styles.elli1}`} />
                        <img alt='' src={price} className={`${styles.book__img}`} />
                    </div>
                </div>
                <div className={`${styles.loads}`}>
                    <div>
                        <h4 className={`${styles.book__title}`}>Posted jops</h4>
                        <p className={`${styles.book__para}`}>+7</p>
                        <img alt='' src={vector} /><span className={`${styles.book__num}`}> 55.3%</span>
                    </div>
                    <div className={`${styles.business__img}`}>
                        <img alt='' src={elli1} className={`${styles.elli1}`} />
                        <img alt='' src={bag} className={`${styles.book__img}`} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Appglobal
