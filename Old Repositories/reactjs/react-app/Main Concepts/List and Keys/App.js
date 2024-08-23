import CallList from "./components/CallList";

function App() {
    console.log("App rendered");
    const quantities = [1, 2, 3];
    return (
        <div>
            <CallList quantities={quantities} />
        </div>
    );
}

export default App;
