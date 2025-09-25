import "./App.css";
import { useEffect, useState } from "react";


function App() {
  const [showCounter, setShowCounter] = useState(false);
  return (
    <>
      {showCounter && <Counter />}
      <br />
      <button className="show-btn" onClick={() => setShowCounter(!showCounter)}>
        Show?
      </button>
    </>
  );
}

function Counter() {
  const [counter, setCounter] = useState(1);
  const [counter2, setCounter2] = useState(100);

  // 1. 컴포넌트가 최초 렌더링 되는 경우에 실행되는 useEffect 함수를 구현하세요. (마운트)
  useEffect(() => {
    console.log("컴포넌트가 마운트됨!");
  },[]);

  // 2. 컴포넌트가 리렌더링 되는 경우에 실행되는 useEffect 함수를 구현하세요. (업데이트)
  useEffect(() => {
    console.log("리렌더링됨!");
  });

  // 3. counter2 값이 변경되는 경우에 실행되는 useEffect 함수를 구현하세요. (특정 값 업데이트)
  useEffect(() => {
    console.log("counter2 값이 변경됨");
  },[counter]);

  // 4. 클린업 함수를 작성하세요. (언마운트)
  useEffect(() => {
    console.log("클린업 함수 마운트!");
  
  return () => {
    console.log("클린업 함수 언마운트!");
  }
},[]);

  return (
    <section>
      <div>
        <div>counter : {counter}</div>
        <button onClick={() => setCounter(counter + 1)}>증가</button>
      </div>
      <div>
        <div>counter : {counter2}</div>
        <button onClick={() => setCounter2(counter2 - 1)}>감소</button>
      </div>
    </section>
  );
}

export default App;
