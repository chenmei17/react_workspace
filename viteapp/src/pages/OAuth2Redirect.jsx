import { useEffect, useState } from "react";

export default function OAuth2Redirect(){
    const [member,setMember] = useState(null);

    useEffect(()=>{
        // sns 로그인 성공직후. 서버측엔 아직 세션 존재.바로 사용자정보 요청 실시. 
        // 시큐리티 업무는 종료. 이제 컨트롤러에게 일시키자. 
        fetch("http://localhost:9993/api/me",{
            method:"GET",
            credentials:"include"
        })
        .then(res=>{
            if (!res.ok) throw new Error("에러발생.");
            return res.json();
        })
        .then(data => {
            console.log("사용자정보: ",data);
            setMember(data);
        })
        .catch(err => console.log("에러발생",err));
    },[]);

    return(
        <div style={{maxWidth:"720px",margin:"30px auto",border:"1px solid #ddd",padding:"20px 30px"}}>
            <div>
                <h2>OAuth2 로그인 처리결과 페이지.</h2>
                <div></div>
                
                <div style={{display:"flex",gap:"16px",flexFlow:"column"}}>
                    <div>회원명: {member?.name}</div>
                    <div>이메일: {member?.email}</div>
                    <div>프로바이더: {member?.provider}</div>
                </div>
            </div>
        </div>
    );
}