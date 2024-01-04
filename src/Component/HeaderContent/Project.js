import React, { useState } from 'react'
import Sidebar from '../../Layout/Sidebar'
import Header from '../../Layout/Header'
import styles from '../../Styles/project.module.css'
const Project = () => {
    const [active, setActive] = useState('work')
    return (
        <>
            <Header active='project' />
            <section className={`${styles.home}`}>
                <Sidebar active='dashboard' />
                <div className={`${styles.homeContainer}`}>
                    <h3 className={`${styles.plus__title}`}>Projects</h3>
                    <p className={`${styles.plus__para}`}>Table shows some details about Projects information</p>
                    <div className={`${styles.project__option}`}>
                        <p className={`${active === 'open' ? styles.avtive__para : styles.not}`} onClick={() => setActive('open')}>Open Projects</p>
                        <p className={`${active === 'work' ? styles.avtive__para : styles.not}`} onClick={() => setActive('work')}>Work in Progress</p>
                        <p className={`${active === 'past' ? styles.avtive__para : styles.not}`} onClick={() => setActive('past')}>Past Projects</p>
                    </div>
                    <div className={`${styles.project__select}`}>
                        <div className={`${styles.inputBox_container}`}>
                            <svg className={`${styles.search_icon}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" alt="search icon">
                                <path d="M46.599 46.599a4.498 4.498 0 0 1-6.363 0l-7.941-7.941C29.028 40.749 25.167 42 21 42 9.402 42 0 32.598 0 21S9.402 0 21 0s21 9.402 21 21c0 4.167-1.251 8.028-3.342 11.295l7.941 7.941a4.498 4.498 0 0 1 0 6.363zM21 6C12.717 6 6 12.714 6 21s6.717 15 15 15c8.286 0 15-6.714 15-15S29.286 6 21 6z" className={`${styles.ico}`}>
                                </path>
                            </svg>
                            <input className={`${styles.inputBox}`} id="inputBox" type="text" placeholder="Search...." />
                        </div>
                        <div className={`${styles.show}`}>
                            <div className={`${styles.select__para} select-project`}>
                                <p>Show :</p>
                                <select class={`${styles.select} form-select`} aria-label="Default select example">
                                    <option selected>10</option>
                                    <option value="1">20</option>
                                    <option value="2">30</option>
                                    <option value="3">40</option>
                                </select>
                            </div>
                            <div className={`${styles.select__para} select-project`}>
                                <p>Show :</p>
                                <select class={`${styles.select} form-select`} aria-label="Default select example">
                                    <option selected>All</option>
                                    <option value="1">20</option>
                                    <option value="2">30</option>
                                    <option value="3">40</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.project__content}`}>
                        <h3>Create a New Project</h3>
                        <p>Create a new project and get your project done in an easy way</p>
                        <button>Create a new project</button>
                    </div>
                </div>

            </section>

        </>
    )
}

export default Project
