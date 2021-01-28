
container = document.querySelector("#container");

divLayout = () => {
    
    function1 = () => {
        number1 = parseInt(document.querySelector('#number').value);
        console.log(number1);
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
    button.addEventListener('click', function1);
       
}

divLayout();



