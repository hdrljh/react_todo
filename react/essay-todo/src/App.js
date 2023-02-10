import React, { Component } from 'react';
import { createGlobalStyle } from "styled-components";
import TodoListTemplate from './components/TodoListTemplate';
import Form from './components/Form';
import TodoItemList from './components/TodoItemList';


// **********************************************************
// 글로벌(공통) 스타일 적용 index.css에서 해도 무방하지만
// styled-components를 사용해서 적용하고 싶다면..?
// createGlobalStyle을 사용하면 컴포넌트가 만들어지고 이를 렌더링하면 됨

// const GlobalStyle = createGlobalStyle`
//   /* reset css 적용 */
//   ${reset}

//   /* 글로벌(공통) 스타일 */
//   body {
//     background: #e9ecef;
//   }
// `;
// **********************************************************

class App extends Component {

  id = 3 // 이미 0,1,2 가 존재하므로 3으로 설정

  state = {
    input: '',
    todos: [
      { id: 0, text: 'To Do List', checked: false },
      { id: 1, text: '열심히 만들어 보자', checked: true },
      { id: 2, text: 'My To Do List', checked: false },
      // { id: 3, text: '작성해보자', checked: true },
      // { id: 4, text: '오늘 하루도', checked: false },
      // { id: 5, text: '최선을 다하자', checked: true },
    ]
  }

  handleChange = (e) => {
    this.setState({
      input: e.target.value // input 의 다음 바뀔 값
    });
  }

  handleCreate = () => {
    const { input, todos } = this.state;
    this.setState({
      input: '', // 인풋 비우고
      // concat 을 사용하여 배열에 추가
      todos: todos.concat({
        id: this.id++,
        text: input,
        checked: false
      })
    });
  }

  handleKeyPress = (e) => {
    // 눌려진 키가 Enter 면 handleCreate 호출
    if (e.key === 'Enter') {
      this.handleCreate();
    }
  }

  handleToggle = (id) => {
    const { todos } = this.state;

    // 파라미터로 받은 id 를 가지고 몇번째 아이템인지 찾습니다.
    const index = todos.findIndex(todo => todo.id === id);
    const selected = todos[index]; // 선택한 객체

    const nextTodos = [...todos]; // 배열을 복사

    // 기존의 값들을 복사하고, checked 값을 덮어쓰기
    nextTodos[index] = {
      ...selected,
      checked: !selected.checked
    };

    this.setState({
      todos: nextTodos
    });
  }

  handleRemove = (id) => {
    const { todos } = this.state;
    this.setState({
      todos: todos.filter(todo => todo.id !== id)
    });
  }

  render() {
    const { input, todos } = this.state;
    const {
      handleChange,
      handleCreate,
      handleKeyPress,
      handleToggle,
      handleRemove
    } = this;

    return (
      <TodoListTemplate form={(
        <Form
          value={input}
          onKeyPress={handleKeyPress}
          onChange={handleChange}
          onCreate={handleCreate}
        />
      )}>
        <TodoItemList todos={todos} onToggle={handleToggle} onRemove={handleRemove} />
      </TodoListTemplate>
    );
  }
}

export default App;
