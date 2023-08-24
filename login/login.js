function validate()
{
  //Email Validation
  var email=document.getElementById("email").value;
  if(!validateEmail(email))
    return false;

  //Password Validation
  var password=document.getElementById("password").value;
  if(!validatePassword(password))
    return false;

  //Check Valid email & password
  if(email =="test@gmail.com" && password=="Test@123")
  {
    //alert("login successfully");
    window.location.href="./home.html";
  }
  else
  {
    document.getElementById("error").innerHTML = "Email or password is wrong";
    //alert("Email or password is wrong");
  }
}

function validateEmail(email){
  if(email.length == 0){
    document.getElementById("error").innerHTML = "Enter email";
    //alert ("Enter email");
    return false;
  }else{
    if(email.includes("@") && email.includes(".")){
      return true;
    }else{
      document.getElementById("error").innerHTML ="Email does not include @ and .";
      //alert("Email does not include @ and .");
      return false;
    }
  }
}
function validatePassword(password){
  if(password.length == 0){
    document.getElementById("error").innerHTML = "Enter password";
    //alert("Enter password");
    return false;
  }else {
    if(password.length >= 8 && password.length<=10)
    return true;
    else{
      document.getElementById("error").innerHTML = "Password should have 8 to 10 characters."
      //alert("Password is short. Password should have 8 to 10 characters.");
      return false;
    }
  }
}
