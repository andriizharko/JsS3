// Function to check if value is numeric
export function isNumeric(value) {
    return typeof value === 'number' && !isNaN(value);
}

// Function to check if value is greater than zero
export function isGreaterThanZero(value) {
    return isNumeric(value) && value > 0;
}

// Function to check if string is required
export function isRequired(text) {
    return text.trim() !== '';
}

// Function to check if string meets minimum length
export function minLength(text, length) {
    return text.length >= length;
}