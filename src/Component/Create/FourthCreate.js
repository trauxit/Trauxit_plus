import React, { useState } from 'react'
import styles from '../../Styles/create.module.css'
import { useTranslation } from 'react-i18next';
import Form from 'react-bootstrap/Form';

const FourthCreate = () => {
    const [active, setActive] = useState('hour')
    const { t, i18n } = useTranslation();

    return (
        <>

            <h3 className={`${styles.tell__title}`}>{t("How do you want to pay?")}</h3>
            <p className={`${styles.tell__para}`}>{t("Please choose how would you like to pay for your project...")}</p>
            <div className={`${styles.allpay}`}>
                <div className={`${active === 'hour' ? styles.activepay : styles.pay}`} onClick={() => setActive('hour')}>
                    <h3 className={`${styles.pay__title}`}>{t("Pay by the hour")}</h3>
                    <div className={`${styles.fixed}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="69" height="69" viewBox="0 0 69 69" fill="none" className={`${styles.ico}`}>
                            <g clip-path="url(#clip0_183_506)">
                                <path d="M34.4997 3.83333C28.4344 3.83333 22.5053 5.6319 17.4622 9.00159C12.4191 12.3713 8.48847 17.1608 6.16738 22.7644C3.8463 28.368 3.23899 34.534 4.42227 40.4828C5.60555 46.4315 8.52627 51.8958 12.8151 56.1846C17.1039 60.4734 22.5682 63.3941 28.5169 64.5774C34.4657 65.7607 40.6317 65.1534 46.2353 62.8323C51.8389 60.5112 56.6284 56.5806 59.9981 51.5375C63.3678 46.4944 65.1664 40.5653 65.1664 34.5C65.1664 26.3667 61.9354 18.5665 56.1843 12.8154C50.4332 7.06427 42.633 3.83333 34.4997 3.83333ZM34.4997 61.3333C29.1926 61.3333 24.0046 59.7596 19.5919 56.8111C15.1792 53.8626 11.7399 49.6718 9.70892 44.7687C7.67797 39.8655 7.14658 34.4702 8.18195 29.2651C9.21732 24.0599 11.7729 19.2787 15.5257 15.526C19.2784 11.7733 24.0596 9.21763 29.2648 8.18226C34.4699 7.14689 39.8652 7.67828 44.7684 9.70923C49.6715 11.7402 53.8623 15.1795 56.8108 19.5922C59.7593 24.0049 61.333 29.1929 61.333 34.5C61.333 41.6166 58.5059 48.4418 53.4737 53.474C48.4415 58.5062 41.6163 61.3333 34.4997 61.3333Z" className={`${styles.active__icon}`} />
                                <path d="M36.263 35.2667V20.6042C36.263 20.0958 36.0611 19.6083 35.7016 19.2489C35.3422 18.8894 34.8547 18.6875 34.3464 18.6875C33.838 18.6875 33.3505 18.8894 32.9911 19.2489C32.6316 19.6083 32.4297 20.0958 32.4297 20.6042V37.3175L43.738 44.9842C43.9463 45.1408 44.1844 45.2534 44.4377 45.3149C44.691 45.3764 44.9541 45.3857 45.2111 45.342C45.4681 45.2984 45.7134 45.2028 45.9322 45.061C46.151 44.9193 46.3385 44.7345 46.4834 44.5178C46.6283 44.3011 46.7275 44.0572 46.7748 43.8009C46.8222 43.5446 46.8168 43.2813 46.759 43.0271C46.7012 42.773 46.5921 42.5333 46.4385 42.3227C46.2849 42.1122 46.0899 41.9351 45.8655 41.8025L36.263 35.2667Z" className={`${styles.active__icon}`} />
                                <path d="M15.3333 34.385C15.3157 30.937 16.2343 27.5489 17.991 24.5819C19.7477 21.6149 22.2767 19.1802 25.3083 17.5375C28.3399 15.8948 31.7604 15.1057 35.2053 15.2542C38.6502 15.4027 41.9901 16.4833 44.8691 18.3808L46.4983 15.7742C43.7636 13.9829 40.6662 12.8194 37.4285 12.3675C34.1908 11.9155 30.8932 12.1862 27.7725 13.1602C24.6519 14.1342 21.7857 15.7872 19.3798 18.0006C16.9739 20.2139 15.0882 22.9326 13.8579 25.9614C12.6276 28.9902 12.0834 32.2538 12.2644 35.5179C12.4454 38.782 13.347 41.9655 14.9046 44.8397C16.4622 47.7139 18.6369 50.2075 21.2727 52.1413C23.9085 54.0751 26.9399 55.4012 30.1491 56.0242L30.6666 53.0917C26.3502 52.2106 22.4691 49.8696 19.6765 46.4625C16.8838 43.0554 15.35 38.7903 15.3333 34.385Z" className={`${styles.active__icon}`} />
                            </g>
                            <defs>
                                <clipPath id="clip0_183_506">
                                    <rect width="69" height="69" className={`${styles.active__icon}`} />
                                </clipPath>
                            </defs>
                        </svg>
                        <p className={`${styles.pay__para}`}>{t("Hire based on an hourly rate and pay for hours billed. Best for ongoing work.")}</p>
                    </div>
                </div>
                <div className={`${active === 'fixed' ? styles.activepay : styles.pay}`} onClick={() => setActive('fixed')}>
                    <h3 className={`${styles.pay__title}`}>{t("Pay fixed price")}</h3>
                    <div className={`${styles.fixed}`}>
                        <div className={`${styles.svg}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="47" height="59" viewBox="0 0 47 59" fill="none" className={`${styles.ico}`}>
                                <path d="M23.5 58.25C16.8396 56.5729 11.3407 52.7511 7.00325 46.7845C2.66584 40.8179 0.498085 34.1939 0.500001 26.9125V9.375L23.5 0.75L46.5 9.375V26.9125C46.5 34.1958 44.3323 40.8208 39.9968 46.7874C35.6613 52.754 30.1623 56.5748 23.5 58.25ZM23.5 52.2125C28.4833 50.6312 32.6042 47.4688 35.8625 42.725C39.1208 37.9813 40.75 32.7104 40.75 26.9125V13.3281L23.5 6.85938L6.25 13.3281V26.9125C6.25 32.7104 7.87917 37.9813 11.1375 42.725C14.3958 47.4688 18.5167 50.6312 23.5 52.2125Z" className={`${styles.active__icon}`} />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none" className={`${styles.svg__icon}`}>
                                <path d="M16.1173 2.36458C8.52298 2.36458 2.36523 8.52232 2.36523 16.1167C2.36523 23.711 8.52298 29.8687 16.1173 29.8687C23.7117 29.8687 29.8694 23.711 29.8694 16.1167C29.8694 8.52232 23.7117 2.36458 16.1173 2.36458ZM16.1173 27.5358C9.81223 27.5358 4.69818 22.4217 4.69818 16.1167C4.69818 9.81158 9.81223 4.69752 16.1173 4.69752C22.4224 4.69752 27.5365 9.81158 27.5365 16.1167C27.5365 22.4217 22.4224 27.5358 16.1173 27.5358ZM17.5815 15.4045L16.8019 15.2234V11.1008C17.9683 11.2605 18.6897 11.991 18.8125 12.8874C18.8278 13.0102 18.9322 13.0992 19.055 13.0992H20.4333C20.5775 13.0992 20.6911 12.9733 20.6788 12.8291C20.4916 10.9167 18.9168 9.68879 16.8141 9.47698V8.4732C16.8141 8.33814 16.7036 8.22763 16.5686 8.22763H15.706C15.5709 8.22763 15.4604 8.33814 15.4604 8.4732V9.48619C13.2871 9.698 11.5865 10.8982 11.5865 13.1391C11.5865 15.2142 13.1152 16.2149 14.7206 16.5986L15.4788 16.792V21.1724C14.122 20.9913 13.3608 20.2668 13.2042 19.2907C13.1858 19.174 13.0814 19.0881 12.9617 19.0881H11.5435C11.3992 19.0881 11.2857 19.2109 11.2979 19.3552C11.4361 21.0435 12.7161 22.5967 15.4481 22.7962V23.7601C15.4481 23.8952 15.5586 24.0057 15.6937 24.0057H16.5655C16.7006 24.0057 16.8111 23.8952 16.8111 23.757L16.8049 22.784C19.2085 22.5722 20.9275 21.286 20.9275 18.9776C20.9244 16.8472 19.5707 15.8956 17.5815 15.4045ZM15.4758 14.9072C15.3039 14.8581 15.1596 14.8121 15.0153 14.7537C13.9778 14.3792 13.4958 13.7745 13.4958 12.9948C13.4958 11.8805 14.34 11.2451 15.4758 11.1008V14.9072ZM16.8019 21.1816V17.0775C16.897 17.1051 16.983 17.1266 17.072 17.145C18.5239 17.587 19.012 18.201 19.012 19.1433C19.012 20.3436 18.1095 21.065 16.8019 21.1816Z" className={`${styles.active__icon}`} />
                            </svg>
                        </div>
                        <p className={`${styles.pay__para}`}>{t("Agree on a price and release payment when the job is done. Best for one-off tasks.")}</p>
                    </div>
                </div>
            </div>
            <h3 className={`${styles.ti__title}`}>{t("What is your estimated budget?")}</h3>
            <div className={`${styles.create__price}`}>

                <Form.Group controlId="exampleForm.ControlTextarea1" className={`${styles.usd} mb-3 mt-4`}>
                    <Form.Control placeholder={t("USD")} name="usd" type='text'
                        className={`${styles.usdico}`}
                    />

                </Form.Group>
                <Form.Group controlId="exampleForm.ControlTextarea1" className={`${styles.hour} mb-3 mt-4`}>
                    <Form.Control placeholder={t("Standard ($25-$100 USD Per Hour)")} name="hour" type='text'
                        className={`${styles.usdico}`}
                    />

                </Form.Group>
            </div>
            <div className='mb-4'>
                {

                    active === 'fixed' ?
                        <>
                            <h3 className={`${styles.ti__title}`}>{t("Minimum budget")}</h3>

                            <Form.Group controlId="exampleForm.ControlTextarea1" className={`${styles.hour} mb-3 mt-4`}>
                                <Form.Control placeholder={t("$10")} name="hour" type='text'
                                    className={`${styles.usdico}`}
                                />

                            </Form.Group>
                            <h3 className={`${styles.ti__title}`}>{t("Minimum budget")}</h3>

                            <Form.Group controlId="exampleForm.ControlTextarea1" className={`${styles.hour} mb-3 mt-4`}>
                                <Form.Control placeholder={t("$10")} name="hour" type='text'
                                    className={`${styles.usdico}`}
                                />

                            </Form.Group>
                        </>
                        :
                        ""

                }
            </div>

        </>
    )
}

export default FourthCreate
