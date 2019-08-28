import * as fromMath from './math';
import './styles.css';
console.log('Ready to Party With Some TypeScript!');

const number1 = document.getElementById('number1') as HTMLInputElement;
const number2 = document.getElementById('number2') as HTMLInputElement;
const add = document.getElementById('add') as HTMLInputElement;
const result = document.getElementById('result') as HTMLTitleElement;

add.addEventListener('click', () => {
    const n1 = parseInt(number1.value, 10);
    const n2 = parseInt(number2.value, 10);
    result.innerText = (n1 + n2).toString();

    number1.value = '';
    number2.value = '';
    number1.focus();
    console.log(n1 + n2);
});
