const Buttonmoins = (props) => {
    <button
        onClick={() => {
            props.setCounter(props.counter - 1);
        }}
    >
        Decrement
    </button>;
};

export default Buttonmoins;
