const form = document.querySelector("form")

console.log(form)

form.addEventListener("submit", function (event) {
    event.preventDefault() // Prevent the form from submitting  
    const weight = parseInt(document.querySelector("#weight").value)
    const height = parseInt(document.querySelector("#height").value)
    const resultDiv = document.querySelector("#result")

    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        resultDiv.textContent = `Please enter valid positive numbers for weight : ${weight} and height : ${height}`
        return
    }
    const bmi = weight / ((height / 100) * (height / 100))
    let category = ""

    if (bmi < 18.6) {
        category = "Under Weight"
    } else if (bmi >= 18.6 && bmi <= 24.9) {
        category = "Normal Range"
    } else {
        category = "OverWeight"
    }
    resultDiv.textContent = `Your BMI is ${bmi.toFixed(2)} and you are classified as ${category}.`
    resultDiv.style.color = "green"
    resultDiv.style.fontWeight = "bold"
    resultDiv.style.textAlign = "center"

    console.log(`Your BMI is ${bmi.toFixed(2)} and you are classified as ${category}.`)
    alert(`Your BMI is ${bmi.toFixed(2)} and you are classified as ${category}.`)
})