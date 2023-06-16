//Regular Expression
const alpha = /^[A-Za-z]+$/;
const pwd = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;;
const email = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;

//signup function validation
function signup() {
    var user = document.getElementById("text").value;
    var id = document.getElementById("mail").value;
    var pwd_1 = document.getElementById("password1").value;
    var pwd_2 = document.getElementById("password2").value;
    var object = {name:user, email:id, ps_1:pwd_1, ps_2:pwd_2};

    if (user != "" && id != "" && pwd_1 != "" && pwd_2 != ""){
        if(alpha.test(user) && email.test(id) && pwd.test(pwd_1) && pwd.test(pwd_2)){
             if(localStorage.length==0){
                var json = JSON.stringify(object);
                localStorage.setItem("user1",json);
                alert("Successfully Completed");
                window.location = "ultron.html";
            }
            else if(localStorage.length==1){
                var json = JSON.stringify(object);
                localStorage.setItem("user2",json);
                alert("Successfully Completed");
                window.location = "ultron.html";
            }
            else if(localStorage.length==2){
                var json = JSON.stringify(object);
                localStorage.setItem("user3",json);
                alert("Successfully Completed");
                window.location = "ultron.html";
            }
            else if(localStorage.length==3){
                var json = JSON.stringify(object);
                localStorage.setItem("user4",json);
                alert("Successfully Completed");
                window.location = "ultron.html";
            }
            else if(localStorage.length==4){
                var json = JSON.stringify(object);
                localStorage.setItem("user5",json);
                alert("Successfully Completed");
                window.location = "ultron.html";
            }
            else{
                alert("Storage Full da naye");
            }
        }
        else{
            alert("Invalid  Name or E-mail or Password")
        }
    }else{
        alert("Enter valid details");
    }
}

//login process
function login(){
    var Email = document.getElementById("text").value;
    var Loginpwd = document.getElementById("password").value;
     
//json to js
    var text_1 = localStorage.getItem("user1");
    var data_1 = JSON.parse(text_1);   //converting json to js

    var text_2 = localStorage.getItem("user2");
    var data_2 = JSON.parse(text_2);    //converting json to js

    var text_3 = localStorage.getItem("user3");
    var data_3 = JSON.parse(text_3);     //converting json to js

    var text_4 = localStorage.getItem("user4");
    var data_4 = JSON.parse(text_4);     //converting json to js

    var text_5 = localStorage.getItem("user5");
    var data_5 = JSON.parse(text_5);     //converting json to js

    if(Email == data_1.email && Loginpwd == data_1.ps_2){
        alert("Successfully Completed");
        window.location = "ultron.html";
    
    }
    else if(Email == data_2.email && Loginpwd == data_2.ps_2){
        alert("Successfully Completed");
        window.location = "ultron.html";
    }
    else if(Email == data_3.email && Loginpwd == data_3.ps_2){
        alert("Successfully Completed");
        window.location = "ultron.html";
    }
    else if(Email == data_4.email && Loginpwd == data_4.ps_2){
        alert("Successfully Completed");
        window.location = "ultron.html";
    }
    else if(Email == data_5.email && Loginpwd == data_5.ps_2){
        alert("Successfully Completed");
        window.location = "ultron.html";
    }
}

//quote validation
function validate(){
    var User = document.getElementById("name").value;
    var Email = document.getElementById("email").value;
    var Number = document.getElementById("number").value;
    var Address = document.getElementById("address").value;
    var Model = document.getElementById("model").value;
    var Issue = document.getElementById("issue").value;
    //var Time = document.getElementById("time").value;
    
    var value = localStorage.getItem("user1");
    var MyJSON = JSON.parse(value);
    if(User == ""){
        alert("Enter your name");
    }
    else if(Email == ""){
        alert("Enter your E-mail");
    }
    else if(Number == ""){
        alert("Enter your number");
    }
    else if(Address == ""){
        alert("Enter your address");
    }
    else if(Model == ""){
        alert("Select any item");
    }
    else if(Issue == ""){
        alert("Select any option");
    }
    // else if(Time == ""){
    //     alert("Select required time");
    // }
    else{"Enter details to continue"}

    var jsObject = {name:User, email:Email, number:Number, address:Address, model:Model, issue:Issue};   //, time:Time
     if(User == MyJSON.name){
        var myJSON = JSON.stringify(jsObject);
        localStorage.setItem("key1",myJSON);
        window.location = "view.html";
    }
    else if(localStorage.setItem == 1){
        var JSON = JSON.stringify(jsObject);
        localStorage.setItem("key2",JSON);
        window.location = "view.html";
    }
    else if(localStorage.setItem == 2){
        var JSON = JSON.stringify(jsObject);
        localStorage.setItem("key3",JSON);
        window.location = "view.html";
    }
    else if(localStorage.setItem == 3){
        var JSON = JSON.stringify(jsObject);
        localStorage.setItem("key4",JSON);
        window.location = "view.html";
    }
    else if(localStorage.setItem == 4){
        var JSON = JSON.stringify(jsObject);
        localStorage.setItem("key5",JSON);
        window.location = "view.html";
    }
    else{"Storage full"}
};
