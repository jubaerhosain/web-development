import React from "react";

export default class Emoji extends React.Component {
    addEmoji = (text, emoji) => {
        return `${emoji} ${text} ${emoji}`;
    };

    render(override) {
        let text = "I am emoji component";
        if (override) {
            text = override;
        }
        return <div>{text}</div>;
    }
}
