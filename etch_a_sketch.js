//declaring globlal variables:

container = document.querySelector("#container");
numSquare = document.querySelector('#squares');
colorChoice = document.querySelectorAll('.colors');
let color;

//to display live counter of grid size, shout out to TarekVisch:
document.addEventListener('input', function (e) {
    
    number = e.target.value; 
    numSquare.textContent = `${number}x${number} Squares`

});

//to update color selection:
colorChoice.forEach(el => el.addEventListener('click', function(e) {
    color = e.target.id
}))

//main function to generate functional grid:
makeDivs = () => {

    document.querySelectorAll('.etchers').forEach(el => el.remove()); //removes existing grid
        
    number1 = parseInt(document.querySelector('#number').value);

    container.style["grid-template-columns"] = `repeat(${number1}, 1fr)`;
        
    for (i=1; i<=(number1*number1); i++) { //creates the total boxes
        
        createDiv = () => {    
                
            div1 = document.createElement("div");
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
button = document.querySelector("#button"); 
button.addEventListener('click', makeDivs);