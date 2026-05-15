const generatebtn=document.getElementById("generate-btn");
const palettecontainer=document.querySelector(".palette-container");
 
generatebtn.addEventListener("click",generatepalette);

function generatepalette() {
    const colors=[];
     
    for(let i =0;i<5;i++){
        colors.push(generateRandomColor());
    }
    updatepalette(colors);
}

function generateRandomColor(){
    const letter="0123456789ABCDEF";
    let color='#';
    
    for(let i =0;i<6;i++){
        color+=letter[Math.floor(Math.random()*16)];

    }
    return color;

    

}
function  updatepalette(colors){
    const colorboxes=document.querySelectorAll(".color-box")

    colorboxes.forEach((box,index) => {
        const color=colors[index];
        const colorDiv=box.querySelector(".color");
        const hexvalue=box.querySelector(".hex-value");


        colorDiv.style.backgroundColor=color;
        hexvalue.textContent=color;
    });
}
generatepalette()