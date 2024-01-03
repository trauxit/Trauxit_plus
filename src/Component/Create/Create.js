import React, { useState } from 'react'
import Stepper from 'react-stepper-horizontal';
import Sidebar from '../../Layout/Sidebar'
import styles from '../../Styles/create.module.css'
import { Link } from 'react-router-dom'
import FirstCreate from './FirstCreate';
import SecondCreate from './SecondCreate';
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
            case 2: return;
            case 3: return;
            default: return null;
        }
    }
    return (
        <>
            <section className={`${styles.home}`}>
                <Sidebar active='create' />
                <div className={`${styles.homeContainer}`}>
                    <p className={`${styles.new__title}`}>Recent News: <span className={`${styles.new__para}`}> El Molla Inspects MIDOR Expansion Project. Sunday, 31st December 2023</span> </p>
                    {getSectionComponent()}
                    {activeStep !== steps.length + 1
                        && <Link className={styles.press__btn} onClick={() => setActiveStep(activeStep - 1)}>Press Enter</Link>
                    }
                    {activeStep !== steps.length - 1
                        && <Link className={styles.log__btn} onClick={() => setActiveStep(activeStep + 1)}>Next</Link>
                    }
                    {activeStep == steps.length - 1
                        && <Link className={styles.log__btn}>Submit</Link>
                    }
                    <div className={`${styles.footer}`}>
                        <Link className={`${styles.footer__link}`}>news & Updates</Link>
                        <Link className={`${styles.footer__link}`}>Terms and Conditions</Link>
                        <Link className={`${styles.footer__link}`}>Legal & Support</Link>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Create
