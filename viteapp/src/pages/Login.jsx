import uiStyles from "../components/ui/input.module.css";
import {loginRequest} from "../api/auth.js";


export default function Login() {
   
   // 로그인 요청 메서드 정의 
   const login = ()=>{
      fetch();
   }
   return (
      <div style={{maxWidth:"400px",margin:"0 auto"}}>
         <div>
            <h2>로그인</h2>
            <form style={{display:"flex",flexDirection:"column",gap:10}}>
               <input type="text" placeholder="아이디 입력" className={uiStyles.inputStyle} />
               <input type="password" placeholder="비밀번호입력" className={uiStyles.inputStyle} />
               <button type="button" className={uiStyles.primaryBtn} onClick={login}>로그인</button>
            </form>
         </div>
      </div>
   );
}