function calculateBMI() {
    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value / 100;

    if (weight && height) {
        const bmi = (weight / (height * height)).toFixed(2);
        document.getElementById('bmiResult').textContent = `Your BMI is ${bmi}`;
    } else {
        alert('Please enter both weight and height.');
    }
}
