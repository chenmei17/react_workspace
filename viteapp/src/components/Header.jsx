import {NavLink} from "react-router-dom";
export default function Header(){
    return(
        <header>
            <nav>
                <NavLink to="/" end>메인</NavLink>
                <NavLink to="/signup" end>회원가입</NavLink>
                <NavLink to="/login" end>로그인</NavLink>
            </nav>
        </header>
    );
}