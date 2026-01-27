import {NavLink} from "react-router-dom";
import styles from "./ui/header.module.css";
export default function Header(){
    return(
        <header className={styles.headerStyle}>
            <h1>My App</h1>
            <nav>
                <NavLink to="/" end>메인</NavLink>
                <NavLink to="/signup" end>회원가입</NavLink>
                <NavLink to="/login" end>로그인</NavLink>
            </nav>
        </header>
    );
}