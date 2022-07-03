import "./App.css";
import Buttonplus from "./components/Buttonplus";
import { useState } from "react";
import Buttonmoins from "./components/Buttonmoins";

function App() {
    const [counter, setCounter] = useState(0);

    return (
        <div className="App">
            <Buttonmoins counter={counter} setCounter={setCounter} />
            {counter}
            <Buttonplus counter={counter} setCounter={setCounter} />
        </div>
    );
}

export default App;
