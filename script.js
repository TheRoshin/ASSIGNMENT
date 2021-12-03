/*function checkPassword(str)
  {
    var re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,10}$/;
    return re.test(str);
  }

function checkPassword(form)
{
  if(form.username.value == "") {
    alert("Error: Username cannot be blank!");
    form.username.focus();
    return false;
  }
  //re = /^\w+$/;
  var re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,10}$/;
  if(!re.test(form.username.value)) {
    alert("Error: Username must contain only letters, numbers and underscores!");
    form.username.focus();
    return false;
  }
  if(re != form.password1.value){
    alert("Error: Password must contain only letter, numbers, and underscores. password need least 8 characters long");
    form.password1.focus();
    return false;
  }
  if(form.password1.value != "" && form.password1.value == form.password2.value) {
    if(!checkPassword(form.password1.value)) {
      alert("The password you have entered is not valid!");
      form.password1.focus();
      return false;
    }
  } else {
    alert("Error: Please check that you've entered and confirmed your password!");
    form.password1.focus();
    return false;
  }
  return true;
}*/

function checkPassword(form) {
  password1 = form.password1.value;
  password2 = form.password2.value;
  // If password not entered
  if (password1 == ''){
    alert ("Please enter Password");
    return false;
  }
                      
  // If confirm password not entered
  else if (password2 == ''){
    alert ("Please enter confirm password");
    return false;
  }
                      
  // If Not same return False.    
  else if (password1 != password2) {
    alert ("\nPassword did not match: Please try again...")
    return false;
  }
}

function testing(){
  console.log("it is working!!\n\ntesting");
}

testing();