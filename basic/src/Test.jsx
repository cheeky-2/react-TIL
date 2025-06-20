import Header from "./Header.jsx";
/* 컴포넌트 생성 */
function Test(){
    return (
        <>
            <Header />
            <h1>Test 컴포넌트</h1>
        </>
    )
}

/* 다른컴포넌트에서 해당 Test컴포넌트 사용가능하도록 내보내기 설정 */
export default Test;