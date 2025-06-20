import './Header.css';
function Header(){
    const num1 = 5;
    const num2 = 3;
    //let numtotal = num1-num2;
    const greetion = '안녕하세요';
    const program = '리액트';
    const isLogin = false;
    return(
        <header>
            <h1 style={{backgroundColor:'yellow', color:'black'}}>logo</h1>
            <p style={{border:'2px solid red', borderRadius:'10px'}}>숫자 5에서 3을 뺀 결과 {num1-num2}</p>
            <p style={{padding:'20px', fontSize:'4rem', fontWeight:'600', backgroundColor:'#f7f7f7', color:'#333333'}}>{greetion}, {program} 출력결과 {greetion+program}</p>
            {/* const isLogin = false; 일때 p태그에 '로그인 필요' 출력하기 반대로 true면 p태그에 '로그인 성공' 출력하기 */}
            <p>{isLogin?'로그인 성공':'로그인 필요'}</p>
        </header>
    )
}
export default Header;