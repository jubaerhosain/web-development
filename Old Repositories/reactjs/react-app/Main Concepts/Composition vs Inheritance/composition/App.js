import Emoji from "./components/composition/Emoji";
import Bracket from "./components/composition/Bracket";
import Text from "./components/composition/Text";

function App() {
    console.log("App rendered");
    return (
        <Emoji>
            {({ addEmoji }) => (
                <Bracket>
                    {({ addBracket }) => <Text addEmoji={addEmoji} addBracket={addBracket} />}
                </Bracket>
            )}
        </Emoji>
    );
}

export default App;
