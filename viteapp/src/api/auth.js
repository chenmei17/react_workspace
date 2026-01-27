const BASE_URL = "http://localhost:9993/api/auth"; // 서버주소 

/*
    로그인 요청
    payload 는 js 객체 리터럴
*/

export function loginRequestWithJson(payload){
    console.log("비동기로그인 요청예정..");
    fetch(`${BASE_URL}/login`,{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        credentials:"include", // 비동기식 쿠키전달을 위해 쿠키포함하여 전송함을 선언 
        body:JSON.stringify(payload)
    })
    .then(res=>{
        if(!res.ok) throw new Error("로그인에러");
        return res.json(); // promise 를 반환하면서 동시에 resolve(json문자열을 parsing한 객체 )를 호출 
    })
    .then(data => {
        console.log("로그인 결과...",data)
    })
    .catch(err=>console.log(err));
}

// JSON 문자열 전송이 아닌 form 전송 방식. 

export function loginRequest(payload){

    // form 방식의 파라미터를 전송할 수 있는 객체 
    const params = new URLSearchParams(); 
    params.append("homepageId", payload.homepageId);
    params.append("password", payload.password);

    fetch(`${BASE_URL}/login`,{
        method:"POST",
        headers:{"Content-Type":"application/x-www-form-urlencoded"},
        credentials:"include",
        body:params.toString()
    })
    .then(res=>{
        if(!res.ok) throw new Error("로그인에러");
        return res.json(); // promise 를 반환하면서 동시에 resolve(json문자열을 parsing한 객체 )를 호출 
    })
    .then(data => {
        console.log("로그인 결과...",data)
    })
    .catch(err=>console.log(err));

}