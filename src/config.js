

export function APIKey() {
    let key = localStorage.getItem(`APIKey`);
    if (key === null) {
        key = prompt(`Please enter your API key`);
        localStorage.setItem(`APIKey`, key); 
    }
    return key
}