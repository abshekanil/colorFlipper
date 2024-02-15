let color = ["orange", "red", "blue", "aqua", "violet", "yellow", "green", "white"];

let btn = document.getElementById('btn');
let colortext = document.getElementById('colorText');



btn.addEventListener("click", function(){
    let randomElement = color[Math.floor(Math.random() * color.length)];
    
    colorpick();
    textChange();
    function textChange(){
        colortext.textContent = `Background color : ${randomElement}`;

    }
    
    function colorpick(){
        if(randomElement === "orange")
        {
            document.body.style.backgroundColor = "orange";
        }else if(randomElement === "red")
        {
            document.body.style.backgroundColor = "red";
        }else if(randomElement === "blue")
        {
            document.body.style.backgroundColor = "blue";
        }else if(randomElement === "aqua")
        {
            document.body.style.backgroundColor = "aqua";
        }else if(randomElement === "violet")
        {
            document.body.style.backgroundColor = "violet";
        }else if(randomElement === "yellow")
        {
            document.body.style.backgroundColor = "yellow";
        }else if(randomElement === "white")
        {
            document.body.style.backgroundColor = "white";
        }
        else{
            document.body.style.backgroundColor = "green";
        }
    }
});