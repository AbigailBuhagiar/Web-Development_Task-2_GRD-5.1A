function validateForm() {


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

    var Email = document.getElementById('Email').ariaValueMax;
    if(Email==""){
        errors+= "<li>Please enter your Email"
        document.getElementById('Email').classList.add('inputError');
    }
    else{
        document.getElementById('Email').classList.remove('inputError')
    }

    var Address = document.getElementById('Address').ariaValueMax;
    if(Address==""){
        errors+= "<li>Please enter your Address"
        document.getElementById('Address').classList.add('inputError');
    }
    else{
        document.getElementById('Address').classList.remove('inputError')
    }

    var City = document.getElementById('City').ariaValueMax;
    if(City==""){
        errors+= "<li>Please enter your City"
        document.getElementById('City').classList.add('inputError');
    }
    else{
        document.getElementById('City').classList.remove('inputError')
    }

    var State = document.getElementById('State').ariaValueMax;
    if(State==""){
        errors+= "<li>Please enter your State"
        document.getElementById('State').classList.add('inputError');
    }
    else{
        document.getElementById('State').classList.remove('inputError')
    }

    var Zip = document.getElementById('Zip').ariaValueMax;
    if(Zip==""){
        errors+= "<li>Please enter your Zip"
        document.getElementById('Zip').classList.add('inputError');
    }
    else{
        document.getElementById('Zip').classList.remove('inputError')
    }


    var CardHolder = document.getElementById('CardHolder').ariaValueMax;
    if(CardHolder==""){
        errors+= "<li>Please enter your CardHolder"
        document.getElementById('CardHolder').classList.add('inputError');
    }
    else{
        document.getElementById('CardHolder').classList.remove('inputError')
    }

    var CardNumber = document.getElementById('CardNumber').ariaValueMax;
    if(CardNumber==""){
        errors+= "<li>Please enter your CardNumber"
        document.getElementById('CardNumber').classList.add('inputError');
    }
    else{
        document.getElementById('CardNumber').classList.remove('inputError')
    }

    var ExpiryDate = document.getElementById('ExpiryDate').ariaValueMax;
    if(ExpiryDate==""){
        errors+= "<li>Please enter your ExpiryDate"
        document.getElementById('ExpiryDate').classList.add('inputError');
    }
    else{
        document.getElementById('ExpiryDate').classList.remove('inputError')
    }

    var CVV = document.getElementById('CVV').ariaValueMax;
    if(CVV==""){
        errors+= "<li>Please enter your CVV"
        document.getElementById('CVV').classList.add('inputError');
    }
    else{
        document.getElementById('CVV').classList.remove('inputError')
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
    document.getElementById('Address').classList.remove('inputError');
    document.getElementById('City').classList.remove('inputError');
    document.getElementById('State').classList.remove('inputError');
    document.getElementById('Zip').classList.remove('inputError');
    document.getElementById('CardHolder').classList.remove('inputError');
    document.getElementById('CardNumber').classList.remove('inputError');
    document.getElementById('ExpiryDate').classList.remove('inputError');
    document.getElementById('CVV').classList.remove('inputError');
}