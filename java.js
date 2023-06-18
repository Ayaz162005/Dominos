
 function display(){

    let type=document.getElementById("ul").style.display;
    if(type=="none"){
            document.getElementById("ul").style.display="block";
            }
    else  {
        document.getElementById("ul").style.display="none";
     
    }
    
        }
    let a=true;
    
    
    setInterval(function(){
    if(a){
       document.getElementById("c1").style.backgroundColor="rgb(98, 238, 238)";
       document.getElementById("c3").style.backgroundColor="rgb(98, 238, 238)";
       document.getElementById("c5").style.backgroundColor="rgb(98, 238, 238)"; 
       document.getElementById("c2").style.backgroundColor="rgb(252, 215, 6)"; 
       document.getElementById("c4").style.backgroundColor="rgb(252, 215, 6)"; 
       document.getElementById("i1").style.backgroundColor=" chartreuse"; 
       document.getElementById("i2").style.backgroundColor=" chartreuse"; 
       document.getElementById("i3").style.backgroundColor=" chartreuse"; 
a=false;
    }
    else{
        document.getElementById("c1").style.backgroundColor="rgba(26, 26, 242, 0.515)";
        document.getElementById("c3").style.backgroundColor="rgba(26, 26, 242, 0.515)";
        document.getElementById("c5").style.backgroundColor="rgba(26, 26, 242, 0.515)";
        document.getElementById("c2").style.backgroundColor="greenyellow";
        document.getElementById("c4").style.backgroundColor="greenyellow";
        document.getElementById("i1").style.backgroundColor="white";
        document.getElementById("i2").style.backgroundColor="white";
        document.getElementById("i3").style.backgroundColor="white";
a=true;
    }
    
    
    
    },3000)
    
