const box= document.getElementById("box");
const code = document.getElemementByid("code");
const btn =document.getElementById("color");

btn.addEventListener('click,colorGenerate');
function colorGenerate(){
    let values ='0123456789abcdef';
    let color ='#';

    for(let i=0;i<6;i++){
     let randomvalue = Math.floor(math.random()*16);
        color += values[randomvalue]
    }

    code.innerHTML = color;
    box.style.backgroundColor = color;
}


