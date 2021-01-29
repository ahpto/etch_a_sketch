
container = document.querySelector("#container");
numSquare = document.querySelector('#squares');
colorChoice = document.querySelectorAll('.colors');
document.addEventListener('input', function (e) {number = e.target.value; numSquare.textContent = `${number}x${number} Squares`});
let color;

colorButton = () => {

    for (i = 0; i<colorChoice.length; i++) {
        colorChoice[i].addEventListener('click', function(e) {
            color = e.target.id})
    }
}

colorButton();

divLayout = () => {

    makeDivs = () => {

        document.querySelectorAll('.etchers').forEach(el => el.remove());
        
        number1 = parseInt(document.querySelector('#number').value);

        container.style["grid-template-columns"] = `repeat(${number1}, 1fr)`;
        
        for (i=1; i<=(number1*number1); i++) {
        
            createDiv = () => {    
                
                div1 = document.createElement("div");
                div1.className = "etchers";
                div1.dataKey = "0";
                div1.addEventListener("mouseover", function (e) {
                    let newInt = parseInt(this.dataKey); newInt += 1; this.dataKey = newInt; 
                    if (this.style.backgroundColor != color) {this.dataKey = 0; this.style.backgroundColor = color; this.style.opacity = this.dataKey*0.1;} else   
                    {this.style.backgroundColor = color; this.style.opacity = this.dataKey*0.1;}
                })
                return div1;
            }
            container.appendChild(createDiv());
        }       
    }
    button = document.querySelector("#button");
    button.addEventListener('click', makeDivs);
}    

        
divLayout();

colorButton = () => {

    for (i = 0; i<colorChoice.length; i++) {
        colorChoice[i].addEventListener('click', function(e) {
            color = e.target.id;})
    }
}

colorButton();
