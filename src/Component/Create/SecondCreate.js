import React, { useRef, useState } from 'react'
import styles from '../../Styles/create.module.css'
import Form from 'react-bootstrap/Form';
import img from '../../assets/images/fluent_attach-16-regular.svg'
const SecondCreate = () => {
    const [formData, setFormData] = useState({
        img: '',
    })
    const addFile = useRef(null)
    const addFileInput = useRef(null)
    const imageContentRef = useRef(null);
    const imageFirmRef = useRef(null);
    const [imageUrl, setImage] = useState(null)
    function handleLogo() {
        let inputFileEvent = document.querySelector(".input-file-js")
        inputFileEvent.click()
    }
    let previewUploadImage = (e) => {
        let file = e.target.files[0];
        if (!file) {
            return;
        }
        let preViewLink = URL.createObjectURL(file);
        setImage(preViewLink)
        setFormData(prevValue => {
            return {
                ...prevValue,
                'img': file
            }
        })

    }
    return (
        <>
            <h3 className={`${styles.tell__title}`}>Tell us what you need done</h3>
            <p className={`${styles.tell__para}`}>Create Job for our  Workers to apply and review bids - please take your time writing your job post for better results </p>
            <h3 className={`${styles.ti__title}`}>TiTLE</h3>
            <p className={`${styles.need__para}`}>Need ForkLift for Ras Gharib Concession </p>
            <h3 className={`${styles.ti__title}`}>Project Description</h3>
            <div className='second__step'>
                <Form.Group controlId="exampleForm.ControlTextarea1" className={`${styles.textareaship} mb-3 mt-4`}>
                    <Form.Control as="textarea" className='cont shipt' rows={8} placeholder='Describe your project here' name="Pickupdescription"
                    />
                    <Form.Text>10,000 characters left</Form.Text>
                </Form.Group>
            </div>
            <div className={`${styles.im}`}>
                {/* Image Input */}
                <input className={`${styles.fileImg}  input-file-js`} ref={(e) => {
                    addFileInput.current = e
                }} id="input-file" name="img" type="file" onChange={(e) => { previewUploadImage(e) }} />
                {/* Display Image */}

                <>
                    <div ref={addFile} onClick={() => { handleLogo() }}>
                        <Form.Group className={`${styles.imagecontact} imagecontact mb-3`} controlId="title" ref={imageFirmRef}>
                            <Form.Control placeholder="Drag & drop any images or documents that might be helpful in explaining your brief here (Max file size: 25 MB)." className='cont all p-3' name="email"
                            />
                            <p className={`${styles.upload__para}`}>Attach Files <img alt='' src={img} /></p>

                        </Form.Group>
                    </div>
                </>
                {imageUrl == null ?
                    ''
                    :
                    <div ref={addFile} onClick={() => { handleLogo() }}>
                        <img className={`${styles.img}`} ref={imageContentRef} src={imageUrl} alt="" />
                    </div>
                }
            </div>
        </>
    )
}

export default SecondCreate
