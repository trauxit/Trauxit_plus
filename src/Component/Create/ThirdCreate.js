import React from 'react'
import styles from '../../Styles/create.module.css'
import Form from 'react-bootstrap/Form';

const ThirdCreate = () => {
    return (
        <>
            <h3 className={`${styles.tell__title}`}>Tell us what you need done</h3>
            <p className={`${styles.tell__para}`}>Create Job for our  Workers to apply and review bids - please take your time writing your job post for better results </p>
            <div className={`${styles.lift__para}`}>
                <p >Need ForkLift for Ras Gharib Concession </p>
                <hr />
            </div>
            <h3 className={`${styles.ti__title}`}>Project Description</h3>
            <p className={`${styles.need__para}`}>We are seeking a skilled and experienced Forklift Operator to join our team at the Ras Gharib concession. As a Forklift Operator, you will play a crucial role in ensuring the efficient and safe movement of materials and equipment within our operational facility. The ideal candidate should have a strong background in forklift operation, adhere to safety guidelines, and possess excellent attention to detail.</p>
            <h3 className={`${styles.ti__title}`}>What skills are required?</h3>
            <p className={`${styles.skills__para}`}>Enter up to 5 skills that best describe your project.</p>
            <div className='second__step mb-5'>
                <Form.Group controlId="exampleForm.ControlTextarea1" className={`${styles.textareaship} mb-3 mt-4`}>
                    <Form.Control as="textarea" className='cont shipt' rows={7} placeholder='Enter Skills here... ' name="Pickupdescription"
                    />
                </Form.Group>
            </div>
        </>
    )
}

export default ThirdCreate
