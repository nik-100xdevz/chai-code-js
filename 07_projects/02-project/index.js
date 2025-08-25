const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const result = document.querySelector('#results');

  if (isNaN(height) || height <= 0) {
    result.innerHTML = "Please enter a valid height (in cm)";
  } else if (isNaN(weight) || weight <= 0) {
    result.innerHTML = "Please enter a valid weight (in kg)";
  } else {
    const bmi = (weight / ((height / 100) ** 2)).toFixed(2);

    let category = '';
    if (bmi < 18.6) {
      category = "Underweight";
    } else if (bmi >= 18.6 && bmi <= 24.9) {
      category = "Normal weight";
    } else {
      category = "Overweight";
    }

    result.innerHTML = `Your BMI is <b>${bmi}</b> (${category})`;
  }
});
