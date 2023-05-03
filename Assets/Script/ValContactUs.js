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
        errors+= "<li>Please enter LastName"
        document.getElementById('LastName').classList.add('inputError');
    }
    else{
        document.getElementById('LastName').classList.remove('inputError')
    }


    var Phone = document.getElementById('Phone').ariaValueMax;
    if(Phone==""){
        errors+= "<li>Please enter Phone Number"
        document.getElementById('Phone').classList.add('inputError');
    }
    else{
        document.getElementById('Phone').classList.remove('inputError')
    }


    var Message = document.getElementById('Message').ariaValueMax;
    if(Message==""){
        errors+= "<li>Please enter your Messager"
        document.getElementById('Message').classList.add('inputError');
    }
    else{
        document.getElementById('Message').classList.remove('inputError')
    }


    var Email = document.getElementById('Email').ariaValueMax;
    if(Email==""){
        errors+= "<li>Please enter your Email"
        document.getElementById('Email').classList.add('inputError');
    }
    else{
        document.getElementById('Email').classList.remove('inputError')
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