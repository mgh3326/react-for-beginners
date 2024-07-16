import Button from "./Button";
import styles from "./App.module.css";
import {useEffect, useState} from "react";

function Hello() {
    useEffect(() => {
        console.log("created :)");
        return () => console.log("bye :(");
    }, []);
    return <h1>Hello</h1>;

}

function App() {
    const [showing, setShowing] = useState(true);
    const onClick = () => setShowing((prev) => !prev);
    return (
        <div>
            {showing ? <Hello/> : null}
            <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
        </div>
    )
}

export default App;
