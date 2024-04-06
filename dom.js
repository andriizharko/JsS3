export function $(selector) {
    const elements = document.querySelectorAll(selector);
    return elements.length === 1 ? elements[0] : elements;
}

// Function to create an element
export function cE(element) {
    return document.createElement(element);
}

// Function to add text to an element
export function cT(element, value) {
    element.innerHTML = ''; // Clear inner HTML
    const textNode = document.createTextNode(value);
    element.appendChild(textNode);
}