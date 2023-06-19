import { useRecoilState } from "recoil";
import { todoListState } from "../recoil_store/recoil_state";
import PropTypes from "prop-types";

const replaceItemAtIndex = (arr, index, newvalue) => {
    return [...arr.slice(0, index), newvalue, ...arr.slice(index + 1)];
};

const removeItemAtIndex = (arr, index) => {
    return [...arr.slice(0, index), ...arr.slice(index + 1)];
};

const TodoItem = ({ item }) => {
    const [todoList, setTodoList] = useRecoilState(todoListState);
    const index = todoList.findIndex((listItem) => listItem === item);

    const editItemText = ({ target: { value } }) => {
        const newList = replaceItemAtIndex(todoList, index, {
            ...item,
            text: value,
        });

        setTodoList(newList);
    };

    const toggleItemCompletion = () => {
        const newList = replaceItemAtIndex(todoList, index, {
            ...item,
            isComplete: !item.isComplete,
        });

        setTodoList(newList);
    };

    const deleteItem = () => {
        //Make remove operation
        const newList = removeItemAtIndex(todoList, index);

        //set the new list to the global state
        setTodoList(newList);
    };

    return (
        <div>
            <input type="text" value={item.text} onChange={editItemText} />
            <input
                type="checkbox"
                checked={item.isComplete}
                onChange={toggleItemCompletion}
            />

            <button onClick={deleteItem}>X</button>
        </div>
    );
};

TodoItem.propTypes = {
    item: PropTypes.object.isRequired,
};

export default TodoItem;
