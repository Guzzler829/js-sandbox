let input = document.getElementById('text-input');
let submit = document.getElementById('submit');
let clearBtn = document.getElementById('clear');
let script = document.getElementById('script');
let code = document.getElementById('code');

let currentCode = '';
submit.addEventListener('click', () => {
    currentCode += input.value + '\n';
    script.innerHTML = `function rootFunction() {
        ${currentCode}
    }`;
    code.innerText = currentCode;
    currentCode = '';
    input.value = '';
    rootFunction();
})

clearBtn.addEventListener('click', () => {
    script.innerHTML = '';
    code.innerText = '';
    currentCode = '';
    input.value = '';
});