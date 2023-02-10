import styled from "styled-components"
import React from 'react';
// import './css/TodoListTemplate.css';
// import './TodoListTemplate.css';

// ****import styled from "styled-components" 해주는거 중요****
// ***********************************************************

const TodoItemStCss = styled.div`

/* 두투리스트 하단 전체부위 */
.todo-list-template {
  background: #bfbeee;
  width: 512px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  /* 그림자 */
  margin: 0 auto;
  /* 페이지 중앙 정렬 */
  margin-top: 4rem;
}

/* 두투리스트 상단 맨위에 스타일 */
.title {
  padding: 2rem;
  font-size: 2.5rem;
  text-align: center;
  font-weight: 100;
  background: #413edf;
  ;
  color: white;
}

/* 첫번째 리스트 위에 라인 */
.form-wrapper {
  padding: 1rem;
  border-bottom: 1px solid #5b4be9;
}

.todos-wrapper {
  min-height: 5rem;
}
`
// ***********************************************************


/* 컴포넌트를 따로 만들어도 되고 아니면 Sass처럼 내부에 class로 만들어도 됨 */
/* 자손을 의미 */

const TodoListTemplate = ({ form, children }) => {
  return (
    <TodoItemStCss>
      <main className="todo-list-template">
        <div className="title">
          To Do List
        </div>
        <section className="form-wrapper">
          {form}
        </section>
        <section className="todos-wrapper">
          {children}
        </section>
      </main>
    </TodoItemStCss>
  );
};

// ***********************************************************



// const TodoListTemplate = ({ form, children }) => {
//   return (
//       <main className="todo-list-template">
//         <div className="title">
//           To Do List
//         </div>
//         <section className="form-wrapper">
//           {form}
//         </section>
//         <section className="todos-wrapper">
//           {children}
//         </section>
//       </main>
//   );
// };


export default TodoListTemplate;