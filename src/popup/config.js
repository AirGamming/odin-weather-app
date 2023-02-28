export function PopupConfig () {
    let config = JSON.parse(localStorage.getItem(`config`));
    let key = config.key;
    let city = config.city;
    let mesureSystem = config.mesureSystem;

    let background = document.createElement(`div`);
    let popup = document.createElement(`div`);
    let popupTitle = document.createElement(`h2`);
    let popupclose = document.createElement(`button`);
    let popupForm = document.createElement(`form`);
    let popupFormKeyLabel = document.createElement(`label`);
    let popupFormKey = document.createElement(`input`);
    let popupFormCityLabel = document.createElement(`label`);
    let popupFormCity = document.createElement(`input`);
    let popupFormMesureSystemLabel = document.createElement(`label`);
    let popupFormMesureSystem = document.createElement(`select`);
    let popupFormMesureSystemMetric = document.createElement(`option`);
    let popupFormMesureSystemImperial = document.createElement(`option`);
    let popupFormSubmit = document.createElement(`button`);

    background.classList.add(`popup-background`);

    popup.classList.add(`popup`);
    
    popupTitle.classList.add(`popup-title`);
    popupTitle.innerHTML = `Settings`;

    popupclose.classList.add(`popup-close`);
    popupclose.innerHTML = `X`;
    popupclose.addEventListener(`click`, () => {
        background.remove();
    });

    popupForm.classList.add(`popup-form`);

    popupFormKey.classList.add(`popup-form-key`);
    popupFormKey.setAttribute(`type`, `text`);
    popupFormKey.setAttribute(`placeholder`, `API key`);
    popupFormKey.setAttribute(`value`, key);

    popupFormCity.classList.add(`popup-form-city`);
    popupFormCity.setAttribute(`type`, `text`);
    popupFormCity.setAttribute(`placeholder`, `City`);
    popupFormCity.setAttribute(`value`, city);

    popupFormMesureSystem.classList.add(`popup-form-mesure-system`);
    popupFormMesureSystem.setAttribute(`name`, `mesure-system`);

    popupFormMesureSystemMetric.classList.add(`popup-form-mesure-system-metric`);
    popupFormMesureSystemMetric.setAttribute(`value`, `metric`);
    popupFormMesureSystemMetric.innerHTML = `Metric`;

    popupFormMesureSystemImperial.classList.add(`popup-form-mesure-system-imperial`);
    popupFormMesureSystemImperial.setAttribute(`value`, `imperial`);
    popupFormMesureSystemImperial.innerHTML = `Imperial`;

    popupFormMesureSystem.appendChild(popupFormMesureSystemMetric);
    popupFormMesureSystem.appendChild(popupFormMesureSystemImperial);

    popupFormMesureSystem.value = mesureSystem;

    popupFormSubmit.classList.add(`popup-form-submit`);
    popupFormSubmit.setAttribute(`type`, `submit`);
    popupFormSubmit.innerHTML = `Save`;
    
    popupForm.append(popupFormKey, popupFormMesureSystem, popupFormCity ,popupFormSubmit);
    popup.append(popupTitle, popupclose, popupForm);
    background.appendChild(popup);
    document.body.appendChild(background);

    popupForm.addEventListener(`submit`, (e) => {
        let key = popupFormKey.value;
        let city = popupFormCity.value;
        let mesureSystem = popupFormMesureSystem.value;
        let config = {
            key,
            city,
            mesureSystem
        };
        console.log(config);    
        config = JSON.stringify(config);
        localStorage.setItem(`config`, config);
        background.remove();
        document.location.reload();
    });
}