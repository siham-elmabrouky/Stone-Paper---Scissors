let n1  ;
let n2  ;
// 3 nombre dechois
let imgplay1 = document.querySelector('.play1');
let imgplay2 = document.querySelector('.play2');
let start = document.querySelector('.start');
let reset = document.querySelector('.reset');
let result = document.querySelector('.res');

let resultplay1 = document.querySelector('.result1');
let resultplay2 = document.querySelector('.result2');
let R1 =0;
let R2= 0;
 
start.onclick = function(){
    n1 = Math.trunc(Math.random() * 3) + 1;
    n2 = Math.trunc(Math.random() * 3) + 1;
    // console.log(n1);
    // console.log(n2);
    imgplay1.src = `${n1}.jpg`;
    imgplay2.src = `${n2}.jpg`;

if(n1 === n2){
 
   result.textContent ="Draw";
   result.style.color = "green";
 

}else if (n1 === 1 && n2 === 2){
    result.textContent ="player one win";
    result.style.color = "rgb(136, 92, 39)";
    R1++;
    resultplay1.textContent = R1;
    resultplay2.textContent = R2;


}else if(n1 === 1 && n2 === 3){
    result.textContent ="player tow win";
    result.style.color = "rgb(136, 92, 39)";
    R2++;
    resultplay1.textContent = R1;
    resultplay2.textContent = R2;

}else if(n1 === 2  && n2 === 1){
    result.textContent ="player tow win";
    result.style.color = "rgb(136, 92, 39)";
    R2++;
    resultplay1.textContent = R1;
    resultplay2.textContent = R2;

}else if(n1 === 2 && n2 === 3){
    result.textContent ="player one win";
    result.style.color = "rgb(136, 92, 39)";
    R1++;
    resultplay1.textContent = R1;
    resultplay2.textContent = R2;

}else if(n1 === 3 && n2 === 1){
    result.textContent ="player one win";
    result.style.color = "rgb(136, 92, 39)";
    R1++;
    resultplay1.textContent = R1;
    resultplay2.textContent = R2;

}else if(n1 === 3 && n2 === 2){
    result.textContent ="player tow win";
    result.style.color = "rgb(136, 92, 39)";
    R2++;
    resultplay1.textContent = R1;
    resultplay2.textContent = R2;

}


};
reset.onclick = function(){
    R1 = 0;
    R2 = 0;
    resultplay1.textContent = R1;
    resultplay2.textContent = R2;
    result.textContent ="Result Show here !";
    result.style.color = "black";
    imgplay1.src = `1.jpg`;
    imgplay2.src = `2.jpg`;

}
