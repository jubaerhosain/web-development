export default function Text({ addEmoji, addBracket }) {
    let text = "My Text";
    if (addEmoji) {
        text = addEmoji(text, " O ");
    }
    if (addBracket) {
        text = addBracket(text);
    }
    return <div>{text}</div>;
}
