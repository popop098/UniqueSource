import styles from '../styles/Header.module.css';
import Link from 'next/link'

const Header = () => {
    return (
        <header className={styles.header}>
            <ul className={styles.list}>
                <li>고객센터</li>
                <li>사이트맵</li>
                <Link href={'/signin'} passHref>
                    <li>로그인</li>
                </Link>
            </ul>
        </header>
    );
};

export default Header;
