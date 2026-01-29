import { useRef, useState } from 'react'
import './App.css'

function App() {
  const homepageIdRef = useRef(null);
  const passwordRef = useRef(null);
  const [token,setToken] = useState("");
  
  // 로그인 요청
  const login=()=>{

    const homepageId = homepageIdRef.current.value;
    const password = passwordRef.current.value;

    const payload = {
      homepageId:homepageId,
      password:password
    }

    fetch("http://localhost:9994/api/auth/login",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body: JSON.stringify(payload)
    })
    .then(res => {
      if(!res.ok)throw new Error("에러발새잉");
      return res.json()
    })
    .then(data => {
      console.log("가져온 데이터는?? ",data);
      /* localStorage ? 
        1) 브라우저가 제공하는 클라이언트 측 영구저장소. 
        2) 저장 데이터 - 문자열 데이터만 약 최대 5MB 
        3) 사용방법
           저장하기: localStorage.setItem("fruit","apple")
           가져오기: localStorage.getItem("fruit")
        4) 쿠키와의 차이점
           쿠키는 무조건 서버로 자동전송함 (스토리지와 가장큰 차이점)
           용량이 최대 4kb ... 
        5) localStorage 는 js 로 접근가능하여 보안이 취약하다. 토큰넣긴 위험! (오늘은 토큰 주고받기수업용)
      */
      
      setToken(data.accessToken);
      localStorage.setItem("accessToken",data.accessToken);
      
    })
    .catch(err => console.log(err));
  }

  return (
    <div style={{maxWidth:420,margin:"40px auto"}}>
      <h2 style={{marginTop:0}}>JWT 로그인폼</h2>
      <form style={{display:"grid",gap:10}}>
        <input type="text" placeholder='아이디' ref={homepageIdRef} />
        <input type="password" placeholder='비밀번호' ref={passwordRef} />
        <button type="button" onClick={login}>로그인</button>
      </form>

      {/* 왼쪽 피연산자의 truthy / falsy 여부에 따라 오른쪽 값을 그대로 반환
          A가 falsy → A 반환
        	A가 truthy → B 반환
          {token ? <div>...</div> : null} 와 동일의미 
          A 가 false 이면 뒤에는 판단할필요 x -> A 반환 
          A 가 true 이면 뒤에는 판단 -> B 반환
      */}
      { token && (
        <div>
          <div>
            <b>Access Token</b><br/>
            {token}
          </div>
          <button type="button">로그아웃</button>
        </div>
      )
      }
    </div>
  )
}

export default App
