let text = document.querySelector('p');
let input = document.querySelector('input');

input.addEventListener('input', ()=>{
    text.style.color=input.value;
    
})

const array = [2,4,6,8];
let sum = 0;
array.forEach(n => sum += n);
console.log(sum)

