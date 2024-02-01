import React from 'react'
import styles from '../../Styles/wallet.module.css'
import Sidebar from '../../Layout/Sidebar'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next';

const Confirm = () => {
    const { t, i18n } = useTranslation();

    return (
        <>
            <section className={`${styles.home}`}>
                <Sidebar active='wallet' />
                <div className={`${styles.homeContainer}`}>
                    <div className={`${styles.links}`}>
                        <Link to='' className={`${styles.back__link}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="19" height="17" viewBox="0 0 19 17" fill="none">
                                <path d="M18.7487 8.49969C18.7487 8.10187 18.5906 7.72034 18.3093 7.43903C18.028 7.15773 17.6465 6.99969 17.2487 6.99969H5.36868L9.30868 3.05969C9.57364 2.77534 9.71789 2.39925 9.71103 2.01065C9.70417 1.62205 9.54675 1.25128 9.27192 0.976449C8.9971 0.701623 8.62633 0.5442 8.23773 0.537343C7.84912 0.530487 7.47303 0.674733 7.18868 0.939693L0.68868 7.43969C0.407779 7.72094 0.25 8.10219 0.25 8.49969C0.25 8.89719 0.407779 9.27844 0.68868 9.55969L7.18868 16.0597C7.47303 16.3247 7.84912 16.4689 8.23773 16.462C8.62633 16.4552 8.9971 16.2978 9.27192 16.0229C9.54675 15.7481 9.70417 15.3773 9.71103 14.9887C9.71789 14.6001 9.57364 14.224 9.30868 13.9397L5.36868 9.99969H17.2487C17.6465 9.99969 18.028 9.84166 18.3093 9.56035C18.5906 9.27905 18.7487 8.89752 18.7487 8.49969Z" fill="#1C1A19" />
                            </svg>
                            {t("Back")}
                        </Link>
                    </div>
                    <div className={`${styles.confirm__body}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="156" height="156" viewBox="0 0 156 156" fill="none">
                            <path d="M78 9.75C96.101 9.75 113.461 16.9406 126.26 29.74C139.059 42.5393 146.25 59.899 146.25 78C146.25 96.101 139.059 113.461 126.26 126.26C113.461 139.059 96.101 146.25 78 146.25C59.899 146.25 42.5393 139.059 29.74 126.26C16.9406 113.461 9.75 96.101 9.75 78C9.75 59.899 16.9406 42.5393 29.74 29.74C42.5393 16.9406 59.899 9.75 78 9.75ZM69.498 91.4647L54.3368 76.2937C53.7932 75.7502 53.148 75.3191 52.4378 75.0249C51.7277 74.7308 50.9665 74.5794 50.1979 74.5794C49.4292 74.5794 48.6681 74.7308 47.9579 75.0249C47.2478 75.3191 46.6025 75.7502 46.059 76.2937C44.9613 77.3914 44.3446 78.8802 44.3446 80.4326C44.3446 81.985 44.9613 83.4738 46.059 84.5715L65.364 103.877C65.906 104.423 66.5508 104.856 67.2611 105.152C67.9715 105.448 68.7334 105.6 69.5029 105.6C70.2724 105.6 71.0343 105.448 71.7446 105.152C72.455 104.856 73.0998 104.423 73.6418 103.877L113.617 63.8918C114.168 63.3505 114.606 62.7055 114.906 61.9941C115.206 61.2826 115.363 60.5187 115.366 59.7465C115.37 58.9743 115.221 58.209 114.927 57.4948C114.633 56.7805 114.201 56.1315 113.655 55.5852C113.11 55.0388 112.461 54.6059 111.747 54.3114C111.033 54.0169 110.268 53.8666 109.496 53.8693C108.724 53.872 107.96 54.0276 107.248 54.327C106.536 54.6264 105.891 55.0639 105.349 55.614L69.498 91.4647Z" fill="#FF8201" />
                        </svg>
                        <h3 className={`${styles.cong__title}`}>{t("Congratulations!")}</h3>
                        <p className={`${styles.cong__para}`}>{t("Payment successful. Your invoice has been paid successfully using the selected payment method. Thank you for your payment.")}</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Confirm