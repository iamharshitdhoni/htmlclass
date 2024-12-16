let text = document.querySelector('p');
let input = document.querySelector('input');

input.addEventListener('input', ()=>{
    text.style.color=input.value;
    
})

const array = [2,4,6,8];
let sum = 0;
array.forEach(n => sum += n);
console.log(sum)

const obj = {
    name : "Harshit",
    about : {
        age : 21,
        profession : "Developer",

    }
}
console.log(obj) ;

function fun(){
    document.write('hello world')

}
    
    fun();

let name = ["harshit", "karan", "rohit", "akash", "amit", "sagar"];
for (friends in name){
    console.log(friends);
}   

for (let i = 0; i<=10; i++){
    document.write(i);
}






