const Buttonreset = ({ counter, setCounter }) => {
    return (
        <button
            onClick={() => {
                setCounter((counter = 0));
            }}
        >
            RESET
        </button>
    );
};

export default Buttonreset;
