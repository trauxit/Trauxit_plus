import React, { useState } from 'react'
import styles from '../../Styles/create.module.css'
import Form from 'react-bootstrap/Form';
import { useTranslation } from 'react-i18next';

const ThirdCreate = () => {
    const { t, i18n } = useTranslation();
    const [skills, setSkills] = useState([]);
    const handleInputChange = (event) => {
        if (event.key !== 'Enter') return
        const value = event.target.value
        if (!value.trim()) return
        setSkills([...skills, value])
        event.target.value = ''
    };
    function removetag(index) {
        setSkills(skills.filter((el, i) => i !== index))
    }

    return (
        <>
            <h3 className={`${styles.tell__title}`}>{t("Tell us what you need done")}</h3>
            <p className={`${styles.tell__para}`}>{t("Create Job for our Workers to apply and review bids - please take your time writing your job post for better results")}</p>
            <div className={`${styles.lift__para}`}>
                <Form.Group controlId="need" className={` mb-3 mt-4`}>
                    <Form.Control className={`${styles.need__input}`} placeholder={t("Need ForkLift for Ras Gharib Concession")} name="need"
                    />
                </Form.Group>
            </div>
            <h3 className={`${styles.ti__title}`}>{t("Project Description")}</h3>
            <Form.Group controlId="need" className={`${styles.need__para} mb-3 mt-4`}>
                <Form.Control as="textarea" rows={3} className={`${styles.need__input}`} placeholder={t("We are seeking a skilled and experienced Forklift Operator to join our team at the Ras Gharib concession. As a Forklift Operator, you will play a crucial role in ensuring the efficient and safe movement of materials and equipment within our operational facility. The ideal candidate should have a strong background in forklift operation, adhere to safety guidelines, and possess excellent attention to detail.")} name="need"
                />
            </Form.Group>
            {/*             <p className={`${styles.need__para}`}>We are seeking a skilled and experienced Forklift Operator to join our team at the Ras Gharib concession. As a Forklift Operator, you will play a crucial role in ensuring the efficient and safe movement of materials and equipment within our operational facility. The ideal candidate should have a strong background in forklift operation, adhere to safety guidelines, and possess excellent attention to detail.</p>
 */}
            <h3 className={`${styles.ti__title}`}>{t("What skills are required?")}</h3>
            <div className={`${styles.dir}`}>
                <p className={`${styles.skills__para}`}>{t("Enter up to 5 skills that best describe your project.")}</p>
            </div>

            <div className={`${styles.boxskill} mb-5`}>
                {
                    skills.map((tag, index) => (
                        <span className={`${styles.tag}`} key={index}>{tag} <span onClick={() => removetag(index)}>&times;</span></span>

                    ))
                }
                <Form.Group controlId="exampleForm.ControlTextarea1" className={``}>

                    <Form.Control placeholder={t('Enter Skills here...')} className={`${styles.skillinput}`} onKeyDown={handleInputChange}
                    />
                </Form.Group>
            </div>

        </>
    )
}

export default ThirdCreate
