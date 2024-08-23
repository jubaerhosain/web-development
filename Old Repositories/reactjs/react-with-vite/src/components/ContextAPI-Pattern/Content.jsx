import ThemeContext from "./ThemeContext";

export default function Content() {
    console.log("Content rendered");
    return (
        <div>
            <ThemeContext.Consumer>{(value) => value.theme}</ThemeContext.Consumer>
        </div>
    );
}
