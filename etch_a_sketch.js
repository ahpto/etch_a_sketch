
container = document.querySelector("#container");

divLayout = (number) => {
        
    for (i=1; i<=(number*number); i++) {
        
            createDiv = () => {
                div1 = document.createElement("div");
                div1.classList.add("etchers");
                div1.style.width = ".5em";
                div1.style.height = ".5em";
                return div1;
            }
        container.appendChild(createDiv());
    }
    container.style["grid-template-columns"] = `repeat(${number}, ${div1.style.width})`;
}

divLayout(100);



