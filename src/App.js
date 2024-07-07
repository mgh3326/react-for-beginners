import Button from "./Button";
import styles from "./App.module.css";
import {useEffect, useState} from "react";

function App() {
    const [counter, setCounter] = useState(0);
    const [keywored, setKeywored] = useState("")
    const onClick = () => setCounter((prev) => prev + 1);
    const onChange = (e) => setKeywored(e.target.value);
    useEffect(() => {
        console.log("I run only once");
    }, []);
    useEffect(() => {
        console.log("I run when 'keyword' changes")
    }, [keywored]);
    useEffect(() => {
        console.log("I run when 'counter & keyword' changes")
    }, [counter, keywored]);
    return (
        <div>
            <input onChange={onChange} type="text" placeholder={"Search here..."}/>
            <h1 className={styles.title}>
                {counter}
            </h1>
            <button onClick={onClick}>click me</button>
        </div>
    );
}

export default App;
