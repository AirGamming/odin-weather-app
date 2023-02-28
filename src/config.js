

export function config() {
    let key = localStorage.getItem(`config`);
    if (key === null) {
        let config = {
            key: ``,
            city: ``,
            mesureSystem: `metric`
        }
        config = JSON.stringify(config);
        localStorage.setItem(`config`, config); 
    }
    return key
}