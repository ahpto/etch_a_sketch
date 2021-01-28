
container = document.querySelector("#container");
numSquare = document.querySelector('#squares');

divLayout = () => {

    makeDivs = () => {

        document.querySelectorAll('.etchers').forEach(el => el.remove());
        
        number1 = parseInt(document.querySelector('#number').value);
        
        numSquare.textContent = `${number1} Square Screen`;

        container.style["grid-template-columns"] = `repeat(${number1}, 1fr)`;
        
        for (i=1; i<=(number1*number1); i++) {
        
            createDiv = () => {    
                
                div1 = document.createElement("div");
                div1.className = "etchers";
                div1.dataKey = "0";
                div1.addEventListener("mouseover", function (e) {
                    newInt = parseInt(this.dataKey); newInt += 1; this.dataKey = newInt; this.style.background = `rgba(0, 0, 0, ${this.dataKey*0.1} )`} );
                return div1;
            }
            container.appendChild(createDiv());
        }       
    }
    button = document.querySelector("#button");
    button.addEventListener('click', makeDivs);
}    

divLayout();



