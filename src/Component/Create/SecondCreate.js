import React, { useRef, useState } from 'react'
import styles from '../../Styles/create.module.css'
import Form from 'react-bootstrap/Form';
import img from '../../assets/images/fluent_attach-16-regular.svg'
import { useTranslation } from 'react-i18next';

const SecondCreate = () => {
    const { t, i18n } = useTranslation();

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
            <h3 className={`${styles.tell__title}`}>{t("Tell us what you need done")}</h3>
            <p className={`${styles.tell__para}`}>{t("Create Job for our Workers to apply and review bids - please take your time writing your job post for better results")}</p>
            <h3 className={`${styles.ti__title}`}>{t("TiTLE")}</h3>
            <Form.Group controlId="need" className={`${styles.need__para} mb-3 mt-4`}>
                <Form.Control className={`${styles.need__input}`} placeholder={t("Need ForkLift for Ras Gharib Concession")} name="need"
                />
            </Form.Group>
            <h3 className={`${styles.ti__title}`}>{t("Project Description")}</h3>
            <div className='second__step'>
                <Form.Group controlId="exampleForm.ControlTextarea1" className={`${styles.textareaship} mb-3 mt-4`}>
                    <Form.Control as="textarea" className='cont shipt' rows={8} placeholder={t("Describe your project here")} name="Pickupdescription"
                    />
                    <Form.Text>{t("10,000 characters left")}</Form.Text>
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
                            <Form.Control placeholder={t("Drag & drop any images or documents that might be helpful in explaining your brief here (Max file size: 25 MB).")} className='cont all p-3' name="email"
                            />
                            <p className={`${styles.upload__para}`}>{t("Attach Files")} <img alt='' src={img} /></p>

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
