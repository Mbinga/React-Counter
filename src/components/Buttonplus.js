const Buttonplus = (props) => {
    <button
        onClick={() => {
            props.setCounter(props.counter + 1);
        }}
    >
        Increment
    </button>;
};

export default Buttonplus;
