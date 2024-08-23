import Bracket from "./Bracket";
import Emoji from "./Emoji";
import Text from "./Text";

function MyComposition() {
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

export default MyComposition;
