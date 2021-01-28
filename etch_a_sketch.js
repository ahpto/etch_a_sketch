
container = document.querySelector("#container");
numSquare = document.querySelector('#squares');

divLayout = () => {
    
    makeDivs = () => {

        document.querySelectorAll('.etchers').forEach(e => e.remove());
        
        number1 = parseInt(document.querySelector('#number').value);
        
        numSquare.textContent = `${number1} Square Screen`;

        container.style["grid-template-columns"] = `repeat(${number1}, .5em)`;
        
        for (i=1; i<=(number1*number1); i++) {
        
            createDiv = () => {
                div1 = document.createElement("div");
                div1.classList.add("etchers");
                div1.style.width = ".5em";
                div1.style.height = ".5em";
                return div1;
            }
            container.appendChild(createDiv());
        }       
    }
    button = document.querySelector("#button");
    button.addEventListener('click', makeDivs);       
}

divLayout();



