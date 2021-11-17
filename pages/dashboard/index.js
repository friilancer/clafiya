import Head from 'next/head'
import Image from 'next/image'
import Cards from '../../components/cards/Cards'
import styles from '../../styles/dashboard.module.css'

const Dashboard = () => {
    return(
        <>
            <Head>
                <title>Clafiya -Dashboard</title>
            </Head>
            <main className={`${styles.container}`}>
                <nav className={`${styles.nav__secondary}`}>
                    <div className={`${styles.inputGroup} ${styles.nav_item}`}>
                        <Image
                            src="/images/ico-search.png" 
                            alt="search"
                            width={13}
                            height={13}
                            className={`${styles.inputGroup_icon}`}
                        />
                        <input 
                            type="text" 
                            placeholder="Search" 
                            className={`${styles.inputGroup_input}`}
                        />
                    </div>
                    <div className={`${styles.notificationGroup} ${styles.nav_item}`}>
                        <Image
                            src="/images/ico-notification.png" 
                            alt="search"
                            width={24}
                            height={24}
                            className={`${styles.notificationGroup_icon}`}
                        />
                        <div className={`${styles.notificationGroup_count}`}>
                            9
                        </div>
                    </div>
                    <Image
                        src="/images/img-avatar.png" 
                        alt="avatar"
                        width={33}
                        height={33}
                        className={`${styles.inputGroup_icon} ${styles.nav_item}`}
                    />                    
                </nav>
                <Cards />
            </main>
        </>
    )
}

export default Dashboard