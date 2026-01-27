/*
    웹 페이지의 공통적인 레이아웃을 표현하기 위한 파일. 
    import {Layout} from "react-router-dom";
*/
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout() {
   return (
      <div>
         <Header/>
         <main>
            <Outlet/> {/* 해당 부분만 페이지별로 교체될 예정 */}
         </main>
         <Footer/>
      </div>
   );
}