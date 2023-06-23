import { useRecoilValue } from "recoil";
import { filteredTodoListState } from "../recoil_store/recoil_state";
import TodoListStats from "./TodoListStats";
import TodoItem from "./TodoItem";
import TodoFilters from "./TodoFilters";
import TodoItemCreator from "./TodoItemCreator";

const TodoList = () => {
    const todoList = useRecoilValue(filteredTodoListState);

    return (
        <>
            <TodoListStats />
            <div style={{ display: "flex", gap: "10px" }}>
                <TodoItemCreator />
                <TodoFilters />
            </div>
            {todoList.map((todoItem) => (
                <TodoItem key={todoItem.id} item={todoItem} />
            ))}
        </>
    );
};

export default TodoList;
