class CustomContext {
    constructor(value) {
        this.value = value;
    }

    // provider
    Provider = ({ children, value }) => {
        this.value = value;
        return children;
    };

    // consumer, where children is a function
    Consumer = ({ children }) => children(this.value);
}

function createContext(value = null) {
    const context = new CustomContext(value);
    return {
        Provider: context.Provider,
        Consumer: context.Consumer,
    };
}

export default createContext;
