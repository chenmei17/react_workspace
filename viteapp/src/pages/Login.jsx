import uiStyles from "../components/ui/input.module.css";
import {loginRequest} from "../api/auth.js";
import { useRef } from "react";


export default function Login() {
   // Ref 값 가져오기 
   // useRef 로 선언하면 해당대상은 객체!! 
   // current 를 이용하여 데이터를 넣을 수 있다. 
   const homepageIdRef = useRef(null);
   const passwordRef = useRef(null);
   
   // 로그인 요청 메서드 정의 
   const login = ()=>{
      
      // React 에서 사용자가 입력한 homepageId , password 
      const payload = {
         homepageId: homepageIdRef.current.value,
         password: passwordRef.current.value
      };

      loginRequest(payload);
   }

   return (
      <div style={{maxWidth:"400px",margin:"0 auto"}}>
         <div>
            <h2>로그인</h2>
            <form style={{display:"flex",flexDirection:"column",gap:10}}>
               <input type="text"      placeholder="아이디 입력" className={uiStyles.inputStyle} ref={homepageIdRef} />
               <input type="password"  placeholder="비밀번호입력" className={uiStyles.inputStyle} ref={passwordRef} />
               <button type="button" className={uiStyles.primaryBtn} onClick={login}>로그인</button>
            </form>
         </div>
      </div>
   );
}