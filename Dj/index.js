for(var i=0;i<6;i++){
    document.querySelectorAll(".snd")[i].addEventListener("click", function(){      
        var key=this.innerHTML;
        sound(key);
        btnanim(key);
    });  
    
}
document.addEventListener("keypress",function(event){
    sound(event.key);
    btnanim(event.key);
});


function btnanim(key){
    document.querySelector("."+key).classList.add("pressed");
    setTimeout(function(){
        document.querySelector("."+key).classList.remove("pressed");
    }, 100);    

}





function sound(key){
    switch(key){
       case "a":
       var m1=new Audio("music/a.wav");
       m1.play();
       break;
       case "s":
       var m2=new Audio("music/s.wav");
       m2.play();
       break;
       case "d":
       var m3=new Audio("music/d.wav");
       m3.play();
       break;
       case "j":
       var m4=new Audio("music/j.wav");
       m4.play();
       break;
       case "k":
       var m5=new Audio("music/k.wav");
       m5.play();
       break;
       case "l":
       var m6=new Audio("music/l.wav");
       m6.play();
       break;
       default:console.log(key);
    }
} 




