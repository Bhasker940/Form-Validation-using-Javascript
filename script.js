
function validation(){
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var bloodgroup = document.getElementById('bloodgroup').value;
    var address = document.getElementById('address').value;
    var phonenumber = document.getElementById('phonenumber').value;
    


    var usercheck = /^[A-Za-z. ]{3,30}$/;
    var emailcheck = /^[A-Za-z0-9_]{3,}@[A-Za-z]{3,}[.]{1}[A-Za-z.]{2,6}$/;
    var bloodgroupcheck = /^(A|B|AB|O)[+-]$/;
    var addresscheck = /^[#.0-9a-zA-Z\s,-]+$/;
    var phonecheck = /^[789][0-9]{9}$/;
    
    

    if(usercheck.test(username)){
        document.getElementById('usererror').innerHTML = " ";
    }else{
        document.getElementById('usererror').innerHTML = "** Username is Invalid ";
        return false;
    }

    if(emailcheck.test(email)){
        document.getElementById('emailerror').innerHTML = " ";
    }else{
        document.getElementById('emailerror').innerHTML = "** Email is Invalid ";
        return false;
    }

    if(bloodgroupcheck.test(bloodgroup)){
        document.getElementById('bloodgrouperror').innerHTML = " ";
    }else{
        document.getElementById('bloodgrouperror').innerHTML = "** Bloodgroup is Invalid ";
        return false;
    }

    if(addresscheck.test(address)){
        document.getElementById('addresserror').innerHTML = " ";
    }else{
        document.getElementById('addresserror').innerHTML = "** Address is Invalid ";
        return false;
    }
    
    if(phonecheck.test(phonenumber)){
        document.getElementById('phonenumbererror').innerHTML = " ";
    }else{
        document.getElementById('phonenumbererror').innerHTML = "** Phone Number is Invalid ";
        return false;
    }

    
}