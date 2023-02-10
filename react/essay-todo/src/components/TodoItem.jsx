import styled from 'styled-components';
import React, { Component } from 'react';
// import './css/TodoItem.css';
// import './TodoItem.css';

// ****import styled from "styled-components" 해주는거 중요****
// ***********************************************************

const TodoStyledAllCss = styled.div`
.todo-item {
  padding: 1rem;
  display: flex;
  align-items: center;
  /* 세로 가운데 정렬 */
  cursor: pointer;
  transition: all 0.15s;
  user-select: none;
}


/* 리스트 마우스올렸을 때 색상 */
.todo-item:hover {
  background: #bcc2f7;
}

/* todo-item 에 마우스가 있을때만 .remove 보이기 */
.todo-item:hover .remove {
  opacity: 1;
}

/* 리스트 사이에 윗 테두리 라인 */
.todo-item+.todo-item {
  border-top: 1px solid #f1f3f5;
}


/* 리스트 왼쪽 X표시 스타일 */
.remove {
  margin-right: 1rem;
  color: #e64980;
  font-weight: 600;
  opacity: 0;
}

.todo-text {
  flex: 1;
  /* 체크, 엑스를 제외한 공간 다 채우기 */
  word-break: break-all;
}


/* 리스트 내부 스타일 */
.checked {
  text-decoration: line-through;
  color: #5785b3;
}

/* 리스트 오른쪽 V체크 스타일 */
.check-mark {
  font-size: 1.5rem;
  line-height: 1rem;
  margin-left: 1rem;
  color: #6040f0;
  font-weight: 800;
}
`;

// ***********************************************************

/* 컴포넌트를 따로 만들어도 되고 아니면 Sass처럼 내부에 class로 만들어도 됨 */
/* 자손을 의미 */

class TodoItem extends Component {

  shouldComponentUpdate(nextProps, nextState) {
    return this.props.checked !== nextProps.checked;
  }

  render() {
    const { text, checked, id, onToggle, onRemove } = this.props;

    return (
      <TodoStyledAllCss>
        <div className="todo-item" onClick={() => onToggle(id)}>
          <div className="remove" onClick={(e) => {
            e.stopPropagation(); // onToggle 이 실행되지 않도록 함
            onRemove(id)
          }
          }>&times;</div>
          <div className={`todo-text ${checked && 'checked'}`}>
            <div>{text}</div>
          </div>
          {
            checked && (<div className="check-mark">&#x2713;</div>)
          }
        </div>
      </TodoStyledAllCss>
    );
  }
}

// class TodoItem extends Component {

//   shouldComponentUpdate(nextProps, nextState) {
//     return this.props.checked !== nextProps.checked;
//   }

//   render() {
//     const { text, checked, id, onToggle, onRemove } = this.props;

//     return (
//       <div className="todo-item" onClick={() => onToggle(id)}>
//         <div className="remove" onClick={(e) => {
//           e.stopPropagation(); // onToggle 이 실행되지 않도록 함
//           onRemove(id)
//         }
//         }>&times;</div>
//         <div className={`todo-text ${checked && 'checked'}`}>
//           <div>{text}</div>
//         </div>
//         {
//           checked && (<div className="check-mark">&#x2713;</div>)
//         }
//       </div>
//     );
//   }
// }

export default TodoItem;