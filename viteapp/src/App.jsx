import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import OAuth2Redirect from './pages/OAuth2Redirect';

function App() {
  return (
    <Routes>
      <Route element={<Layout/>}>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/oauth2/redirect" element={<OAuth2Redirect />} />
      </Route>
    </Routes>
  );
}

//외부에서 이 파일을 사용할 수 있도록 허용. 외부에서 접근할 이름을 export 뒤에 명시
// default => 외부에서 해당모듈 사용할 때의 대표이름이 App 라는 뜻 
export default App
