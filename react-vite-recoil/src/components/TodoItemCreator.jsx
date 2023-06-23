import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { todoListState } from "../recoil_store/recoil_state";
import uniqid from "uniquid";

// get unique id
let getId = () => {
    return uniqid();
};

const TodoItemCreator = () => {
    const [inputValue, setInputValue] = useState("");
    const setTodoList = useSetRecoilState(todoListState);

    const addItem = () => {
        const newItem = {
            id: getId(),
            text: inputValue,
            isComplete: false,
        };

        setTodoList((currentTodoList) => [...currentTodoList, newItem]);
        setInputValue("");
    };

    const onChange = ({ target: { value } }) => {
        setInputValue(value);
    };

    return (
        <>
            <div>
                <input type="text" value={inputValue} onChange={onChange} />
                <button onClick={addItem}>Add</button>
            </div>
        </>
    );
};

export default TodoItemCreator;
