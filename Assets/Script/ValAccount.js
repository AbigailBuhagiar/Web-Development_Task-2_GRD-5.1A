function validateForm() {

    alert('Fill in all the Information')
    return false;

    var errors = "";

    var FirstName = document.getElementById('FirstName').ariaValueMax;
    if(FirstName==""){
        alert('Enter your First Name.')
        return false;
        errors+= "<li>Please enter FirstName"
        document.getElementById('FirstName').classList.add('inputError');
    }
    else{
        document.getElementById('FirstName').classList.remove('inputError')
    }


    var LastName = document.getElementById('LastName').ariaValueMax;
    if(LastName==""){
        errors+= "<li>Please enter your Last Name"
        document.getElementById('LastName').classList.add('inputError');
    }
    else{
        document.getElementById('LastName').classList.remove('inputError')
    }


    var Email = document.getElementById('Email').ariaValueMax;
    if(Email==""){
        errors+= "<li>Please enter your Email Address"
        document.getElementById('Email').classList.add('inputError');
    }
    else{
        document.getElementById('Email').classList.remove('inputError')
    }


    var Password = document.getElementById('Password').ariaValueMax;
    if(Password==""){
        errors+= "<li>Please enter your Password"
        document.getElementById('Password').classList.add('inputError');
    }
    else{
        document.getElementById('Password').classList.remove('inputError')
    }


    var CornfirmPassword = document.getElementById('CornfirmPassword').ariaValueMax;
    if(CornfirmPassword==""){
        errors+= "<li>Please Cornfirm your Password"
        document.getElementById('CornfirmPassword').classList.add('inputError');
    }
    else{
        document.getElementById('CornfirmPassword').classList.remove('inputError')
    }

    var EmailAddress = document.getElementById('EmailAddress').ariaValueMax;
    if(EmailAddress==""){
        errors+= "<li>Please enter your Email"
        document.getElementById('EmailAddress').classList.add('inputError');
    }
    else{
        document.getElementById('EmailAddress').classList.remove('inputError')
    }

    var LogPassword = document.getElementById('LogPassword').ariaValueMax;
    if(Email==""){
        errors+= "<li>Please enter your Password"
        document.getElementById('LogPassword').classList.add('inputError');
    }
    else{
        document.getElementById('LogPassword').classList.remove('inputError')
    }


    if(errors!=""){
        document.getElementById("ErrorList").innerHTML = errors;
        return false;
    }

    else{
        document.getElementById("ErrorList").innerHTML = "errors";
        return true;
    }
}


function resetForm() {
    document.getElementById('errorList').innerHTML = "errorList";
    document.getElementById('FirstName').classList.remove('inputError');
    document.getElementById('LastName').classList.remove('inputError');
    document.getElementById('Phone').classList.remove('inputError');
    document.getElementById('Message').classList.remove('inputError');
    document.getElementById('Email').classList.remove('inputError');
}