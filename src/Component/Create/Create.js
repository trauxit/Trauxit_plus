import React, { useState } from 'react'
import Stepper from 'react-stepper-horizontal';
import Sidebar from '../../Layout/Sidebar'
import styles from '../../Styles/create.module.css'
import { Link } from 'react-router-dom'
import FirstCreate from './FirstCreate';
import SecondCreate from './SecondCreate';
import ThirdCreate from './ThirdCreate';
import FourthCreate from './FourthCreate';
import Header from '../../Layout/Header';
import { useTranslation } from 'react-i18next';
const Create = () => {
    const steps = [
        { title: '' },
        { title: '' },
        { title: '' },
        { title: '' },
    ];
    const [activeStep, setActiveStep] = useState(0);
    function getSectionComponent() {
        switch (activeStep) {
            case 0: return <FirstCreate />;
            case 1: return <SecondCreate />;
            case 2: return <ThirdCreate />;
            case 3: return <FourthCreate />;
            default: return null;
        }
    }
    const { t, i18n } = useTranslation();
    return (
        <>
            <Header />
            <section className={`${styles.home}`}>
                <Sidebar active='create' />
                <div className={`${styles.homeContainer}`}>
                    <p className={`${styles.new__title}`}>{t("Recent News:")}  <span className={`${styles.new__para}`}> {t("El Molla Inspects MIDOR Expansion Project. Sunday, 31st December 2023")} </span> </p>
                    {getSectionComponent()}
                    <div className={`${styles.steps__btn}`}>
                        {activeStep !== steps.length + 1 && activeStep !== steps.length - 1
                            && <Link className={styles.press__btn} onClick={() => setActiveStep(activeStep - 1)}>{t("Press Enter")}</Link>
                        }
                        {activeStep !== steps.length - 1
                            && <Link className={styles.log__btn} onClick={() => setActiveStep(activeStep + 1)}>{t("Next")}</Link>
                        }
                        {activeStep == steps.length - 1
                            && <Link className={styles.create__submit}>{t("Yes, post my project")}</Link>
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default Create
