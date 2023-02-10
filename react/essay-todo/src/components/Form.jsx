import styled from "styled-components"
import React from 'react';
import TodoItem from './TodoItem';
// import './css/Form.css';
// import './Form.css';

// ****import styled from "styled-components" 해주는거 중요****
// ***********************************************************


const TodoFormSt = styled.div`

.form {
  display: flex;
}

.form input {
  flex: 1;
  /* 버튼을 뺀 빈 공간을 모두 채워줍니다 */
  font-size: 1.25rem;
  outline: none;
  border: none;
  border-bottom: 1px solid #bdcef1;
}

/* 추가버튼 스타일 */
.create-button {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 1rem;
  padding-right: 1rem;
  margin-left: 1rem;
  background: #0a06e7;
  border-radius: 3px;
  color: white;
  font-weight: 600;
  cursor: pointer;
}

.create-button:hover {
  background: #4955c0;
}
`;

// ***********************************************************


function Form({ value, onChange, onCreate, onKeyPress }) {
  return (
    <TodoFormSt>
      <div className="form">
        <input value={value} onChange={onChange} onKeyPress={onKeyPress} />
        <div className="create-button" onClick={onCreate}>
          추가
        </div>
      </div>
    </TodoFormSt>
  );
};


export default Form;