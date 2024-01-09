import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import user from '../../assets/images/user.png'
import styles from '../../Styles/user.module.css'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import ReactPlayer from 'react-player'
import photo from '../../assets/images/pajamas_media.svg'
import play from '../../assets/images/youtube-removebg-preview.png'
import emo from '../../assets/images/mdi_emoji-outline.svg'
import vector from '../../assets/images/Vector (1).svg'
import cars from '../../assets/images/1688577297479 1.png'
import { useTranslation } from 'react-i18next';

const User = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [textarea, setTextArea] = useState('')
    const [imgupload, setImg] = useState('')
    const [videoplay, setVideo] = useState('')
    const [area, setArea] = useState('')
    const handleImg = (e) => {

        const image = e.target.files[0];
        if (image === "" || image === undefined) {
            alert(`not an image , the file is a ${typeof image}`);
            return;
        }
        setImg(image)
    }
    const switchArea = (area) => {
        setImg('')
        setVideo('')
        setArea(area)
    }
    const { t, i18n } = useTranslation();

    return (
        <>

            <section>
                <Row className={`${styles.row}`}>
                    <Col xxl='3' className={`${styles.col}`}>
                        <div className={`${styles.user}`}>
                            <div className={`${styles.user__img}`}>
                            </div>
                            <img alt='' src={user} className={`${styles.img}`} />
                            <div className={`${styles.user__body}`}>
                                <h3> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path d="M7.16537 18.75L5.58203 16.0833L2.58203 15.4167L2.8737 12.3333L0.832031 10L2.8737 7.66667L2.58203 4.58333L5.58203 3.91667L7.16537 1.25L9.9987 2.45833L12.832 1.25L14.4154 3.91667L17.4154 4.58333L17.1237 7.66667L19.1654 10L17.1237 12.3333L17.4154 15.4167L14.4154 16.0833L12.832 18.75L9.9987 17.5417L7.16537 18.75ZM9.1237 12.9583L13.832 8.25L12.6654 7.04167L9.1237 10.5833L7.33203 8.83333L6.16536 10L9.1237 12.9583Z" fill="#FF8201" />
                                </svg> Jon Stevens</h3>
                                <p>Chief Executive Offier</p>
                                <p>TRAUXIT LLC</p>
                            </div>
                            <div className={`${styles.switch}`}>
                                <Link className={`${styles.switch__link}`} to='/'>{t("Switch to Dashboard")}</Link>
                                <svg xmlns="http://www.w3.org/2000/svg" width="53" height="53" viewBox="0 0 53 53" fill="none">
                                    <path d="M6.625 37.5413H11.9184C13.6937 37.5412 15.4428 37.113 17.0174 36.293C18.5921 35.473 19.9457 34.2854 20.9637 32.831L21.3546 32.2723M29.4371 20.7293L29.828 20.1684C30.8459 18.7139 32.1996 17.5263 33.7742 16.7063C35.3488 15.8864 37.098 15.4581 38.8733 15.458H46.375" stroke="#FF8201" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M39.75 8.83301L46.375 15.458L39.75 22.083M6.625 15.458H11.9184C13.6937 15.4581 15.4428 15.8864 17.0174 16.7063C18.5921 17.5263 19.9457 18.7139 20.9637 20.1684L29.828 32.831C30.8459 34.2855 32.1996 35.473 33.7742 36.293C35.3488 37.113 37.098 37.5412 38.8733 37.5413H46.375" stroke="#FF8201" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M39.75 44.166L46.375 37.541L39.75 30.916" stroke="#FF8201" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>
                            <div className={`${styles.numbers}`}>
                                <div>
                                    <h3>{t("Profile viewers")}</h3>
                                    <p>302</p>
                                </div>
                                <div>
                                    <h3>{t("Post impressions")}</h3>
                                    <p>2304</p>
                                </div>
                            </div>
                            <div className={`${styles.followers}`}>
                                <div className={`${styles.follow}`}>
                                    <h3>{t("My followers")}</h3>
                                    <p>302</p>
                                </div>
                                <div className={`${styles.see}`}>
                                    <Link className={`${styles.see__link}`} >{t("see all")}</Link>
                                </div>
                                <div className={`${styles.images}`}>
                                    <img alt='' src={user} className={`${styles.follower}`} />
                                    <img alt='' src={user} className={`${styles.follower}`} />
                                    <img alt='' src={user} className={`${styles.follower}`} />
                                    <img alt='' src={user} className={`${styles.follower}`} />
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col xxl='9'>
                        <div className={`${styles.main}`}>
                            <div className={`${styles.user__post}`}>
                                <div className={`${styles.post}`}>
                                    <img alt='' src={user} className={`${styles.userimg}`} />
                                    <button className={`${styles.post__btn}`} onClick={handleShow}>{t("Start a post")}</button>
                                </div>
                                <div className={`${styles.social__btn}`}>
                                    <button className={`${styles.btns}`}>
                                        <img alt='' src={photo} className={`${styles.social__img}`} />
                                        <span className={`${styles.social__para}`}>{t("Media")}</span>
                                    </button>
                                    <button className={`${styles.btns}`}>
                                        <img alt='' src={emo} className={`${styles.social__img}`} />
                                        <span className={`${styles.social__para}`}>{t("Actions")}</span>
                                    </button>

                                </div>
                            </div>
                            <Modal show={show} onHide={handleClose}>

                                <Modal.Header closeButton>
                                    <Modal.Title>{t("Create a post")}</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <div className={`${styles.info__details}`}>
                                        <img alt='' src={user} className={`${styles.userimg}`} />
                                        <div className={`${styles.user__info}`}>
                                            <p className={`${styles.para}`}>basmala</p>
                                        </div>
                                    </div>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                        <Form.Control as="textarea" rows={4} placeholder={t("what do you want to talk about ?")}
                                            className={`${styles.input}`}
                                            value={textarea}
                                            onChange={(e) => setTextArea(e.target.value)}
                                            name="textarea" />
                                    </Form.Group>
                                    {
                                        area === "image" ?
                                            <>
                                                <input
                                                    type='file'
                                                    accept='image/gif , image/jpeg , image/png'
                                                    name='image'
                                                    id='file'
                                                    style={{ display: "none" }}
                                                    onChange={handleImg} />
                                                <p className={`${styles.select}`}>
                                                    <label htmlFor='file' >{t("select an image to share")}</label>
                                                </p>
                                                {imgupload && <img src={URL.createObjectURL(imgupload)} className={`${styles.uploadimg}`} />}
                                            </>
                                            :
                                            area === "media" && (
                                                <>
                                                    <div className={`${styles.play}`}>
                                                        <input
                                                            type='text'
                                                            placeholder='please input a video link'
                                                            value={videoplay}
                                                            onChange={(e) => { setVideo(e.target.value) }}
                                                        />
                                                    </div>
                                                    {videoplay && (<ReactPlayer width={"100%"} url={videoplay} />)}
                                                </>
                                            )
                                    }


                                </Modal.Body>
                                <Modal.Footer className={`${styles.foot}`}>
                                    <div >
                                        <button className={`${styles.reacts}`} onClick={() => switchArea("image")}>
                                            <img alt='' src={photo} className={`${styles.social__img}`} />
                                        </button>
                                        <button className={`${styles.reacts}`} onClick={() => switchArea("media")}>
                                            <img alt='' src={play} className={`${styles.social__ved}`} />
                                        </button>

                                    </div>
                                    <Button disabled={!textarea ? true : false} className={`${styles.share__btn}`}>
                                        Post
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="16" viewBox="0 0 18 16" fill="none">
                                            <g clip-path="url(#clip0_342_3703)">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M16.7143 2.85742C17.0553 2.85742 17.3823 2.97783 17.6234 3.19216C17.8645 3.40648 18 3.69717 18 4.00028V12.0003C18 12.3034 17.8645 12.5941 17.6234 12.8084C17.3823 13.0227 17.0553 13.1431 16.7143 13.1431C16.3733 13.1431 16.0463 13.0227 15.8051 12.8084C15.564 12.5941 15.4286 12.3034 15.4286 12.0003V4.00028C15.4286 3.69717 15.564 3.40648 15.8051 3.19216C16.0463 2.97783 16.3733 2.85742 16.7143 2.85742ZM7.71429 9.42885H1.60714C1.1809 9.42885 0.772119 9.27834 0.470721 9.01043C0.169323 8.74252 0 8.37916 0 8.00028C0 7.6214 0.169323 7.25804 0.470721 6.99013C0.772119 6.72222 1.1809 6.57171 1.60714 6.57171H7.71429V4.23685C7.71431 4.12378 7.75208 4.01326 7.8228 3.91928C7.89352 3.82529 7.99401 3.75207 8.11157 3.70888C8.22913 3.66569 8.35845 3.65447 8.48319 3.67663C8.60792 3.6988 8.72245 3.75337 8.81229 3.83342L13.0449 7.59571C13.1047 7.64879 13.1522 7.71185 13.1846 7.78127C13.217 7.85069 13.2337 7.92512 13.2337 8.00028C13.2337 8.07544 13.217 8.14987 13.1846 8.21929C13.1522 8.28871 13.1047 8.35177 13.0449 8.40485L8.81229 12.1671C8.72245 12.2472 8.60792 12.3018 8.48319 12.3239C8.35845 12.3461 8.22913 12.3349 8.11157 12.2917C7.99401 12.2485 7.89352 12.1753 7.8228 12.0813C7.75208 11.9873 7.71431 11.8768 7.71429 11.7637V9.42885Z" fill="white" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_342_3703">
                                                    <rect width="18" height="16" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </Button>
                                </Modal.Footer>

                            </Modal>
                            <div className={`${styles.line}`}>
                                <hr />
                                <select class={`${styles.select} form-select`} aria-label="Default select example">
                                    <option selected>Weekly</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                            <div className={`${styles.suggested}`}>
                                <h4>Suggested</h4>
                                <div className={`${styles.vector}`}>
                                    <hr />
                                    <img alt='' src={vector} />
                                </div>
                                <div className={`${styles.posts}`}>
                                    <div className={`${styles.posts__body}`}>
                                        <div className={`${styles.user__details}`}>
                                            <img alt='' src={user} />
                                            <div>
                                                <h3>Ariel Frias Ducoudray</h3>
                                                <p>Marketing, Demand Generation</p>
                                            </div>
                                        </div>
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                                <g clip-path="url(#clip0_342_3787)">
                                                    <path d="M6.68909 19.9898L6.68906 19.9898C5.66082 20.6171 4.79785 21.348 4.18385 22.1261L4.1834 22.1266C3.57615 22.8938 3.16602 23.7697 3.16602 24.667C3.16602 25.612 3.61959 26.366 4.31626 26.925L4.31654 26.9252C4.98526 27.4626 5.89404 27.8371 6.90976 28.1063C8.94909 28.6452 11.7041 28.8337 14.666 28.8337C14.9699 28.8337 15.2742 28.831 15.5727 28.827M6.68909 19.9898L15.5793 29.327M6.68909 19.9898C8.74916 18.733 11.5659 17.8337 14.666 17.8337C15.2441 17.8337 15.8131 17.8647 16.3688 17.9242M6.68909 19.9898L16.422 17.427M15.5727 28.827L15.5793 29.327M15.5727 28.827C15.5726 28.827 15.5725 28.827 15.5725 28.827L15.5793 29.327M15.5727 28.827C15.7122 28.8251 15.849 28.7881 15.9705 28.7196C16.092 28.651 16.1944 28.553 16.2683 28.4346C16.3421 28.3161 16.385 28.181 16.393 28.0417C16.401 27.9023 16.3739 27.7632 16.3141 27.637C15.7757 26.5003 15.4973 25.2579 15.4993 24.0001C15.4994 22.2272 16.0421 20.5831 16.9687 19.2217L16.9687 19.2216C17.0497 19.1026 17.0985 18.9647 17.1103 18.8212C17.1221 18.6777 17.0966 18.5336 17.0362 18.4029C16.9758 18.2723 16.8825 18.1595 16.7655 18.0756C16.6486 17.9917 16.5119 17.9395 16.3688 17.9242M15.5793 29.327C15.8027 29.3239 16.0216 29.2648 16.2161 29.1551C16.4106 29.0454 16.5745 28.8886 16.6926 28.699C16.8107 28.5095 16.8793 28.2933 16.8922 28.0704C16.905 27.8474 16.8616 27.6248 16.766 27.423C16.2593 26.3533 15.9974 25.184 15.9993 24.0003C15.9993 22.331 16.51 20.7843 17.382 19.503C17.5116 19.3126 17.5897 19.0918 17.6086 18.8623C17.6276 18.6327 17.5867 18.4022 17.49 18.1931C17.3933 17.984 17.2441 17.8036 17.057 17.6693C16.8698 17.535 16.651 17.4516 16.422 17.427M16.3688 17.9242L16.422 17.427M16.3688 17.9242C16.3688 17.9241 16.3687 17.9241 16.3687 17.9241L16.422 17.427M22.4618 24.1352L22.8153 24.4888L23.1689 24.1352L27.4081 19.896C27.565 19.7459 27.7743 19.6629 27.9915 19.6647C28.21 19.6666 28.419 19.7543 28.5736 19.9088C28.7281 20.0633 28.8157 20.2723 28.8176 20.4908C28.8195 20.708 28.7365 20.9173 28.5864 21.0742L23.4991 26.1614L23.499 26.1615C23.4093 26.2513 23.3027 26.3226 23.1854 26.3712C23.0681 26.4198 22.9423 26.4448 22.8153 26.4448C22.6884 26.4448 22.5626 26.4198 22.4453 26.3712C22.328 26.3226 22.2214 26.2513 22.1317 26.1615L22.1316 26.1614L19.4017 23.4315C19.2515 23.2747 19.1685 23.0654 19.1704 22.8481C19.1723 22.6296 19.26 22.4206 19.4145 22.2661C19.569 22.1116 19.778 22.024 19.9965 22.0221C20.2137 22.0202 20.423 22.1032 20.5799 22.2533L22.4618 24.1352ZM10.3055 4.97317C11.462 3.81669 13.0305 3.16699 14.666 3.16699C16.3015 3.16699 17.87 3.81669 19.0265 4.97317C20.183 6.12964 20.8327 7.69816 20.8327 9.33366C20.8327 10.9692 20.183 12.5377 19.0265 13.6941C17.87 14.8506 16.3015 15.5003 14.666 15.5003C13.0305 15.5003 11.462 14.8506 10.3055 13.6941C9.14905 12.5377 8.49935 10.9692 8.49935 9.33366C8.49935 7.69816 9.14905 6.12964 10.3055 4.97317Z" fill="#FF8201" stroke="#FF8201" />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_342_3787">
                                                        <rect width="32" height="32" fill="white" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                            <span className={`${styles.follow__mark}`}> Follow</span>
                                        </div>

                                    </div>
                                    <hr />
                                    <div className={`${styles.content}`}>
                                        <h3>Nice update on the current state of freight from Paulo Fernandes</h3>
                                        <div className={`${styles.ca}`}>
                                            <img alt='' src={cars} />
                                            <p className={`${styles.cars__para}`}>Resiliency vs Efficiency in the supply chain, why it matters now more than ever! - Musings from Freightwaves Future Of Supply Chain</p>
                                            <div className={`${styles.likes}`}>
                                                <p>10 Liked</p>
                                                <p>2 reposts</p>
                                            </div>
                                            <hr />
                                            <div className={`${styles.actions}`}>
                                                <div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                                        <path d="M19.0847 10.5636L18.958 11.1663H19.574H28.0006C28.5753 11.1663 29.1264 11.3946 29.5327 11.8009C29.939 12.2073 30.1673 12.7584 30.1673 13.333V15.9997C30.1673 16.2768 30.115 16.5329 30.0178 16.7837L25.9944 26.1761L25.9944 26.1761L25.9924 26.1807C25.6684 26.9584 24.9011 27.4997 24.0007 27.4997H12.0007C11.426 27.4997 10.8749 27.2714 10.4686 26.8651C10.0623 26.4587 9.83398 25.9076 9.83398 25.333V11.9997C9.83398 11.4036 10.0713 10.8628 10.4742 10.4599L18.8957 2.03844L19.9538 3.08656C19.954 3.08678 19.9542 3.087 19.9544 3.08722C20.2244 3.35754 20.394 3.73833 20.394 4.14634C20.394 4.26327 20.3833 4.37593 20.3641 4.47269C20.364 4.47344 20.3638 4.4742 20.3637 4.47495L19.0847 10.5636ZM6.16732 12.4997V27.4997H1.83398V12.4997H6.16732Z" fill="#FF8201" stroke="#FF8201" />
                                                    </svg>
                                                    <span>Like</span>
                                                </div>
                                                <div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                                        <path d="M28.8193 5.33366V5.33394L28.832 28.1259L24.3529 23.6468L24.2065 23.5003H23.9993H5.33268C4.14216 23.5003 3.16602 22.5242 3.16602 21.3337V5.33366C3.16602 4.14313 4.14216 3.16699 5.33268 3.16699H26.666C27.8533 3.16699 28.8193 4.13987 28.8193 5.33366ZM27.166 5.33366V4.83366H26.666H5.33268H4.83268V5.33366V21.3337V21.8337H5.33268H24.8989L26.3125 23.2472L27.166 24.1008V22.8937V5.33366ZM8.49935 16.5003H23.4993V18.167H8.49935V16.5003ZM8.49935 12.5003H23.4993V14.167H8.49935V12.5003ZM8.49935 8.50033H23.4993V10.167H8.49935V8.50033Z" fill="#FF8201" stroke="#FF8201" />
                                                    </svg>
                                                    <span>Comment</span>
                                                </div>
                                                <div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                                        <mask id="path-1-inside-1_342_3812" fill="white">
                                                            <path d="M22.6667 22.667H9.33333V18.667L4 24.0003L9.33333 29.3337V25.3337H25.3333V17.3337H22.6667M9.33333 9.33366H22.6667V13.3337L28 8.00033L22.6667 2.66699V6.66699H6.66667V14.667H9.33333V9.33366Z" />
                                                        </mask>
                                                        <path d="M22.6667 22.667H9.33333V18.667L4 24.0003L9.33333 29.3337V25.3337H25.3333V17.3337H22.6667M9.33333 9.33366H22.6667V13.3337L28 8.00033L22.6667 2.66699V6.66699H6.66667V14.667H9.33333V9.33366Z" fill="#FF8201" />
                                                        <path d="M9.33333 22.667H8.33333V23.667H9.33333V22.667ZM9.33333 18.667H10.3333V16.2528L8.62623 17.9599L9.33333 18.667ZM4 24.0003L3.29289 23.2932L2.58579 24.0003L3.29289 24.7074L4 24.0003ZM9.33333 29.3337L8.62623 30.0408L10.3333 31.7479V29.3337H9.33333ZM9.33333 25.3337V24.3337H8.33333V25.3337H9.33333ZM25.3333 25.3337V26.3337H26.3333V25.3337H25.3333ZM25.3333 17.3337H26.3333V16.3337H25.3333V17.3337ZM9.33333 9.33366V8.33366H8.33333V9.33366H9.33333ZM22.6667 9.33366H23.6667V8.33366H22.6667V9.33366ZM22.6667 13.3337H21.6667V15.7479L23.3738 14.0408L22.6667 13.3337ZM28 8.00033L28.7071 8.70743L29.4142 8.00033L28.7071 7.29322L28 8.00033ZM22.6667 2.66699L23.3738 1.95989L21.6667 0.252779V2.66699H22.6667ZM22.6667 6.66699V7.66699H23.6667V6.66699H22.6667ZM6.66667 6.66699V5.66699H5.66667V6.66699H6.66667ZM6.66667 14.667H5.66667V15.667H6.66667V14.667ZM9.33333 14.667V15.667H10.3333V14.667H9.33333ZM22.6667 21.667H9.33333V23.667H22.6667V21.667ZM10.3333 22.667V18.667H8.33333V22.667H10.3333ZM8.62623 17.9599L3.29289 23.2932L4.70711 24.7074L10.0404 19.3741L8.62623 17.9599ZM3.29289 24.7074L8.62623 30.0408L10.0404 28.6266L4.70711 23.2932L3.29289 24.7074ZM10.3333 29.3337V25.3337H8.33333V29.3337H10.3333ZM9.33333 26.3337H25.3333V24.3337H9.33333V26.3337ZM26.3333 25.3337V17.3337H24.3333V25.3337H26.3333ZM25.3333 16.3337H22.6667V18.3337H25.3333V16.3337ZM9.33333 10.3337H22.6667V8.33366H9.33333V10.3337ZM21.6667 9.33366V13.3337H23.6667V9.33366H21.6667ZM23.3738 14.0408L28.7071 8.70743L27.2929 7.29322L21.9596 12.6266L23.3738 14.0408ZM28.7071 7.29322L23.3738 1.95989L21.9596 3.3741L27.2929 8.70743L28.7071 7.29322ZM21.6667 2.66699V6.66699H23.6667V2.66699H21.6667ZM22.6667 5.66699H6.66667V7.66699H22.6667V5.66699ZM5.66667 6.66699V14.667H7.66667V6.66699H5.66667ZM6.66667 15.667H9.33333V13.667H6.66667V15.667ZM10.3333 14.667V9.33366H8.33333V14.667H10.3333Z" fill="#FF8201" mask="url(#path-1-inside-1_342_3812)" />
                                                    </svg>
                                                    <span>Repost</span>
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>

            </section>
        </>
    )
}

export default User
