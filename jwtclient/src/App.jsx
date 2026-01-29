import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={{maxWidth:420,margin:"40px auto"}}>
      <h2>JWT 로그인폼</h2>
      <form style={{display:"grid",gap:10}}>
        <input type="text" placeholder='아이디'/>
        <input type="password" placeholder='비밀번호'/>
        <button type="button">로그인</button>
      </form>

      <div>
        <div>
          <b>Access Token</b><br/>
          발급받은 토큰~
        </div>
        <button type="button">로그아웃</button>
      </div>
    </div>
  )
}

export default App
