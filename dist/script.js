const ac = document.getElementById("ac");
const mod = document.getElementById("mod");
const deletebut = document.getElementById("delete");
const divide = document.getElementById("divide");
const multiply = document.getElementById("multiply");
const subtract = document.getElementById("subtract");
const plus = document.getElementById("plus");
const equal = document.getElementById("equal");
const dot = document.getElementById("dot");
const doubleZero = document.getElementById("00");
const input = document.getElementById("numInput");
const buttons = {};
for(let i = 0; i <= 9; i++) {
    buttons[i] = document.getElementById(i);
    buttons[i].onclick = function () {
        input.value += i;
    }
}

doubleZero.onclick = function () {
    input.value += "00";
};

plus.onclick = () => input.value += "+";
subtract.onclick = () => input.value += "-";
multiply.onclick = () => input.value += "*";
divide.onclick = () => input.value += "/";
dot.onclick = () => input.value += ".";
mod.onclick = () => input.value += "%";

ac.onclick = () => input.value = "";
deletebut.onclick = () => input.value = input.value.slice(0, -1);

equal.onclick = () => {
    try {
        input.value = eval(input.value);
    } catch {
        input.value = "Error";
    }
};

// Press "Enter" for "Equal"
numInput.addEventListener("keypress", (e) => {
    if(e.key === "Enter") {
        equal.onclick();
    }
});