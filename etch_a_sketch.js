
container = document.querySelector("#container");

divLayout = (number) => {
    
    container.style["grid-template-columns"] = `repeat(${number}, 1fr)`
        
    for (i=1; i<=(number*number); i++) {
        
            createDiv = () => {
                div1 = document.createElement("div");
                div1.classList.add("etchers");
                div1.style.width = `${100/number}vw`;
                div1.style.height = `${100/number}vh`;
                return div1;
            }
        container.appendChild(createDiv());
    }
}

divLayout(4);



