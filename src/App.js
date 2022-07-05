import "./App.css";
import Buttonplus from "./components/Buttonplus";
import { useState } from "react";
import Buttonmoins from "./components/Buttonmoins";
import Buttonreset from "./components/Buttonreset";

function App() {
    const [counter, setCounter] = useState(0);

    return (
        <div className="container">
            <Buttonmoins
                className="Buttonmoins"
                counter={counter}
                setCounter={setCounter}
            />
            {counter}
            <Buttonplus
                className="Buttonplus"
                counter={counter}
                setCounter={setCounter}
            />
            <Buttonreset
                className="Buttonreset"
                counter={counter}
                setCounter={setCounter}
            />
        </div>
    );
}

export default App;
