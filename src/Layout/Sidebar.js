import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styles from '../Styles/Sidebar.module.css'
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { logout } from '../Redux/slices/UserSlice'
const Sidebar = (props) => {
    const [active, setActive] = useState(`${props.active}`)
    const { t, i18n } = useTranslation();
    const dispatch = useDispatch();
    const handleLogout = () => {
        localStorage.clear();
        dispatch(logout());
    };
    return (
        <>

            <div className={`${styles.sidebar}`}>
                <div className={`${styles.top}`}>
                </div>
                <div className={`${styles.center}`}>
                    <ul>
                        <Link to="/" style={{ textDecoration: "none" }}>
                            <li className={` ${active === 'dashboard' ? styles.active : styles.li}`}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M19 5.00003V7.00003H15V5.00003H19ZM9 5.00003V11H5V5.00003H9ZM19 13V19H15V13H19ZM9 17V19H5V17H9ZM21 3.00003H13V9.00003H21V3.00003ZM11 3.00003H3V13H11V3.00003ZM21 11H13V21H21V11ZM11 15H3V21H11V15Z" fill="#1C1A19" />
                                </svg>
                                <span className={`${styles.span}`}> {t("Dashboard")}</span>
                            </li>
                        </Link>
                        <Link to="/insights" style={{ textDecoration: "none" }}>
                            <li className={` ${active === 'insights' ? styles.active : styles.li}`}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M11.25 4.5C12.1797 4.5 13.0547 4.67578 13.875 5.02734C14.6953 5.37891 15.4102 5.86328 16.0195 6.48047C16.6289 7.09766 17.1094 7.8125 17.4609 8.625C17.8125 9.4375 17.9922 10.3125 18 11.25C18 11.7422 17.9688 12.2031 17.9062 12.6328C17.8438 13.0625 17.7461 13.4727 17.6133 13.8633C17.4805 14.2539 17.3086 14.6406 17.0977 15.0234C16.8867 15.4062 16.6367 15.7969 16.3477 16.1953C16.1211 16.5078 15.9219 16.7891 15.75 17.0391C15.5781 17.2891 15.4375 17.5391 15.3281 17.7891C15.2188 18.0391 15.1367 18.3125 15.082 18.6094C15.0273 18.9062 15 19.2539 15 19.6523V21.75C15 22.0625 14.9414 22.3555 14.8242 22.6289C14.707 22.9023 14.5469 23.1406 14.3438 23.3438C14.1406 23.5469 13.9023 23.707 13.6289 23.8242C13.3555 23.9414 13.0625 24 12.75 24H9.75C9.4375 24 9.14453 23.9414 8.87109 23.8242C8.59766 23.707 8.35938 23.5469 8.15625 23.3438C7.95312 23.1406 7.79297 22.9023 7.67578 22.6289C7.55859 22.3555 7.5 22.0625 7.5 21.75V19.6406C7.5 19.2422 7.47266 18.8984 7.41797 18.6094C7.36328 18.3203 7.28125 18.0508 7.17188 17.8008C7.0625 17.5508 6.92188 17.2969 6.75 17.0391C6.57812 16.7812 6.37891 16.5 6.15234 16.1953C5.86328 15.7969 5.61719 15.4102 5.41406 15.0352C5.21094 14.6602 5.03906 14.2734 4.89844 13.875C4.75781 13.4766 4.65625 13.0625 4.59375 12.6328C4.53125 12.2031 4.5 11.7422 4.5 11.25C4.5 10.3203 4.67578 9.44531 5.02734 8.625C5.37891 7.80469 5.86328 7.08984 6.48047 6.48047C7.09766 5.87109 7.8125 5.39062 8.625 5.03906C9.4375 4.6875 10.3125 4.50781 11.25 4.5ZM13.5 21.75V21H9V21.75C9 21.9531 9.07422 22.1289 9.22266 22.2773C9.37109 22.4258 9.54688 22.5 9.75 22.5H12.75C12.9531 22.5 13.1289 22.4258 13.2773 22.2773C13.4258 22.1289 13.5 21.9531 13.5 21.75ZM16.5 11.25C16.5 10.5234 16.3633 9.84375 16.0898 9.21094C15.8164 8.57812 15.4414 8.01953 14.9648 7.53516C14.4883 7.05078 13.9336 6.67578 13.3008 6.41016C12.668 6.14453 11.9844 6.00781 11.25 6C10.5234 6 9.84375 6.13672 9.21094 6.41016C8.57812 6.68359 8.01953 7.05859 7.53516 7.53516C7.05078 8.01172 6.67578 8.56641 6.41016 9.19922C6.14453 9.83203 6.00781 10.5156 6 11.25C6 11.9453 6.07031 12.543 6.21094 13.043C6.35156 13.543 6.53516 13.9883 6.76172 14.3789C6.98828 14.7695 7.22656 15.1367 7.47656 15.4805C7.72656 15.8242 7.96484 16.1836 8.19141 16.5586C8.41797 16.9336 8.60547 17.3555 8.75391 17.8242C8.90234 18.293 8.98438 18.8516 9 19.5H13.5C13.5078 18.8516 13.5859 18.2969 13.7344 17.8359C13.8828 17.375 14.0703 16.9531 14.2969 16.5703C14.5234 16.1875 14.7617 15.8281 15.0117 15.4922C15.2617 15.1562 15.5 14.7891 15.7266 14.3906C15.9531 13.9922 16.1367 13.543 16.2773 13.043C16.418 12.543 16.4922 11.9453 16.5 11.25ZM11.25 3C11.0469 3 10.8711 2.92578 10.7227 2.77734C10.5742 2.62891 10.5 2.45312 10.5 2.25V0.75C10.5 0.546875 10.5742 0.371094 10.7227 0.222656C10.8711 0.0742188 11.0469 0 11.25 0C11.4531 0 11.6289 0.0742188 11.7773 0.222656C11.9258 0.371094 12 0.546875 12 0.75V2.25C12 2.45312 11.9258 2.62891 11.7773 2.77734C11.6289 2.92578 11.4531 3 11.25 3ZM2.25 10.875H0.75C0.546875 10.875 0.371094 10.8008 0.222656 10.6523C0.0742188 10.5039 0 10.3281 0 10.125C0 9.92188 0.0742188 9.74609 0.222656 9.59766C0.371094 9.44922 0.546875 9.375 0.75 9.375H2.25C2.45312 9.375 2.62891 9.44922 2.77734 9.59766C2.92578 9.74609 3 9.92188 3 10.125C3 10.3281 2.92578 10.5039 2.77734 10.6523C2.62891 10.8008 2.45312 10.875 2.25 10.875ZM2.87109 13.9336C3.07422 13.9336 3.25 14.0078 3.39844 14.1562C3.54688 14.3047 3.62109 14.4844 3.62109 14.6953C3.62109 14.8516 3.57812 14.9883 3.49219 15.1055C3.40625 15.2227 3.28906 15.3164 3.14062 15.3867C3.05469 15.4258 2.9375 15.4766 2.78906 15.5391C2.64062 15.6016 2.48047 15.668 2.30859 15.7383C2.13672 15.8086 1.98047 15.8672 1.83984 15.9141C1.69922 15.9609 1.57422 15.9883 1.46484 15.9961C1.26172 15.9961 1.08594 15.9219 0.9375 15.7734C0.789062 15.625 0.714844 15.4453 0.714844 15.2344C0.714844 15.0781 0.757812 14.9414 0.84375 14.8242C0.929688 14.707 1.04688 14.6133 1.19531 14.543C1.28125 14.5117 1.39844 14.4609 1.54688 14.3906C1.69531 14.3203 1.85547 14.2539 2.02734 14.1914C2.19922 14.1289 2.35547 14.0703 2.49609 14.0156C2.63672 13.9609 2.76172 13.9336 2.87109 13.9336ZM4.65234 6.375C4.65234 6.57812 4.57812 6.75391 4.42969 6.90234C4.28125 7.05078 4.10547 7.125 3.90234 7.125C3.76172 7.125 3.63281 7.08984 3.51562 7.01953L2.23828 6.23438C2.12891 6.16406 2.04297 6.07422 1.98047 5.96484C1.91797 5.85547 1.88281 5.73047 1.875 5.58984C1.875 5.38672 1.94922 5.21094 2.09766 5.0625C2.24609 4.91406 2.42188 4.83984 2.625 4.83984C2.75 4.83984 2.87891 4.87891 3.01172 4.95703L4.30078 5.73047C4.41016 5.79297 4.49609 5.88281 4.55859 6C4.62109 6.11719 4.65234 6.24219 4.65234 6.375ZM5.625 2.0625C5.625 1.85938 5.69922 1.68359 5.84766 1.53516C5.99609 1.38672 6.17188 1.3125 6.375 1.3125C6.50781 1.3125 6.63281 1.34766 6.75 1.41797C6.86719 1.48828 6.96094 1.58203 7.03125 1.69922L7.75781 3.01172C7.82031 3.12109 7.85156 3.23828 7.85156 3.36328C7.85156 3.57422 7.77734 3.75391 7.62891 3.90234C7.48047 4.05078 7.30469 4.125 7.10156 4.125C6.96875 4.125 6.84375 4.08984 6.72656 4.01953C6.60938 3.94922 6.51562 3.85547 6.44531 3.73828L5.71875 2.42578C5.65625 2.31641 5.625 2.19531 5.625 2.0625ZM21.75 9.375C21.9531 9.375 22.1289 9.44922 22.2773 9.59766C22.4258 9.74609 22.5 9.92188 22.5 10.125C22.5 10.3281 22.4258 10.5039 22.2773 10.6523C22.1289 10.8008 21.9531 10.875 21.75 10.875H20.25C20.0469 10.875 19.8711 10.8008 19.7227 10.6523C19.5742 10.5039 19.5 10.3281 19.5 10.125C19.5 9.92188 19.5742 9.74609 19.7227 9.59766C19.8711 9.44922 20.0469 9.375 20.25 9.375H21.75ZM21.7734 15.2461C21.7734 15.4492 21.6992 15.625 21.5508 15.7734C21.4023 15.9219 21.2266 15.9961 21.0234 15.9961C20.9375 15.9961 20.8203 15.9727 20.6719 15.9258C20.5234 15.8789 20.3633 15.8164 20.1914 15.7383C20.0195 15.6602 19.8633 15.5938 19.7227 15.5391C19.582 15.4844 19.4609 15.4297 19.3594 15.375C19.2188 15.3125 19.1055 15.2188 19.0195 15.0938C18.9336 14.9688 18.8867 14.8281 18.8789 14.6719C18.8789 14.4609 18.9531 14.2852 19.1016 14.1445C19.25 14.0039 19.4297 13.9297 19.6406 13.9219C19.7344 13.9219 19.8555 13.9492 20.0039 14.0039C20.1523 14.0586 20.3086 14.1211 20.4727 14.1914C20.6367 14.2617 20.793 14.332 20.9414 14.4023C21.0898 14.4727 21.2109 14.5234 21.3047 14.5547C21.4453 14.6172 21.5586 14.707 21.6445 14.8242C21.7305 14.9414 21.7734 15.082 21.7734 15.2461ZM18.5977 7.125C18.3945 7.125 18.2188 7.05078 18.0703 6.90234C17.9219 6.75391 17.8477 6.57812 17.8477 6.375C17.8477 6.24219 17.8789 6.11719 17.9414 6C18.0039 5.88281 18.0898 5.79297 18.1992 5.73047L19.4883 4.95703C19.6211 4.87891 19.75 4.83984 19.875 4.83984C20.0781 4.83984 20.2539 4.91406 20.4023 5.0625C20.5508 5.21094 20.625 5.38672 20.625 5.58984C20.625 5.72266 20.5938 5.84375 20.5312 5.95312C20.4688 6.0625 20.3789 6.15625 20.2617 6.23438L18.9844 7.01953C18.8672 7.08984 18.7383 7.125 18.5977 7.125ZM14.6484 3.36328C14.6484 3.23828 14.6797 3.12109 14.7422 3.01172L15.4688 1.69922C15.5312 1.58203 15.6211 1.48828 15.7383 1.41797C15.8555 1.34766 15.9844 1.3125 16.125 1.3125C16.3281 1.3125 16.5039 1.38672 16.6523 1.53516C16.8008 1.68359 16.875 1.85938 16.875 2.0625C16.875 2.19531 16.8438 2.31641 16.7812 2.42578L16.0547 3.73828C15.9922 3.85547 15.9023 3.94922 15.7852 4.01953C15.668 4.08984 15.5391 4.125 15.3984 4.125C15.1953 4.125 15.0195 4.05078 14.8711 3.90234C14.7227 3.75391 14.6484 3.57422 14.6484 3.36328Z" fill="black" />
                                </svg>
                                <span className={`${styles.span}`}> {t("Insights")}</span>
                            </li>
                        </Link>
                        <Link to="/applications" style={{ textDecoration: "none" }}>
                            <li className={` ${active === 'applications' ? styles.active : styles.li}`}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M6.86 1.25002H6.987C7.338 1.25002 7.564 1.25002 7.785 1.27002C8.73662 1.35897 9.63928 1.73293 10.375 2.34302C10.545 2.48502 10.705 2.64502 10.954 2.89302L11.53 3.47002C12.376 4.31502 12.701 4.63102 13.077 4.84002C13.295 4.96102 13.526 5.05702 13.766 5.12602C14.179 5.24302 14.632 5.25002 15.828 5.25002H16.253C17.526 5.25002 18.553 5.25002 19.364 5.35202C20.205 5.45802 20.92 5.68402 21.508 6.21202C21.606 6.30002 21.7 6.39402 21.788 6.49202C22.317 7.08002 22.542 7.79502 22.648 8.63602C22.75 9.44802 22.75 10.474 22.75 11.747V14.057C22.75 15.894 22.75 17.35 22.597 18.489C22.439 19.661 22.107 20.61 21.359 21.359C20.61 22.107 19.661 22.439 18.489 22.597C17.349 22.75 15.894 22.75 14.056 22.75H9.944C8.106 22.75 6.65 22.75 5.511 22.597C4.339 22.439 3.39 22.107 2.641 21.359C1.893 20.61 1.561 19.661 1.403 18.489C1.25 17.349 1.25 15.894 1.25 14.056V6.86002C1.25 6.06302 1.25 5.55702 1.332 5.12002C1.50884 4.18065 1.96499 3.31648 2.6408 2.64048C3.31662 1.96448 4.18067 1.50811 5.12 1.33102C5.558 1.24902 6.064 1.24902 6.86 1.24902M6.95 2.74902C6.033 2.74902 5.679 2.75202 5.397 2.80502C4.75483 2.92642 4.16417 3.2386 3.70213 3.70081C3.2401 4.16303 2.92815 4.7538 2.807 5.39602C2.753 5.67802 2.75 6.03202 2.75 6.94902V14C2.75 15.907 2.752 17.262 2.89 18.29C3.025 19.295 3.279 19.875 3.702 20.298C4.125 20.721 4.705 20.975 5.711 21.11C6.739 21.248 8.093 21.25 10 21.25H14C15.907 21.25 17.262 21.248 18.29 21.11C19.295 20.975 19.875 20.721 20.298 20.298C20.721 19.875 20.975 19.295 21.11 18.289C21.248 17.262 21.25 15.907 21.25 14V11.798C21.25 10.462 21.249 9.53102 21.16 8.82302C21.073 8.13402 20.914 7.76302 20.673 7.49502C20.62 7.43609 20.5639 7.38001 20.505 7.32702C20.237 7.08602 19.865 6.92702 19.177 6.84002C18.47 6.75102 17.538 6.75002 16.202 6.75002H15.718C14.67 6.75002 13.994 6.75002 13.355 6.56802C13.005 6.46802 12.666 6.32802 12.347 6.15102C11.767 5.82702 11.289 5.35002 10.547 4.60802L10.47 4.53002L9.92 3.98002C9.75939 3.81216 9.59156 3.65134 9.417 3.49802C8.9139 3.08085 8.29671 2.82505 7.646 2.76402C7.41431 2.7493 7.18209 2.74363 6.95 2.74902ZM12.25 10C12.25 9.80111 12.329 9.61035 12.4697 9.46969C12.6103 9.32904 12.8011 9.25002 13 9.25002H18C18.1989 9.25002 18.3897 9.32904 18.5303 9.46969C18.671 9.61035 18.75 9.80111 18.75 10C18.75 10.1989 18.671 10.3897 18.5303 10.5304C18.3897 10.671 18.1989 10.75 18 10.75H13C12.8011 10.75 12.6103 10.671 12.4697 10.5304C12.329 10.3897 12.25 10.1989 12.25 10Z" fill="black" />
                                </svg>
                                <span className={`${styles.span}`}> {t("Applications")}</span>
                            </li>
                        </Link>
                        <Link to="/wallet" style={{ textDecoration: "none" }}>
                            <li className={` ${active === 'wallet' ? styles.active : styles.li}`}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M19 12C19 12.2652 18.8946 12.5196 18.7071 12.7071C18.5196 12.8946 18.2652 13 18 13C17.7348 13 17.4804 12.8946 17.2929 12.7071C17.1054 12.5196 17 12.2652 17 12C17 11.7348 17.1054 11.4804 17.2929 11.2929C17.4804 11.1054 17.7348 11 18 11C18.2652 11 18.5196 11.1054 18.7071 11.2929C18.8946 11.4804 19 11.7348 19 12Z" fill="black" />
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.944 3.25H13.056C14.894 3.25 16.35 3.25 17.489 3.403C18.661 3.561 19.61 3.893 20.359 4.641C21.283 5.566 21.578 6.804 21.685 8.411C22.262 8.664 22.698 9.201 22.745 9.881C22.75 9.942 22.75 10.007 22.75 10.067V13.933C22.75 13.993 22.75 14.058 22.746 14.118C22.698 14.798 22.262 15.336 21.685 15.59C21.578 17.196 21.283 18.434 20.359 19.359C19.61 20.107 18.661 20.439 17.489 20.597C16.349 20.75 14.894 20.75 13.056 20.75H9.944C8.106 20.75 6.65 20.75 5.511 20.597C4.339 20.439 3.39 20.107 2.641 19.359C1.893 18.61 1.561 17.661 1.403 16.489C1.25 15.349 1.25 13.894 1.25 12.056V11.944C1.25 10.106 1.25 8.65 1.403 7.511C1.561 6.339 1.893 5.39 2.641 4.641C3.39 3.893 4.339 3.561 5.511 3.403C6.651 3.25 8.106 3.25 9.944 3.25ZM20.168 15.75H18.23C16.085 15.75 14.249 14.122 14.249 12C14.249 9.878 16.085 8.25 18.229 8.25H20.167C20.053 6.909 19.796 6.2 19.297 5.702C18.874 5.279 18.294 5.025 17.288 4.89C16.261 4.752 14.906 4.75 12.999 4.75H9.999C8.092 4.75 6.738 4.752 5.709 4.89C4.704 5.025 4.124 5.279 3.701 5.702C3.278 6.125 3.024 6.705 2.889 7.711C2.751 8.739 2.749 10.093 2.749 12C2.749 13.907 2.751 15.262 2.889 16.29C3.024 17.295 3.278 17.875 3.701 18.298C4.124 18.721 4.704 18.975 5.71 19.11C6.738 19.248 8.092 19.25 9.999 19.25H12.999C14.906 19.25 16.261 19.248 17.289 19.11C18.294 18.975 18.874 18.721 19.297 18.298C19.796 17.8 20.054 17.092 20.168 15.75ZM5.25 8C5.25 7.80109 5.32902 7.61032 5.46967 7.46967C5.61032 7.32902 5.80109 7.25 6 7.25H10C10.1989 7.25 10.3897 7.32902 10.5303 7.46967C10.671 7.61032 10.75 7.80109 10.75 8C10.75 8.19891 10.671 8.38968 10.5303 8.53033C10.3897 8.67098 10.1989 8.75 10 8.75H6C5.80109 8.75 5.61032 8.67098 5.46967 8.53033C5.32902 8.38968 5.25 8.19891 5.25 8ZM20.924 9.75H18.23C16.806 9.75 15.749 10.809 15.749 12C15.749 13.191 16.806 14.25 18.229 14.25H20.947C21.153 14.237 21.242 14.098 21.249 14.014V9.986C21.242 9.902 21.153 9.763 20.947 9.751L20.924 9.75Z" fill="black" />
                                </svg>
                                <span className={`${styles.span}`}> {t("Wallet")}</span>
                            </li>
                        </Link>
                        <Link to="/message" style={{ textDecoration: "none" }}>
                            <li className={` ${active === 'message' ? styles.active : styles.li}`}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <g clip-path="url(#clip0_260_96)">
                                        <path d="M12 0C18.4104 0 24 5.292 24 11.4C24 17.4048 18.5364 22.1304 12 22.1304C10.602 22.1311 9.21269 21.91 7.884 21.4752C7.3272 22.0152 7.1364 22.1988 5.9544 23.3388C5.1024 23.982 4.3008 24.2004 3.5844 23.7948C2.862 23.3868 2.6448 22.5924 2.7924 21.546L3.2724 18.7632C1.188 16.8024 0 14.2104 0 11.4C0 5.292 5.5884 0 12 0ZM12 1.68C6.4968 1.68 1.68 6.24 1.68 11.4C1.68 13.854 2.7744 16.1136 4.704 17.796L4.728 17.8164L5.0844 18.126L5.004 18.594L4.8384 19.5588L4.794 19.8156L4.452 21.8052C4.43183 21.9391 4.41981 22.0742 4.416 22.2096V22.3236C4.416 22.3296 4.4148 22.332 4.4136 22.3332C4.422 22.3212 4.5852 22.2696 4.8648 22.0656L7.4688 19.5384L7.9656 19.7256C9.25611 20.2071 10.6226 20.453 12 20.4516C17.6592 20.4516 22.32 16.4196 22.32 11.4C22.32 6.2412 17.5032 1.68 12 1.68ZM6.2724 9.3756C6.51415 9.36677 6.7552 9.40676 6.98115 9.49318C7.2071 9.5796 7.41331 9.71068 7.58746 9.87858C7.76161 10.0465 7.90013 10.2478 7.99474 10.4704C8.08935 10.6931 8.13812 10.9325 8.13812 11.1744C8.13812 11.4163 8.08935 11.6557 7.99474 11.8784C7.90013 12.101 7.76161 12.3023 7.58746 12.4702C7.41331 12.6381 7.2071 12.7692 6.98115 12.8556C6.7552 12.942 6.51415 12.982 6.2724 12.9732C5.8067 12.9562 5.36575 12.7592 5.0423 12.4237C4.71885 12.0883 4.53812 11.6404 4.53812 11.1744C4.53812 10.7084 4.71885 10.2605 5.0423 9.92506C5.36575 9.58958 5.8067 9.39261 6.2724 9.3756ZM12.27 9.3756C12.5118 9.36677 12.7528 9.40676 12.9787 9.49318C13.2047 9.5796 13.4109 9.71068 13.5851 9.87858C13.7592 10.0465 13.8977 10.2478 13.9923 10.4704C14.087 10.6931 14.1357 10.9325 14.1357 11.1744C14.1357 11.4163 14.087 11.6557 13.9923 11.8784C13.8977 12.101 13.7592 12.3023 13.5851 12.4702C13.4109 12.6381 13.2047 12.7692 12.9787 12.8556C12.7528 12.942 12.5118 12.982 12.27 12.9732C11.8043 12.9562 11.3633 12.7592 11.0399 12.4237C10.7164 12.0883 10.5357 11.6404 10.5357 11.1744C10.5357 10.7084 10.7164 10.2605 11.0399 9.92506C11.3633 9.58958 11.8043 9.39261 12.27 9.3756ZM18.2664 9.3756C18.5082 9.36677 18.7492 9.40676 18.9751 9.49318C19.2011 9.5796 19.4073 9.71068 19.5815 9.87858C19.7556 10.0465 19.8941 10.2478 19.9887 10.4704C20.0834 10.6931 20.1321 10.9325 20.1321 11.1744C20.1321 11.4163 20.0834 11.6557 19.9887 11.8784C19.8941 12.101 19.7556 12.3023 19.5815 12.4702C19.4073 12.6381 19.2011 12.7692 18.9751 12.8556C18.7492 12.942 18.5082 12.982 18.2664 12.9732C17.8007 12.9562 17.3597 12.7592 17.0363 12.4237C16.7128 12.0883 16.5321 11.6404 16.5321 11.1744C16.5321 10.7084 16.7128 10.2605 17.0363 9.92506C17.3597 9.58958 17.8007 9.39261 18.2664 9.3756Z" fill="#1C1A19" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_260_96">
                                            <rect width="24" height="24" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                                <span className={`${styles.span}`}> {t("Message")}</span>
                            </li>
                        </Link>
                        <Link to="/shipments" style={{ textDecoration: "none" }}>
                            <li className={` ${active === 'shipments' ? styles.active : styles.li}`}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                                    <g clip-path="url(#clip0_18_495)">
                                        <path d="M11 0.785713V7.07143M0.785706 7.07143H21.2143V19.6429C21.2143 20.0596 21.0487 20.4593 20.754 20.754C20.4593 21.0487 20.0596 21.2143 19.6428 21.2143H2.35713C1.94037 21.2143 1.54067 21.0487 1.24597 20.754C0.951266 20.4593 0.785706 20.0596 0.785706 19.6429V7.07143Z" stroke="black" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M0.785706 7.07143L3.14285 2.53C3.39696 2.01814 3.78583 1.58525 4.26761 1.27791C4.74939 0.970564 5.30586 0.800397 5.87713 0.785713H16.1228C16.7076 0.786023 17.2806 0.949437 17.7775 1.25758C18.2744 1.56572 18.6755 2.00638 18.9357 2.53L21.2143 7.07143M11 17.8294V10.582M13.75 13.2864L11 10.5364L8.24999 13.2864" stroke="black" stroke-linecap="round" stroke-linejoin="round" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_18_495">
                                            <rect width="22" height="22" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                                <span className={`${styles.span}`}> {t("Shipments")}</span>
                            </li>
                        </Link>
                        <Link to="/jobs" style={{ textDecoration: "none" }}>
                            <li className={` ${active === 'jobs' ? styles.active : styles.li}`}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M4 18.385V19V8V18.385ZM4.615 20C4.155 20 3.771 19.846 3.463 19.538C3.15433 19.2293 3 18.845 3 18.385V8.615C3 8.155 3.15433 7.771 3.463 7.463C3.771 7.15433 4.155 7 4.615 7H9V5.615C9 5.155 9.15433 4.771 9.463 4.463C9.771 4.15433 10.155 4 10.615 4H13.385C13.845 4 14.2293 4.15433 14.538 4.463C14.846 4.771 15 5.155 15 5.615V7H19.385C19.845 7 20.229 7.15433 20.537 7.463C20.8457 7.771 21 8.155 21 8.615V12.813C20.8413 12.7123 20.6817 12.6243 20.521 12.549C20.361 12.4743 20.1873 12.4043 20 12.339V8.614C20 8.43467 19.9423 8.28733 19.827 8.172C19.7117 8.05667 19.5643 7.99933 19.385 8H4.615C4.43567 8 4.28833 8.05767 4.173 8.173C4.05767 8.28833 4 8.43567 4 8.615V18.385C4 18.5643 4.05767 18.7117 4.173 18.827C4.28833 18.9423 4.43567 19 4.615 19H12.075C12.1123 19.1833 12.1523 19.355 12.195 19.515C12.237 19.675 12.288 19.8367 12.348 20H4.615ZM10 7H14V5.615C14 5.43567 13.9423 5.28833 13.827 5.173C13.7117 5.05767 13.5643 5 13.385 5H10.615C10.4357 5 10.2883 5.05767 10.173 5.173C10.0577 5.28833 10 5.43567 10 5.615V7ZM18 22C16.886 22 15.9407 21.612 15.164 20.836C14.3873 20.06 13.9993 19.1147 14 18C14 16.886 14.388 15.9407 15.164 15.164C15.94 14.3873 16.8853 13.9993 18 14C19.114 14 20.0593 14.388 20.836 15.164C21.6127 15.94 22.0007 16.8853 22 18C22 19.114 21.612 20.0593 20.836 20.836C20.06 21.6127 19.1147 22.0007 18 22ZM18 20.596L20.538 18.058L19.992 17.512L18.385 19.119V15.404H17.615V19.119L16.008 17.512L15.462 18.058L18 20.596Z" fill="#1C1A19" />
                                </svg>
                                <span className={`${styles.span}`}> {t("Jobs")}</span>
                            </li>
                        </Link>
                        <Link to="/create" style={{ textDecoration: "none" }}>
                            <li className={` ${active === 'create' ? styles.active : styles.li}`}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M21 14V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H10V5H5V19H19V14H21Z" fill="#1C1A19" />
                                    <path d="M21 7H17V3H15V7H11V9H15V13H17V9H21V7Z" fill="#1C1A19" />
                                </svg>
                                <span className={`${styles.span}`}> {t("Create a new Job")}</span>
                            </li>
                        </Link>

                        <Link to="" style={{ textDecoration: "none" }}>
                            <li className={` ${active === 'financial' ? styles.active : styles.li}`}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M3 21V3H12V5H5V19H12V21H3ZM16 17L14.625 15.55L17.175 13H9V11H17.175L14.625 8.45L16 7L21 12L16 17Z" fill="black" />
                                </svg>
                                <span className={`${styles.span}`} onClick={handleLogout}> {t("Log Out")}</span>
                            </li>
                        </Link>
                        <Link to="/" style={{ textDecoration: "none" }}>
                            <li className={` ${styles.li2}`}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                                    <g clip-path="url(#clip0_114_1034)">
                                        <path d="M12 1.5C7.03 1.5 3 5.53 3 10.5V17.5C3 19.16 4.34 20.5 6 20.5H9V12.5H5V10.5C5 6.63 8.13 3.5 12 3.5C15.87 3.5 19 6.63 19 10.5V12.5H15V20.5H19V21.5H12V23.5H18C19.66 23.5 21 22.16 21 20.5V10.5C21 5.53 16.97 1.5 12 1.5Z" fill="#323232" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_114_1034">
                                            <rect width="24" height="24" fill="white" transform="translate(0 0.5)" />
                                        </clipPath>
                                    </defs>
                                </svg>
                                <div cl>
                                    <span className={`${styles.span}`}>{t("Have Questions?")}</span>
                                    <p className={`${styles.contactus}`}>{t("Contact Us")}</p>
                                </div>
                            </li>
                        </Link>
                    </ul>

                </div>
                {/* <div className={`${styles.bottom}`}>
                    <ul>

                        <li className={`${styles.li}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="18" viewBox="0 0 16 18" fill="none">
                                <path d="M11.2205 13.0954C11.0536 12.8891 10.9701 12.6549 10.9701 12.3928C10.9701 12.1312 11.0536 11.9132 11.2205 11.7387L12.9047 9.97723H6.37269C6.11475 9.97723 5.89868 9.88583 5.72449 9.70302C5.5497 9.52085 5.4623 9.29488 5.4623 9.02512C5.4623 8.75535 5.5497 8.52906 5.72449 8.34626C5.89868 8.16408 6.11475 8.073 6.37269 8.073H12.9047L11.2205 6.31158C11.0384 6.12116 10.9474 5.89519 10.9474 5.63367C10.9474 5.37152 11.0384 5.14524 11.2205 4.95481C11.3874 4.76439 11.5962 4.66918 11.8468 4.66918C12.0969 4.66918 12.3054 4.75645 12.4723 4.93101L15.7496 8.35863C15.8407 8.45385 15.9053 8.55699 15.9436 8.66807C15.9812 8.77915 16 8.89817 16 9.02512C16 9.15207 15.9812 9.27108 15.9436 9.38216C15.9053 9.49324 15.8407 9.59639 15.7496 9.6916L12.4723 13.1192C12.275 13.3255 12.0589 13.4166 11.8241 13.3925C11.5886 13.369 11.3874 13.27 11.2205 13.0954ZM1.82077 17.5942C1.32006 17.5942 0.891266 17.4079 0.534395 17.0353C0.178132 16.6621 0 16.2136 0 15.6899V2.36029C0 1.83663 0.178132 1.38818 0.534395 1.01495C0.891266 0.642352 1.32006 0.456055 1.82077 0.456055H7.28307C7.54101 0.456055 7.75738 0.547141 7.93218 0.729312C8.10636 0.912119 8.19346 1.13841 8.19346 1.40817C8.19346 1.67794 8.10636 1.90391 7.93218 2.08608C7.75738 2.26889 7.54101 2.36029 7.28307 2.36029H1.82077V15.6899H7.28307C7.54101 15.6899 7.75738 15.7813 7.93218 15.9642C8.10636 16.1463 8.19346 16.3723 8.19346 16.6421C8.19346 16.9118 8.10636 17.1378 7.93218 17.32C7.75738 17.5028 7.54101 17.5942 7.28307 17.5942H1.82077Z" fill="#808191" className={`${styles.icon}`} />
                            </svg>
                            <span >{"Logout"}</span>
                        </li>
                    </ul>
                </div> */}

            </div>


        </>
    )
}

export default Sidebar
