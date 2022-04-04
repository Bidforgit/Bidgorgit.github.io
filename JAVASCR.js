function Table1()
    {
         var elem=document.getElementById("TableNested1");
         var hide = elem.style.display =="none";
         if (hide) {
             elem.style.display="table";
        } 
        else {
           elem.style.display="none";
        }
    }
function Table2()
    {
         var elem=document.getElementById("TableNested2");
         var hide = elem.style.display =="none";
         if (hide) {
             elem.style.display="table";
        } 
        else {
           elem.style.display="none";
        }
    }
    function login(){
        var email = document.forms["form"]["email"].value;
        var password = document.forms["form"]["password"].value;
        if (email == "admin@example.com" && password == "12345") {
            alert("Login Successful!");
        } else{
            alert("The email or password you entered is wrong!");
            return false;
        }
      }  