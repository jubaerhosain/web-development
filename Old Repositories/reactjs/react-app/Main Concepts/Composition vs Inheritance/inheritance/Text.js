import Emoji from "./Emoji";

export default class Text extends Emoji {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    }

    render() {
        const decorated = this.addEmoji("I am emoji component", " E ");
        return super.render(decorated);
    }
}
