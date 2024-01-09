import React, { useState } from 'react'
import Sidebar from '../../Layout/Sidebar'
import Header from '../../Layout/Header'
import styles from '../../Styles/plus.module.css'
import logo from '../../assets/images/APP.png'
import { Link } from 'react-router-dom'
import Form from 'react-bootstrap/Form';
import { useTranslation } from 'react-i18next';
const Plus = () => {
    const [data, setData] = useState([]);
    const [input1, setInput1] = useState('');
    const [input2, setInput2] = useState('');
    const [input3, setInput3] = useState('');
    const [input4, setInput4] = useState('');

    const handleAdd = () => {
        const newData = {
            input1,
            input2,
            input3,
            input4
        };
        setData([...data, newData]);
        setInput1('');
        setInput2('');
        setInput3('');
        setInput4('');
    };
    const [active, setActive] = useState('')
    const { t, i18n } = useTranslation();

    return (
        <>
            <Header active='plus' />
            <section className={`${styles.home}`}>
                <Sidebar active='dashboard' />
                <div className={`${styles.homeContainer}`}>
                    <h3 className={`${styles.plus__title}`}>{t("DashBoard - Plus")}</h3>
                    <p className={`${styles.plus__para}`}>{t("Table shows some details about Projects information")}</p>

                    <div className={`${styles.logo__body}`}>
                        <div className={`${styles.project__para}`}>
                            <img alt='' src={logo} />
                            <div className={`${styles.plus__project}`}>
                                <h3>{t("Welcome to TRAUXIT Plus")}</h3>
                                <p>{t("If you are new to our website, here are a few things to get you started!")}</p>
                            </div>
                        </div>
                        <div>
                            <Link to='/create'> <button className={`${styles.post}`}>{t("Post a Project")}</button></Link>
                            <Link to='/applications'><button className={`${styles.browse}`}>{t("Browse our services")}</button></Link>
                        </div>
                    </div>
                    <div className={`${styles.mange}`}>
                        <h3>{t("Project Management")}</h3>
                        <div>
                            <p>{t("Milestones")}</p>
                            <p>{t("Milestones Requests")}</p>
                            <p>{t("Invoices")}</p>
                        </div>
                    </div>
                    <p className={`${styles.create__para}`} onClick={() => setActive("create")}>{t("Create Milestone Payment")}</p>

                    <div className={`${active === "create" ? styles.inputs : styles.none}`}>
                        <Form.Group className={`${styles.group} mb-3`} controlId="exampleForm.ControlInput1">
                            <Form.Control type="text"
                                placeholder={t("Freelancer")}
                                className={`${styles.gruoinput}`}
                                value={input1}
                                onChange={(e) => setInput1(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className={`${styles.group} mb-3`} controlId="exampleForm.ControlInput1">
                            <Form.Control type="text"
                                placeholder={t("Project Name")}
                                className={`${styles.gruoinput}`}
                                value={input2}
                                onChange={(e) => setInput2(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className={`${styles.group} mb-3`} controlId="exampleForm.ControlInput1">
                            <Form.Control type="number"
                                placeholder={t("Amount")}
                                className={`${styles.gruoinput}`}
                                value={input3}
                                onChange={(e) => setInput3(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className={`${styles.group} mb-3`} controlId="exampleForm.ControlInput1">
                            <Form.Control type="text"
                                placeholder={t("Description")}
                                className={`${styles.gruoinput}`}
                                value={input4}
                                onChange={(e) => setInput4(e.target.value)}
                            />
                        </Form.Group>
                        <button className={`${styles.add__btn}`}
                            type="button"
                            onClick={handleAdd}
                        > {t("Add to table")}</button>
                    </div>

                    <div class="table-responsive mt-4">
                        <table class="table">
                            <thead >
                                <tr>
                                    <th scope="col" className={`${styles.head__title}`}>{t("Freelancer")}</th>
                                    <th scope="col" className={`${styles.head__title}`}>{t("Project Name")}</th>
                                    <th scope="col" className={`${styles.head__title}`}>{t("Amount")}</th>
                                    <th scope="col" className={`${styles.head__title}`}>{t("Short Description")}</th>
                                    <th scope="col" className={`${styles.head__title}`}>{t("Status")}</th>
                                    <th scope="col" className={`${styles.head__title}`}>{t("Actions")}</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className={`${styles.head__para}`}>Mahmoud Hok</td>
                                    <td className={`${styles.head__para}`}>Loader lease</td>
                                    <td className={`${styles.head__para}`}>$2,000</td>
                                    <td className={`${styles.head__para}`}>Rental of a loader for 2 weeks in MI</td>
                                    <td className={`${styles.head__para}`}>Completed</td>
                                    <td className={`${styles.head__para}`}>View history</td>
                                </tr>
                                <tr>
                                    <td className={`${styles.head__para}`}>Mahmoud Hok</td>
                                    <td className={`${styles.head__para}`}>Loader lease</td>
                                    <td className={`${styles.head__para}`}>$2,000</td>
                                    <td className={`${styles.head__para}`}>Rental of a loader for 2 weeks in MI</td>
                                    <td className={`${styles.head__para}`}>Completed</td>
                                    <td className={`${styles.head__para}`}>View history</td>
                                </tr>
                                <tr>
                                    <td className={`${styles.head__para}`}>Mahmoud Hok</td>
                                    <td className={`${styles.head__para}`}>Loader lease</td>
                                    <td className={`${styles.head__para}`}>$2,000</td>
                                    <td className={`${styles.head__para}`}>Rental of a loader for 2 weeks in MI</td>
                                    <td className={`${styles.head__para}`}>Completed</td>
                                    <td className={`${styles.head__para}`}>View history</td>
                                </tr>

                                {
                                    data.map((item, index) => (
                                        <tr>
                                            <td className={`${styles.head__para}`}>{item.input1}</td>
                                            <td className={`${styles.head__para}`}>{item.input2}</td>
                                            <td className={`${styles.head__para}`}>{item.input3}</td>
                                            <td className={`${styles.head__para}`}>{item.input4}</td>
                                            <td className={`${styles.head__para}`}>Pending</td>
                                            <td className={`${styles.head__para}`}>View history</td>
                                        </tr>
                                    ))
                                }

                            </tbody>
                        </table>
                    </div>
                    <div className={`${styles.mange}`}>
                        <h3>{t("Quick Stats")}</h3>
                    </div>
                    <div className={`${styles.inside}`}>
                        <div className={`${styles.first}`}>
                            <h3>{t("Projects Posted")}</h3>
                            <div className={`${styles.inside__body}`}>
                                <div>
                                    <p>0</p>
                                    <p> {t("Past 30 Days")}</p>
                                </div>
                                <div>
                                    <p>0</p>
                                    <p>{t("Past 30 Days")}</p>
                                </div>
                            </div>
                        </div>
                        <div className={`${styles.first}`}>
                            <h3> {t("Work in Progress")}</h3>
                            <div className={`${styles.inside__body}`}>
                                <div>
                                    <p>$0.00</p>
                                    <p>{t("0 Active projects")}</p>
                                </div>
                                <div>
                                    <p>$0.00</p>
                                    <p>{t("0 Active projects")}</p>
                                </div>
                            </div>
                        </div>
                        <div className={`${styles.first}`}>
                            <h3>{t("Drivers Hired")}</h3>
                            <div className={`${styles.inside__body}`}>
                                <div>

                                </div>
                                <div>
                                    <p>0</p>
                                    <p>{t("lifetime")}</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Plus
