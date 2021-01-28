
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
                div1.classList.add("etchers");
                div1.addEventListener("mouseover", function (e) {this.style.background = `rgba(0, 0, 0, ${})`} );
                return div1;
            }
            container.appendChild(createDiv());
        }       
    }
    button = document.querySelector("#button");
    button.addEventListener('click', makeDivs);
}    

divLayout();



