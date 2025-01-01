const form = document.querySelector("form");
form.addEventListener("submit", function (eve) {
  eve.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector("#results");
  const advi = document.querySelector("#advi");
  if (height === "" || height <= 0 || isNaN(height)) {
    results.innerHTML = `enter valid data X ${height}`;
  }
  if (weight === "" || weight <= 0 || isNaN(weight)) {
    results.innerHTML = `enter valid data X ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    results.innerHTML = `<span>${bmi}</span>`;
  }
  const bmi = (weight / ((height * height) / 10000)).toFixed(2);
  if (bmi < 18.6) {
    advi.innerHTML = `<span> Under Weight </span>`;
  } 
  if (bmi > 18.6 && bmi < 24.9) {
    advi.innerHTML = `<span> NORMAL </span>`;
  }
  if (bmi > 24.9) {
    advi.innerHTML = `<span> OVER WEIGHT </span>`;
  }
});
