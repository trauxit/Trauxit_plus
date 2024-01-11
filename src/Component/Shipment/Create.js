import React, { useState } from 'react'
import Sidebar from '../../Layout/Sidebar'
import styles from '../../Styles/createShip.module.css'
import Header from '../../Layout/Header'
import { Col, Row } from 'react-bootstrap'
import Form from 'react-bootstrap/Form';
import line from '../../assets/images/Line 25.png'
import map from '../../assets/images/maps-main 1.png'
import { useTranslation } from 'react-i18next';
const Create = () => {
    const [count, setCount] = useState(1);
    const [inputData, setInputData] = useState([
        {

            desc: '',
            num_unit: '',
            type_unit: '',
            weight: '',
            type_weight: '',
            length: '',
            width: '',
            height: '',
            type_size: '',
            freight: '',
            code: '',
            piece: ''

        }
    ]);
    const handleServiceChange = (e, index) => {
        const { name, value } = e.target;
        const list = [...inputData];
        list[index][name] = value;
        setInputData(list);
    };
    const handleServiceRemove = (index) => {
        const list = [...inputData];
        list.splice(index, 1);
        setInputData(list);
    };

    const handleServiceAdd = () => {
        setInputData([...inputData,
        {
            desc: '',
            num_unit: '',
            type_unit: '',
            weight: '',
            type_weight: '',
            length: '',
            width: '',
            height: '',
            type_size: '',
            freight: '',
            code: '',
            piece: ''
        }
        ]);
    };

    const handleDataCollection = () => {
        console.log(inputData); // You can do whatever you want with the collected data
    };
    const { t, i18n } = useTranslation();

    return (
        <>
            <Header />
            <section className={`${styles.home}`}>
                <Sidebar active='shipments' />
                <div className={`${styles.homeContainer}`}>
                    <p className={`${styles.new__title}`}>{t("Recent News:")} <span className={`${styles.new__para}`}>{t("El Molla Inspects MIDOR Expansion Project. Sunday, 31st December 2023")}</span> </p>
                    <h3 className={`${styles.info__title}`}>{t("Shipment Information")}</h3>
                    <p className={`${styles.info__para}`}>{t("We just need a bit more information to move your shipments")}</p>
                    <h2 className={`${styles.newcreate__title}`}>{t("Create a new shipment")}</h2>
                    <Row className={`${styles.rowmap} mt-5`}>
                        <Col>
                            <h3 className={`${styles.pickmap}`}>{t("Pick up & delivery")}</h3>
                            <Form className={`${styles.groupline}`}>
                                <Form.Group controlId="exampleForm.ControlInput1" className={`${styles.group} mb-3`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                                        <circle cx="12.5" cy="12.5" r="12.5" fill="#FF8201" />
                                    </svg>
                                    <Form.Control type="text" placeholder={t("Pick up location")} className={`${styles.gruoinput}`} name='pickup' />
                                </Form.Group>
                                <Form.Group className={`${styles.group} mb-3`} controlId="exampleForm.ControlInput1">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                                        <circle cx="12.5" cy="12.5" r="12.5" fill="#FF8201" />
                                    </svg>
                                    <Form.Control type="text" placeholder={t("Drop off location")} className={`${styles.gruoinput}`} name='dropoff' />
                                </Form.Group>
                                <img alt='' src={line} className={`${styles.line}`} />

                                <h3 className={`${styles.pickdate}`}>{t("Pick up date")}</h3>
                                <Form.Group className={`${styles.group} mb-3`} controlId="exampleForm.ControlInput1">
                                    <Form.Control type="date" placeholder={t("Drop off location")} className={`${styles.gruoinput}`} name='data' />
                                </Form.Group>
                            </Form>
                        </Col>
                        <Col className={`${styles.mapphoto}`}>
                            <img alt="" src={map} />
                        </Col>
                    </Row>
                    <div className={`${styles.additems}`}>
                        <h3 className={`${styles.info__title}`}>{t("Shipment Information")}</h3>
                        <p className={`${styles.info__para}`}>{t("Pricing is subject to change if the actual shipment details differ from what you enter below")}</p>

                    </div>
                    <div>
                        {/* Render the existing input components */}
                        {inputData.map((singleService, index) => (
                            <>
                                <div className={`${styles.info}`} key={index}>
                                    <div className={`${styles.info__delete}`}>
                                        <h3 className={`${styles.item__index}`}>{t("Item")} {index + 1}</h3>
                                        {inputData.length !== 1 && (
                                            <button
                                                type="button"
                                                onClick={() => handleServiceRemove(index)}
                                                className={`${styles.removebtn}`}
                                            >
                                                <span>{t("Remove")}</span>
                                            </button>
                                        )}
                                    </div>
                                    <div className={`${styles.field}`}>
                                        <Row className={`${styles.one}`}>
                                            <Col>
                                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                    <Form.Label className={`${styles.label}`}>{t("Commodity description")}</Form.Label>
                                                    <Form.Control type="text"
                                                        placeholder="e.g. Furniture"
                                                        name='desc'
                                                        value={singleService.desc}
                                                        onChange={(e) => handleServiceChange(e, index)}
                                                        className={`${styles.info__input}`}
                                                    />
                                                </Form.Group>
                                            </Col>
                                            <Col>
                                                <Row>
                                                    <Col>
                                                        <Row className={`${styles.center}`}>
                                                            <Col>
                                                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                                    <Form.Label className={`${styles.label}`}>{t("Number of units")}</Form.Label>
                                                                    <Form.Control type="number"
                                                                        placeholder="Quantity"
                                                                        name='num_unit'
                                                                        value={singleService.num_unit}
                                                                        onChange={(e) => handleServiceChange(e, index)}
                                                                        className={`${styles.info__input}`}
                                                                    />
                                                                </Form.Group>
                                                            </Col>
                                                            <Col>
                                                                <select class={`${styles.select} ${styles.info__input} form-select`}
                                                                    aria-label="Default select example"
                                                                    name='type_unit'
                                                                    value={singleService.type_unit}
                                                                    onChange={(e) => handleServiceChange(e, index)}
                                                                >
                                                                    <option selected>{t("Pallets")}</option>
                                                                    <option value="1">One</option>
                                                                    <option value="2">Two</option>
                                                                    <option value="3">Three</option>
                                                                </select>
                                                            </Col>
                                                        </Row>
                                                    </Col>
                                                    <Col>
                                                        <Row className={`${styles.center}`}>
                                                            <Col>
                                                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                                    <Form.Label className={`${styles.label}`}>{t("Weight per unit")}</Form.Label>
                                                                    <Form.Control type="number"
                                                                        placeholder="Quantity"
                                                                        name='weight'
                                                                        value={singleService.weight}
                                                                        onChange={(e) => handleServiceChange(e, index)}
                                                                        className={`${styles.info__input}`}
                                                                    />
                                                                </Form.Group>
                                                            </Col>
                                                            <Col>
                                                                <select class={`${styles.select} ${styles.info__input} form-select`}
                                                                    aria-label="Default select example"
                                                                    name='type_weight'
                                                                    value={singleService.type_weight}
                                                                    onChange={(e) => handleServiceChange(e, index)}
                                                                >
                                                                    <option selected>{t("Lbs")}</option>
                                                                    <option value="1">One</option>
                                                                    <option value="2">Two</option>
                                                                    <option value="3">Three</option>
                                                                </select>
                                                            </Col>
                                                        </Row>
                                                    </Col>
                                                </Row>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col className={`${styles.size}`}>
                                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                    <Form.Label className={`${styles.label}`}>{t("Lenght")}</Form.Label>
                                                    <Form.Control type="number"
                                                        placeholder="L"
                                                        name='length'
                                                        value={singleService.length}
                                                        onChange={(e) => handleServiceChange(e, index)}
                                                        className={`${styles.info__input}`}
                                                    />
                                                </Form.Group>
                                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                    <Form.Label className={`${styles.label}`}>{t("Width")}</Form.Label>
                                                    <Form.Control type="number"
                                                        placeholder="W"
                                                        name='width'
                                                        value={singleService.width}
                                                        onChange={(e) => handleServiceChange(e, index)}
                                                        className={`${styles.info__input}`}
                                                    />
                                                </Form.Group>
                                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                    <Form.Label className={`${styles.label}`}>{t("Height")}</Form.Label>
                                                    <Form.Control type="number"
                                                        placeholder="H"
                                                        name='height'
                                                        value={singleService.height}
                                                        onChange={(e) => handleServiceChange(e, index)}
                                                        className={`${styles.info__input}`}
                                                    />
                                                </Form.Group>
                                                <select class={`${styles.select} ${styles.info__input} form-select`}
                                                    aria-label="Default select example"
                                                    name='type_size'
                                                    value={singleService.type_size}
                                                    onChange={(e) => handleServiceChange(e, index)}
                                                >
                                                    <option selected>{t("in")}</option>
                                                    <option value="1">One</option>
                                                    <option value="2">Two</option>
                                                    <option value="3">Three</option>
                                                </select>
                                            </Col>
                                            <Col>
                                                <Row>
                                                    <Col>
                                                        <Form.Label className={`${styles.label}`}>{t("Freight class")}</Form.Label>
                                                        <Form.Control type="number"
                                                            placeholder="from 0 to 500"
                                                            min='1'
                                                            max='500'
                                                            name='freight'
                                                            value={singleService.freight}
                                                            onChange={(e) => handleServiceChange(e, index)}
                                                            className={`${styles.info__input}`}
                                                        />
                                                    </Col>
                                                    <Col>
                                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                            <Form.Label className={`${styles.label}`}>{t("NMFC code")}</Form.Label>
                                                            <Form.Control type="number"
                                                                placeholder="e.g. 84260"
                                                                name='code'
                                                                value={singleService.code}
                                                                onChange={(e) => handleServiceChange(e, index)}
                                                                className={`${styles.info__input}`}
                                                            />
                                                        </Form.Group>
                                                    </Col>
                                                </Row>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                    <Form.Label className={`${styles.label}`}>{t("Number of pieces per unit")}</Form.Label>
                                                    <Form.Control type="number"
                                                        placeholder="e.g. 10"
                                                        name='piece'
                                                        value={singleService.piece}
                                                        onChange={(e) => handleServiceChange(e, index)}
                                                        className={`${styles.info__input}`}
                                                    />
                                                </Form.Group>
                                            </Col>
                                            <Col>
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className={`${styles.total}`}>
                                        <h3>{t("Total weight: 1,200 lbs")}</h3>
                                        <h3>{t("Total weight: 1,200 lbs")}</h3>
                                        <h3>{t("Total weight: 1,200 lbs")}</h3>
                                    </div>
                                </div>
                                {inputData.length - 1 === index && inputData.length < 4 && (
                                    <button
                                        type="button"
                                        onClick={handleServiceAdd}
                                        className={`${styles.addbtn}`}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                                            <path d="M22.75 3.5H5.25C4.78587 3.5 4.34075 3.68437 4.01256 4.01256C3.68437 4.34075 3.5 4.78587 3.5 5.25V22.75C3.5 23.2141 3.68437 23.6592 4.01256 23.9874C4.34075 24.3156 4.78587 24.5 5.25 24.5H22.75C23.2141 24.5 23.6592 24.3156 23.9874 23.9874C24.3156 23.6592 24.5 23.2141 24.5 22.75V5.25C24.5 4.78587 24.3156 4.34075 23.9874 4.01256C23.6592 3.68437 23.2141 3.5 22.75 3.5ZM20.125 14.875H14.875V20.125C14.875 20.3571 14.7828 20.5796 14.6187 20.7437C14.4546 20.9078 14.2321 21 14 21C13.7679 21 13.5454 20.9078 13.3813 20.7437C13.2172 20.5796 13.125 20.3571 13.125 20.125V14.875H7.875C7.64294 14.875 7.42038 14.7828 7.25628 14.6187C7.09219 14.4546 7 14.2321 7 14C7 13.7679 7.09219 13.5454 7.25628 13.3813C7.42038 13.2172 7.64294 13.125 7.875 13.125H13.125V7.875C13.125 7.64294 13.2172 7.42038 13.3813 7.25628C13.5454 7.09219 13.7679 7 14 7C14.2321 7 14.4546 7.09219 14.6187 7.25628C14.7828 7.42038 14.875 7.64294 14.875 7.875V13.125H20.125C20.3571 13.125 20.5796 13.2172 20.7437 13.3813C20.9078 13.5454 21 13.7679 21 14C21 14.2321 20.9078 14.4546 20.7437 14.6187C20.5796 14.7828 20.3571 14.875 20.125 14.875Z" fill="white" />
                                        </svg>
                                        <span> {t("Add new item")}</span>
                                    </button>
                                )}
                            </>
                        ))}
                        <button onClick={handleDataCollection} className={`${styles.collect}`}>{t("Finish and Create")}</button>
                    </div>





















                </div>
            </section>
        </>
    )
}

export default Create
