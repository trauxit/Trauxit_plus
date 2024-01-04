import React from 'react'
import Sidebar from '../../Layout/Sidebar'
import Header from '../../Layout/Header'
import styles from '../../Styles/plus.module.css'
import logo from '../../assets/images/APP.png'
const Plus = () => {
    return (
        <>
            <Header active='plus' />
            <section className={`${styles.home}`}>
                <Sidebar active='dashboard' />
                <div className={`${styles.homeContainer}`}>
                    <h3 className={`${styles.plus__title}`}>DashBoard - Plus</h3>
                    <p className={`${styles.plus__para}`}>Table shows some details about Projects information</p>
                    <div className={`${styles.logo__body}`}>
                        <div className={`${styles.project__para}`}>
                            <img alt='' src={logo} />
                            <div className={`${styles.plus__project}`}>
                                <h3>Welcome to TRAUXIT Plus</h3>
                                <p>If you are new to our website, here are a few things to get you started!</p>
                            </div>
                        </div>
                        <div>
                            <button className={`${styles.post}`}>Post a Project</button>
                            <button className={`${styles.browse}`}>Browse our services</button>
                        </div>
                    </div>
                    <div className={`${styles.mange}`}>
                        <h3>Project Management</h3>
                        <div>
                            <p>Milestones</p>
                            <p>Milestones Requests</p>
                            <p>Invoices</p>
                        </div>
                    </div>
                    <p className={`${styles.create__para}`}>Create Milestone Payment</p>
                    <div class="table-responsive mt-4">
                        <table class="table">
                            <thead >
                                <tr>
                                    <th scope="col" className={`${styles.head__title}`}>Freelancer</th>
                                    <th scope="col" className={`${styles.head__title}`}>Project Name</th>
                                    <th scope="col" className={`${styles.head__title}`}>Amount</th>
                                    <th scope="col" className={`${styles.head__title}`}>Short Description</th>
                                    <th scope="col" className={`${styles.head__title}`}>Status</th>
                                    <th scope="col" className={`${styles.head__title}`}>Actions</th>
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
                            </tbody>
                        </table>
                    </div>
                    <div className={`${styles.mange}`}>
                        <h3>Quick Stats</h3>
                    </div>
                    <div className={`${styles.inside}`}>
                        <div className={`${styles.first}`}>
                            <h3>Projects Posted</h3>
                            <div className={`${styles.inside__body}`}>
                                <div>
                                    <p>0</p>
                                    <p>Past 30 Days</p>
                                </div>
                                <div>
                                    <p>0</p>
                                    <p>Past 30 Days</p>
                                </div>
                            </div>
                        </div>
                        <div className={`${styles.first}`}>
                            <h3>Work in Progress</h3>
                            <div className={`${styles.inside__body}`}>
                                <div>
                                    <p>$0.00</p>
                                    <p>0 Active projects</p>
                                </div>
                                <div>
                                    <p>$0.00</p>
                                    <p>0 Active projects</p>
                                </div>
                            </div>
                        </div>
                        <div className={`${styles.first}`}>
                            <h3>Drivers Hired</h3>
                            <div className={`${styles.inside__body}`}>
                                <div>

                                </div>
                                <div>
                                    <p>0</p>
                                    <p>lifetime</p>
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
