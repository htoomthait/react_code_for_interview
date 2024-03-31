import "./App.css";
import FormInput from "./components/FormInput";

function App() {
    const handleOnSubmit = (e) => {
        e.preventDefault();
        const data = new FormData(e.target);
        console.log(Object.formEntries(data.entries()));
    };

    return (
        <div className="app">
            <form onSubmit={handleOnSubmit}>
                <FormInput placeholder="Username" name="username" />
                <FormInput placeholder="Email" name="email" />
                <FormInput placeholder="Fullname" name="fullname" />
                <FormInput placeholder="Sth Else" name="sth else" />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default App;
