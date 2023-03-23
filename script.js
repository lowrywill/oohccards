// Get the sliders and sum element
const slider1 = document.getElementById("stat-slider-1");
const slider2 = document.getElementById("stat-slider-2");
const slider3 = document.getElementById("stat-slider-3");
const sumElement = document.getElementById("slider-sum");

// Update the sum when the sliders change
function updateSum() {
  const sum = parseInt(slider1.value) + parseInt(slider2.value) + parseInt(slider3.value);
  sumElement.innerHTML = sum;
}

slider1.addEventListener("input", updateSum);
slider2.addEventListener("input", updateSum);
slider3.addEventListener("input", updateSum);
