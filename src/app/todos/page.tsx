"use client";

import { useState } from "react";

type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

export default function TodoPage() {
  // 상태 관리
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState("");

  /**
   * 새로운 할 일을 목록에 추가하는 함수
   */
  const addTodo = () => {
    if (newTodo.trim() !== "") {
      setTodos([...todos, { id: Date.now(), text: newTodo, completed: false }]);
      setNewTodo(""); // 입력 필드 초기화
    }
  };

  /**
   * 할 일의 완료 상태를 토글하는 함수
   * @param id 토글할 할 일의 ID
   */
  const toggleTodoStatus = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  /**
   * 할 일을 목록에서 삭제하는 함수
   * @param id 삭제할 할 일의 ID
   */
  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // 완료된 할 일 개수 계산
  const completedTodosCount = todos.filter((t) => t.completed).length;

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        할 일 목록
      </h1>

      {/* 할 일 입력 폼 */}
      <div className="flex mb-6">
        <input
          type="text"
          placeholder="할 일을 입력하세요"
          className="flex-grow px-3 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && addTodo()}
        />
        <button
          onClick={addTodo}
          className="px-4 py-2 bg-blue-500 text-white font-medium rounded-r-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          추가
        </button>
      </div>

      {/* 할 일 목록 표시 영역 */}
      <ul className="space-y-2">
        {todos.length === 0 ? (
          <li className="text-gray-500 text-center py-4">할 일이 없습니다</li>
        ) : (
          todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onToggle={toggleTodoStatus}
              onDelete={deleteTodo}
            />
          ))
        )}
      </ul>

      {/* 통계 정보 */}
      {todos.length > 0 && (
        <div className="mt-6 text-sm text-gray-600">
          <p>
            총 {todos.length}개의 할 일, {completedTodosCount}개 완료
          </p>
        </div>
      )}
    </div>
  );
}

/**
 * 개별 할 일 아이템 컴포넌트
 */
function TodoItem({
  todo,
  onToggle,
  onDelete,
}: {
  todo: Todo;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}) {
  return (
    <li className="flex items-center p-3 border border-gray-200 rounded-lg hover:bg-gray-50">
      {/* 완료 체크박스 */}
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
        className="w-4 h-4 mr-2"
      />

      {/* 할 일 텍스트 */}
      <span
        className={`flex-grow ${
          todo.completed ? "line-through text-gray-500" : "text-gray-800"
        }`}
      >
        {todo.text}
      </span>

      {/* 삭제 버튼 */}
      <button
        onClick={() => onDelete(todo.id)}
        className="text-red-500 hover:text-red-700"
        aria-label="삭제"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </li>
  );
}
