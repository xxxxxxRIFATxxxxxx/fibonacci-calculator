// Define UI
var number = document.querySelector("#number");
var result = document.querySelector("#result");

// Define Function
function fibonacci() {
    var fibo = [0, 1]
    for (var i = 2; i <= number.value; i++) {
        fibo[i] = fibo[i - 1] + fibo[i - 2];
    };
    return result.innerText = fibo;
};

// Define Event Listener
number.addEventListener("keyup", fibonacci);
