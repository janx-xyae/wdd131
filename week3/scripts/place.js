document.addEventListener("DOMContentLoaded", () => {
    const yearSpan = document.getElementById("current-year");
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    const modifiedSpan = document.getElementById("last-modified");
    if (modifiedSpan) {
        modifiedSpan.textContent = document.lastModified;
    }

    const temperatureInput = 18;
    const windSpeedInput = 8.5;

    function calculateWindChill(tempCelsius, speedKmH) {
        if (tempCelsius <= 10 && speedKmH > 4.8) {
            const windChillCelsius = 13.12 + (0.6215 * tempCelsius) - (11.37 * Math.pow(speedKmH, 0.16)) + (0.3965 * tempCelsius * Math.pow(speedKmH, 0.16));
            return `${Math.round(windChillCelsius)}°C`;
        }
        return "N/A";
    }

    const windChillDisplay = document.getElementById("wind-chill-value");
    if (windChillDisplay) {
        windChillDisplay.textContent = calculateWindChill(temperatureInput, windSpeedInput);
    }
});