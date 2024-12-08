let text = document.querySelector('p');
let input = document.querySelector('input');

input.addEventListener('input', ()=>{
    text.style.color=input.value;
    
})