//declaring globlal variables:

const container = document.querySelector("#container");
const numSquare = document.querySelector('#squares');
const colorChoice = document.querySelectorAll('.colors');
let color;

//to display live counter of grid size, shout out to TarekVisch:
document.addEventListener('input', e => {
    number = e.target.value; 
    numSquare.textContent = `${number}x${number} Squares`
});

//to update color selection:
const changeColor = () => {
    for (i=0; i<colorChoice.length; i++) {
        colorChoice[i].addEventListener('click', e => {color = e.target.id;})
    }
}
changeColor(); 

//main function to generate functional grid:
const makeDivs = () => {

    const removeDivs = () => { //removes existing grid
        const divs = document.querySelectorAll('.etchers');
        for (i=0; i < divs.length; i++) {
            divs[i].remove();
        }
    }
    removeDivs();
        
    const number1 = parseInt(document.querySelector('#number').value);

    container.style["grid-template-columns"] = `repeat(${number1}, 1fr)`;
        
    for (i=1; i<=(number1*number1); i++) { //creates the total boxes
        
        const createDiv = () => {    
                
            const div1 = document.createElement("div");
            div1.className = "etchers";
            div1.dataKey = "0"; //for opacity value

                /*below gives each box its functionality: on mouseover, the datakey
                is updated to change opacity, and if a new color is chosen the 
                opacity returns to 0. */ 
            div1.addEventListener("mouseover", function (e) { 
                let newInt = parseInt(this.dataKey); newInt += 1; this.dataKey = newInt; 
                    if (this.style.backgroundColor != color) 
                    {
                        this.dataKey = 0; this.style.backgroundColor = color; this.style.opacity = this.dataKey*0.1;
                    } 
                    else   
                    {
                        this.style.backgroundColor = color; this.style.opacity = this.dataKey*0.1;
                    }
                })
                return div1;
        }
        container.appendChild(createDiv());
    }       
}

//to generate new grid:
const button = document.querySelector("#button"); 
button.addEventListener('click', makeDivs);