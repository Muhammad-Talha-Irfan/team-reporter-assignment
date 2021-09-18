function signup(){
    var newname = document.getElementById('name').value
    var newemail = document.getElementById('email').value
    var newpass = document.getElementById('pwd').value
    // console.log(newname, newemail, newpass);
    // if(newname, newemail, newpass === ""){
    //     alert("please fill properly")
    // }
    window.localStorage.setItem("name", newname);
    window.localStorage.setItem("email" ,newemail);
    window.localStorage.setItem("password", newpass);
    // alert("you are login successfully"); 
}
var storedname = localStorage.getItem("name");
var storedemail = localStorage.getItem("email");
var storedpass = localStorage.getItem("password");
// alert(storedpass)
    

function login(){
    var logemail = document.getElementById('ckemail').value
    var logpass = document.getElementById('ckpass').value

    if
    (logemail === storedemail & logpass === storedpass ){
    window.location.href = "home.html";
    }else{
        alert("please eneter correct email and password")
    }
}

// var welcome = document.getElementById("welcome").innerHTML =  "Welcome" + " " + storedname;
function back(){
    window.location.href = "index.html"
}