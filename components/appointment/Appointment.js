import Image from 'next/image'
import styles from '../../styles/Appointments.module.css'
const Row = ({avatarSrc, name="", email="", date="", visitTime="", chw="", plan=""}) => {
   return (
       <div className={`${styles.table_row}`}>
           <div className={`${styles.table_data__name}`}>
                <Image
                    src={avatarSrc}
                    width={32}
                    height={32}
                    alt="Avatar"
                />
                <div>{name}</div>
           </div>
           <div className={`${styles.table_data__others}`}>
               <div>{email}</div>
               <div>{date}</div>
               <div>{visitTime}</div>
               <div>{chw}</div>
               <div>{plan}</div>
           </div>
           <div className={`${styles.table_data__actions}`}>
               <Image
                    src="/images/ico-edit.png"
                    width={16}
                    height={16}
                    alt="delete"
               />
               <Image
                    src="/images/ico-del.png"
                    width={14}
                    height={16}
                    alt="delete"
               />
           </div>
       </div>
   )
}

const Appointments = () => {
    return (
        <div className={`${styles.table_container}`}>
            <h2>Appointment Activity</h2>
            <div className={`${styles.table_head}`}>
                <h3>Name</h3>
                <div className= {`${styles.table_data__others}`}>
                    <h3>Email</h3>
                    <h3>Date</h3>
                    <h3>Visit Time</h3>
                    <h3>CHWs</h3>
                    <h3>Plans</h3>
                </div>
            </div>
            <Row
                avatarSrc="/images/Ed.png"
                name="Babaginda Fox"
                email="babgindafox@example.com"
                date="10/10/2020"
                visitTime="09:15-09:45am"
                chw="Blessing Chidi"
                plan="BASIC"
            /> 
            <Row
                avatarSrc="/images/Blair.png"
                name="Jennie Johnson"
                email="jenniejohnson@example.com"
                date="10/12/2020"
                visitTime="12:00-12:45pm"
                chw="Esther Lucky"
                plan="Family"
            /> 
            <Row
                avatarSrc="/images/Arjun.png"
                name="Lucky Williams"
                email="luckywilliams@example.com"
                date="10/13/2020"
                visitTime="01:15-01:45pm"
                chw="Blessing Chidi"
                plan="BASIC"
            />
            <Row
                avatarSrc="/images/Myra.png"
                name="Blessing Wilson"
                email="blessingwilson@gmail.com"
                date="10/14/2020"
                visitTime="02:00-02:45pm"
                chw="Esther Lucky"
                plan="Family"
            />
            <Row
                avatarSrc="/images/Leo.png"
                name="Purest Merion"
                email="purestmerion@example.com"
                date="10/15/2020"
                visitTime="12:15-12:45pm"
                chw="Blessing Chidi"
                plan="BASIC"
            />             
        </div>        
    )
}

export default Appointments
