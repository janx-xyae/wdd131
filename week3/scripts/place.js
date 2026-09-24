document.addEventListener("DOMContentLoaded", () => {
    // 1. Footer Dates setup
    document.getElementById("currentyear").textContent = new Date().getFullYear();
    document.getElementById("lastModified").textContent = document.lastModified;

    // 2. Wind Chill Logic
    const temp = parseFloat(document.getElementById("temp").textContent);
    const wind = parseFloat(document.getElementById("wind").textContent);
    const windChillElement = document.getElementById("windchill");

    // Single-line formula function requirement
    const calculateWindChill = (t, s) => (13.12 + (0.6215 * t) - (11.37 * Math.pow(s, 0.16)) + (0.3965 * t * Math.pow(s, 0.16))).toFixed(1);

    // Condition check for Metric unit calculations (t <= 10 °C and s > 4.8 km/h)
    if (temp <= 10 && wind > 4.8) {
        windChillElement.textContent = `${calculateWindChill(temp, wind)} °C`;
    } else {
        windChillElement.textContent = "N/A";
    }
});