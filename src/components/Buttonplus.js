const Buttonplus = ({ counter, setCounter }, className) => {
    return (
        <button
            onClick={() => {
                setCounter(counter + 1);
            }}
            style={{ visibility: counter < 10 ? "visible" : "hidden" }}
            className={className}
        >
            Increment
        </button>
    );
};

export default Buttonplus;
