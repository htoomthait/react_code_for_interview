import "./App.css";
import TodoList from "./components/TodoList";
import { RecoilRoot } from "recoil";

function App() {
    const h1Color = "#61dafb";
    return (
        <div className="app">
            <h1 style={{ color: `${h1Color}` }}>Recoil Example</h1>
            <h2>Learn Recoil Example with Simple todo list app</h2>
            <RecoilRoot>
                <TodoList />
            </RecoilRoot>
        </div>
    );
}

export default App;
