const temp = parseFloat(document.querySelector("#temp").textContent);
const speed = parseFloat(document.querySelector("#speed").textContent);
const f = 35.74 + 0.6215 * temp - 35.75 * Math.pow(speed, 0.16) + 0.4275 * temp * Math.pow(speed, 0.16);
if (temp <= 50 && speed > 3) {
    windchill= f.toFixed(1);
} 
else {
    windchill= "N/A";
}
document.getElementById("windchill").innerHTML = windchill