function ClickCounter(props) {
    const { count, incrementCount } = props;
    return (
        <div>
            <h1 onMouseOver={incrementCount}>Hovered {count} Times</h1>
        </div>
    );
}

export default ClickCounter;
