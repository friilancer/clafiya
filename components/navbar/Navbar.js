import Image from 'next/image'
import styles from '../../styles/Navbar.module.css'

const Navbar = ({toggleNav, isOpen}) => {
    return (
        <div className={isOpen ? `${styles.nav_container}` : `${styles.nav_container__hide}`}>
            <nav className={styles.nav}>
                <div className={styles.nav_header}>
                    <Image
                        src="/images/ico-logo.png"
                        alt="Logo"
                        width={28}
                        height={36}
                    />
                    <h1 className={styles.nav_header__text}>Clafiya</h1>
                    <span onClick={toggleNav} className={`${styles.nav_close}`}>x</span>
                </div>
                <ol className={styles.nav_list}>
                    <li className={`${styles.nav_list_item} ${styles.nav_list_item__active}`}>
                        <Image
                            src="/images/ico-dashboard.png"
                            alt="Dashboard"
                            width={20}
                            height={20}
                        />
                        Dashboard
                    </li>
                    <li className={`${styles.nav_list_item}`}>
                        <Image
                            src="/images/ico-device.png"
                            alt="Appointments"
                            width={20}
                            height={22}
                        />  
                        Appointments
                    </li>
                    <li className={`${styles.nav_list_item}`}>
                        <Image
                            src="/images/ico-staff.png"
                            alt="Health Workers"
                            width={20}
                            height={23}
                        />
                        Health Workers
                    </li>
                    <li className={`${styles.nav_list_item}`}>
                        <Image
                            src="/images/ico-staff-alt.png"
                            alt="Departments"
                            width={20}
                            height={23}
                        />
                        Departments
                    </li>
                    <li className={`${styles.nav_list_item}`}>
                        <Image
                            src="/images/ico-disabled.png"
                            alt="Patients"
                            width={20}
                            height={23}
                        />
                        Patients
                    </li>
                    <li className={`${styles.nav_list_item}`}>
                        <Image
                            src="/images/ico-bank.png"
                            alt="Payments"
                            width={20}
                            height={15}
                        />
                        Payments
                    </li>
                </ol>
                <ol className={`${styles.nav_list} ${styles.nav_list__secondary}`}>
                    <li className={`${styles.nav_list_item}`}>
                        <Image
                            src="/images/ico-question.png"
                            alt="Help"
                            width={20}
                            height={20}
                        />
                        Help
                    </li>
                </ol>
            </nav>
        </div>
    );
}

export default Navbar