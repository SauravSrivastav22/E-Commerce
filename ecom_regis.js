function validate(){
    var x = document.forms["regis"]["name"].value;
    var y = document.forms["regis"]["uname"].value;
    var z = document.forms["regis"]["pass"].value;
    if (x == "") {
        alert("Name must be filled out");
        return false;
      }
    else if (y == "") {
        alert("Username must be filled out");
        return false;
      }
    else if (z == "") {
        alert("Password must be filled out");
        return false;
      }
    else {
        myForm();
    }
}
function myForm() {
    for(let i=1;i<10;i++){
        console.log(sessionStorage.getItem("0"+i));
        if(sessionStorage.getItem("0"+i) == null){
            var uid = document.getElementById("uname").value;
            var pass = document.getElementById("pass").value;
            var name = document.getElementById("name").value;
            sessionStorage.setItem("0"+i,i);
            sessionStorage.setItem(i + "username",uid);
            sessionStorage.setItem(i + "password",pass);
            sessionStorage.setItem(i + "name",name);
            break;
        }
        
    }
    alert("Registration successful");
}