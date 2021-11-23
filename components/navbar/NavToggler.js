import Image from "next/image";
import styles from '../../styles/NavToggler.module.css';

const NavToggler = ({toggleNav}) => {
    return (
        <div className={`${styles.navToggler}`}>
            <Image
                src="/images/ico-logo.png"
                alt="Logo"
                width={35}
                height={43}
                onClick={toggleNav}
            />
        </div>
    )
}

export default NavToggler;