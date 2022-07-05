const Buttonmoins = ({ counter, setCounter }) => {
    return (
        <button
            onClick={() => {
                setCounter(counter - 1);
            }}
            style={{ visibility: counter !== 0 ? "visible" : "hidden" }}
        >
            Decrement
        </button>
    );
};

export default Buttonmoins;
