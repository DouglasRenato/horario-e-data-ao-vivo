function $(elemento){
    return document.querySelector(elemento);
}

$("aside nav ul li .grid").addEventListener("click", function(){
    if($("#principal").classList.contains("grid-inicial")){
        $("#principal").classList.remove("grid-inicial");
        $("#principal").classList.add("grid-b");
    }
    else if($("#principal").classList.contains("grid-b")){
        $("#principal").classList.remove("grid-b");
        $("#principal").classList.add("grid-c");
    }
    else if($("#principal").classList.contains("grid-c")){
        $("#principal").classList.remove("grid-c");
        $("#principal").classList.add("grid-inicial");
    }
});