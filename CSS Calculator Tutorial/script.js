let calculatorScreen = document.getElementById("CalculatorScreen");

function appendToScreen(number) {
    calculatorScreen.value += number
}

document.querySelectorAll(".number").forEach(button => {
    button.addEventListener("click", function () {
        appendToScreen(button.textContent)
    })
});

document.getElementById("all-clear").addEventListener("click", function () {
    calculatorScreen.value = ""
})

function calculateValue() {
    const screen = document.getElementById("CalculatorScreen")
    try {
        screen.value = eval(screen.value)

    } catch (e) {
        screen.value = "Error!"
    }
}

function deleteLast() {
    const screen = document.getElementById("CalculatorScreen")
    screen.value = screen.value.slice(0, -1)
}