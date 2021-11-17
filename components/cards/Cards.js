import Image from "next/image"
import styles from "../../styles/Cards.module.css"

const Cards = () => {
    return (
        <div className={`${styles.card_container}`}>
            <div className={`${styles.card}`}>
                <Image
                    className={`${styles.card_image}`}
                    alt="cross"
                    width={40}
                    height={35}
                    src="/images/ico-cross.png"
                />
                <div>
                    <h5 className={`${styles.card_header}`}>
                        Appointments
                    </h5>
                    <p className={`${styles.card_text}`}>
                        213
                    </p>
                </div>
            </div>
            <div className={`${styles.card}`}>
                <Image
                    className={`${styles.card_image}`}
                    alt="patient"
                    width={20}
                    height={40}
                    src="/images/ico-human.png"
                />
                <div>
                    <h5 className={`${styles.card_header}`}>
                        New Patients
                    </h5>
                    <p className={`${styles.card_text}`}>
                        104
                    </p>
                </div>
            </div>
            <div className={`${styles.card}`}>
                <Image
                    className={`${styles.card_image}`}
                    alt="alternate patient"
                    width={30}
                    height={40}
                    src="/images/ico-human-alt.png"
                />
                <div>
                    <h5 className={`${styles.card_header}`}>
                        Interventions
                    </h5>
                    <p className={`${styles.card_text}`}>
                        24
                    </p>
                </div>
            </div>
            <div className={`${styles.card}`}>
                <Image
                    className={`${styles.card_image}`}
                    alt="earnings"
                    width={35}
                    height={35}
                    src="/images/ico-bank-alt.png"
                />
                <div>
                    <h5 className={`${styles.card_header}`}>
                        Clafiya{"'"}s Earnings
                    </h5>
                    <p className={`${styles.card_text}`}>
                        {Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(112174)}
                    </p>
                </div>
            </div>
            
            
        </div>
    )
}

export default Cards