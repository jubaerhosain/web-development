export function fToC(f) {
    return ((f - 32) * 5) / 9;
}

export function cToF(c) {
    return (c * 9) / 5 + 32;
}

export function convert(temp, convertTo) {
    const number = parseFloat(temp);
    if (Number.isNaN(number)) {
        return "";
    }
    const output = convertTo(number).toString();
    return output;
}
