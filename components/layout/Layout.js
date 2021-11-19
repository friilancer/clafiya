import styles from '../../styles/Layout.module.css'
import Navbar from '../navbar/Navbar';

const Layout = ({children, isOpen, toggleNav}) => {
    return (
        <div className={styles.container}>
            <Navbar isOpen={isOpen} toggleNav={toggleNav} />
            {children}
        </div>
    );
}

export default Layout