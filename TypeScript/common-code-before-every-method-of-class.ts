class RateLimitedCalculator {
    // in milliseconds
    private timeBound: number;
    private callLimit: number;
    private calls: { timestamp: number }[];

    /**
     * @param timeBound in milliseconds
     * @param callLimit number of call allowed in a given time bound
     */
    constructor(timeBound: number, callLimit: number) {
        this.timeBound = timeBound;
        this.callLimit = callLimit;
        this.calls = [];
        // Wrap all methods to perform rate limiting checks
        this.wrapMethods();
    }

    private wrapMethods() {
        const methods = Object.getOwnPropertyNames(Object.getPrototypeOf(this));
        methods.forEach(method => {
            if (method !== 'constructor' && typeof this[method] === 'function') {
                const originalMethod = this[method];
                this[method] = (...args: any[]) => {
                    this.cleanupExpiredCalls();
                    if (this.calls.length >= this.callLimit) {
                        throw new Error(`Rate limit exceeded. Please try again later.`);
                    }
                    return originalMethod.apply(this, args);
                };
            }
        });
    }

    getSum(a: number, b: number): number {
        return a + b;
    }

    // Example additional method
    getProduct(a: number, b: number): number {
        return a * b;
    }

    private cleanupExpiredCalls() {
        const now = Date.now();
        // Remove calls older than time bound
        this.calls = this.calls.filter(call => now - call.timestamp <= this.timeBound);
    }
}

// Example usage:
const calculator = new RateLimitedCalculator(60000, 5);

try {
    console.log(calculator.getSum(2, 3));
    console.log(calculator.getProduct(4, 5));
    console.log(calculator.getSum(6, 7));
    console.log(calculator.getProduct(8, 9));
} catch (error) {
    console.error(error.message);
}

