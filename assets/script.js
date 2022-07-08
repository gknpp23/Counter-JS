var currentNumbWrapper = document.getElementById ("currentNumber");

var btnSub = document.getElementById("sub");
var btnSom = document.getElementById("som");

var currentNumb = 0;

function increment() {
    currentNumb++;
    currentNumbWrapper.innerHTML = currentNumb
    if (currentNumb >= 0) {
        currentNumbWrapper.style.color = '#5a5a5a';
    }
    //verificações de faixa de números permitidos
    if (currentNumb >= 10) {
        btnSom.disabled = true;
    }
    if (currentNumb <= -9) {
        btnSub.disabled = false;
    }
}

function decrement() {
    currentNumb--;
    currentNumbWrapper.innerHTML = currentNumb
    if (currentNumb < 0) {
        currentNumbWrapper.style.color = '#ed4949';
    }
    //verificações de faixa de números permitidos
    if (currentNumb <= -10) {
        btnSub.disabled = true;
    }
    if (currentNumb >= 9) {
        btnSom.disabled = false;
    }
    
}

//adicionando espera de evento aos botões
btnSub.addEventListener("click", decrement);
btnSom.addEventListener("click", increment);


