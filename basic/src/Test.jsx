import Header from "./Header.jsx";
import './Test.css';
/* 컴포넌트 생성 Test(부모컴포넌트) */
function Test(){
    return (
        <>
            <Header />
            <Aside />
            <h1>Test 컴포넌트</h1>
        </>
    )
}

/* 다른컴포넌트에서 해당 Test컴포넌트 사용가능하도록 내보내기 설정 */
export default Test;
function Aside(){
    const leftNav = document.querySelector('div');
    leftNav.classList.add('left_nav');
    return(
        <aside>
            <div>왼쪽네비
                <a href="#" target="_blank">메인화면으로</a>
            </div>
            <h1 style={{borderBottom:'1px solid #f00'}}>서브메뉴</h1>
            <a href="#">메뉴</a>
            <hr />
        </aside>
    )
}