let buttonEl = document.querySelector("#btn");
let bmi = document.getElementById("bmi-result");
let condition = document.getElementById("weight-condition");

function calculateBMI() {
    let height = parseFloat(document.querySelector("#height").value) / 100;
    let weight = parseFloat(document.querySelector("#weight").value);

    if (!height || !weight) {
        condition.innerText = "Please enter valid values";
        bmi.value = "";
        return;
    }

    let result = weight / (height * height);
    bmi.value = result.toFixed(2);

    if (result < 18.5) {
        condition.innerText = "Under Weight";
    } else if (result >= 18.5 && result < 24.9) {
        condition.innerText = "Normal";
    } else if (result >= 25 && result < 29.9) {
        condition.innerText = "Overweight";
    } else {
        condition.innerText = "Obesity";
    }
}

buttonEl.addEventListener("click", calculateBMI);
