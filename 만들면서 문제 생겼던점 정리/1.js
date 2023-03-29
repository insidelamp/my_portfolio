/*

App.js 에 코드를 작성했더니 문제발생

function App() {
  return (
    <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route path="/" component={SelectMenu}></Route>
        <Route path="/html" exact component={HtmlMenu} />
        <Route path="/css" exact component={CssMenu} />
      </Routes>
    </BrowserRouter>
  );
}

깃허브에 있는 방식대로 작성함 

////////////////////////////////////////////////////////////////////////////

< 문제 발생 > 

Matched leaf route at location "/" does not have an element. 

"/" 위치에서 일치하는 리프 경로에 요소가 없습니다.

This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.

이것은 기본적으로 "빈" 페이지를 초래하는 null 값으로 <Outlet />을 렌더링함을 의미합니다.

////////////////////////////////////////////////////////////////////////////

인터넷에 찾아보니 버전 문제라고함

react-router-dom 5 버전에서는  

<Route path="/" component={SelectMenu}></Route>

위와같이 component={SelectMenu} 를 사용해도 됬었지만

react-router-dom 6버전에서는`

<Route path="/" element={<SelectMenu />}></Route>

element={<SelectMenu />} element로 사용해야함 

이외에도 변경점이 많음  react-router-dom 버전 5와 버전 6의 차이점



*/
