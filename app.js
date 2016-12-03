function Grade(e){
    if(e.keyCode==13){
    var val = document.getElementById("txt").value;
    
 switch(true){
     case val>=80 && val <=100:
    document.getElementById("h1").innerHTML = "A+";
     break;
     case val>=70 && val <=100 :
    document.getElementById("h1").innerHTML = "A";
     break;
     case val>=60 && val <=100:
    document.getElementById("h1").innerHTML = "B";
     break;
     case val>=50 && val <=100:
    document.getElementById("h1").innerHTML = "C";
     break;
     case val>=40 && val <=100:
    document.getElementById("h1").innerHTML = "D";
     break;
     case val<40 && val <=100:
    document.getElementById("h1").innerHTML = "Fail";
     break;
     case val>100:
     document.getElementById("h1").innerHTML = "Pagal percentage 100 hoti hain!LOL";
     break;
 }
        
 }
    
}
function Check(){
    var email = document.getElementById("email").value;
    var pass = document.getElementById("pass").value;
    if(email=="" && pass==""){
        document.getElementById("h2").innerHTML="Please Fill Email and Password";
            
    }else{
    if(!email == ""|| email==" "){
        if(pass=="" || pass==" "){
            document.getElementById("h2").innerHTML="Please Fill Password";
        }
    }else{
        document.getElementById("h2").innerHTML="Please Fill Email";
    }
    }
  
            
}