import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  /*
    StrictMode ? 개발모드에서만 동작하는 잠재적 문제를 미리 잡아주는 검사도구 
    잠재적 문제 ? deprecated API, 오래된 LifeCycle 메서드, 잘못된 위치의 side-effect 등. 
    UI 영향 x 실제운영환경에서는 제거되기 때문에 별도 삭제처리 필요 없음. 
  */
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
