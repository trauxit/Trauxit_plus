import React from 'react'
import styles from '../../Styles/create.module.css'
import Form from 'react-bootstrap/Form';

const FirstCreate = () => {
    return (
        <>
            <h3 className={`${styles.tell__title}`}>Tell us what you need done</h3>
            <p className={`${styles.tell__para}`}>Create Job for our  Workers to apply and review bids - please take your time writing your job post for better results </p>
            <Form.Group controlId="exampleForm.ControlTextarea1" className={`${styles.textareaship} mb-3 mt-4`}>
                <Form.Control as="textarea" className='cont shipt' rows={9} placeholder='Write the title of your project... ' name="Pickupdescription"
                />
            </Form.Group>
        </>
    )
}

export default FirstCreate
