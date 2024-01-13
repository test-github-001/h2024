var image = document.getElementById("test"); 
setInterval(function(){
    setTimeout(function(){
        image.style.display = "block";
        setTimeout(function(){
            image.style.display = "none";
        },5000);
    },5000);
},5000);