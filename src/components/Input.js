import React, { useState } from 'react';
/* 
  【inputコンポーネント】
　・新しいTodoを作成するINPUTフィールドを作成するコンポーネント
　・Enterをクリックされたら入力された文字を使って新しいTodoを作成する
*/

function Input({ onAddItem }) {

  const [newTodo, setNewTodo] = useState('')

  const enterHandler = (e) => {
    if (e.keyCode === 13) {
      setNewTodo(e.target.value)
      onAddItem(newTodo)
      setNewTodo('')
    }
  }

  return (
    <div className="panel-block">
      <input
        className="input"
        type="text"
        placeholder="Enter to add"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        onKeyDown={enterHandler}
      />
    </div>
  );
}

export default Input;
