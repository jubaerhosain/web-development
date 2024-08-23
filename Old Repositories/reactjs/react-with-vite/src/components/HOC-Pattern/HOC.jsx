import ClickCounter from './ClickCounter';
import HoverCounter from './HoverCounter';

function HOC() {
    return (
        <div className="app">
            <ClickCounter />
            <HoverCounter />
        </div>
    );
}

export default HOC;