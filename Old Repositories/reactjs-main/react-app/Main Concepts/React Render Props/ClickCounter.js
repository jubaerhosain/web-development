function ClickCounter(props) {
    const { count, incrementCount } = props;
    // console.log(count, incrementCount);
    return (
        <div>
            <button type="button" onClick={incrementCount}>
                Clicked {count} Times
            </button>
        </div>
    );
}

export default ClickCounter;
